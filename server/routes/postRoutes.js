import express from 'express';
import * as dotenv from 'dotenv';
import { v2 as cloudinary } from 'cloudinary';
import Post from '../mongodb/models/post.js';

dotenv.config();

const router = express.Router();

let postsCache = { data: null, timestamp: 0 };
let statsCache = { data: null, timestamp: 0 };
const CACHE_TTL = 60_000;

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

router.route('/stats').get(async (req, res) => {
  try {
    const now = Date.now();
    if (statsCache.data && (now - statsCache.timestamp) < CACHE_TTL) {
      return res.status(200).json(statsCache.data);
    }
    const [stats] = await Post.aggregate([
      {
        $group: {
          _id: null,
          imageCount: { $sum: 1 },
          uniqueUsers: { $addToSet: '$name' },
        },
      },
      {
        $project: {
          _id: 0,
          imageCount: 1,
          userCount: { $size: '$uniqueUsers' },
        },
      },
    ]);
    const response = {
      success: true,
      data: stats || { imageCount: 0, userCount: 0 },
    };
    statsCache = { data: response, timestamp: now };
    res.status(200).json(response);
  } catch (err) {
    res.status(500).json({ success: false, message: 'Fetching stats failed' });
  }
});

router.route('/').get(async (req, res) => {
  try {
    const now = Date.now();
    if (postsCache.data && (now - postsCache.timestamp) < CACHE_TTL) {
      return res.status(200).json(postsCache.data);
    }
    const posts = await Post.find({}).sort({ _id: -1 }).lean();
    const response = { success: true, data: posts };
    postsCache = { data: response, timestamp: now };
    res.status(200).json(response);
  } catch (err) {
    res.status(500).json({ success: false, message: 'Fetching posts failed, please try again' });
  }
});

router.route('/').post(async (req, res) => {
  try {
    const { name, prompt, photo, model } = req.body;

    // Validate name
    if (!name || typeof name !== 'string') {
      return res.status(400).json({
        success: false,
        message: 'Name is required and must be a string',
      });
    }

    const trimmedName = name.trim();
    if (trimmedName.length === 0) {
      return res.status(400).json({
        success: false,
        message: 'Name cannot be empty',
      });
    }

    if (trimmedName.length > 100) {
      return res.status(400).json({
        success: false,
        message: 'Name must be less than 100 characters',
      });
    }

    // Validate prompt
    if (!prompt || typeof prompt !== 'string') {
      return res.status(400).json({
        success: false,
        message: 'Prompt is required and must be a string',
      });
    }

    const trimmedPrompt = prompt.trim();
    if (trimmedPrompt.length === 0) {
      return res.status(400).json({
        success: false,
        message: 'Prompt cannot be empty',
      });
    }

    if (trimmedPrompt.length > 1000) {
      return res.status(400).json({
        success: false,
        message: 'Prompt must be less than 1000 characters',
      });
    }

    // Validate photo (must be a base64 data URI)
    if (!photo || typeof photo !== 'string') {
      return res.status(400).json({
        success: false,
        message: 'Photo is required and must be a string',
      });
    }

    if (!photo.startsWith('data:image/')) {
      return res.status(400).json({
        success: false,
        message: 'Photo must be a valid base64 image data URI',
      });
    }

    const photoUrl = await cloudinary.uploader.upload(photo, {
      eager: [
        { width: 400, crop: 'fill', quality: 'auto:best', fetch_format: 'auto' },
        { width: 640, crop: 'fill', quality: 'auto:best', fetch_format: 'auto' },
        { width: 828, crop: 'fill', quality: 'auto:best', fetch_format: 'auto' },
        { width: 1080, crop: 'fill', quality: 'auto:best', fetch_format: 'auto' },
        { width: 1440, crop: 'fill', quality: 'auto:best', fetch_format: 'auto' },
      ],
      eager_async: true,
    });

    const newPost = await Post.create({
      name: trimmedName,
      prompt: trimmedPrompt,
      photo: photoUrl.secure_url,
      ...(model && { model }),
    });

    postsCache = { data: null, timestamp: 0 };
    statsCache = { data: null, timestamp: 0 };

    res.status(200).json({ success: true, data: newPost });
  } catch (err) {
    console.error('Error creating post:', err);
    res.status(500).json({ success: false, message: 'Unable to create a post, please try again' });
  }
});

export default router;