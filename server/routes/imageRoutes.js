import express from 'express';
import dotenv from 'dotenv';
import OpenAI from 'openai';

dotenv.config();

const router = express.Router();

const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

router.route('/').get((req, res) => {
  res.status(200).json({ message: 'Hello from GPT Image 1.5!' });
});

router.route('/').post(async (req, res) => {
  try {
    const { prompt } = req.body;

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

    const aiResponse = await openai.images.generate({
      model: 'gpt-image-1.5',
      prompt: trimmedPrompt,
      n: 1,
      size: '1024x1024',
      quality: 'high',
    });

    const image = aiResponse.data[0].b64_json;
    res.status(200).json({ photo: image });
  } catch (error) {
    console.error(error);
    const errorMessage = error?.message || 'Something went wrong';
    res.status(500).send(errorMessage);
  }
});

export default router;