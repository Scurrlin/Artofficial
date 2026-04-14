import express from 'express';
import DailyLimit from '../mongodb/models/dailyLimit.js';
import { generateImage, isValidModel } from '../services/imageService.js';

const router = express.Router();

router.route('/').get((req, res) => {
  res.status(200).json({ message: 'Hello from Artofficial Image API!' });
});

router.route('/').post(async (req, res) => {
  try {
    const { prompt, model, jsonMode } = req.body;

    if (!model) {
      return res.status(400).json({
        success: false,
        message: 'Model is required',
      });
    }

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

    if (trimmedPrompt.length > 2000) {
      return res.status(400).json({
        success: false,
        message: 'Prompt must be less than 2000 characters',
      });
    }

    if (!isValidModel(model)) {
      return res.status(400).json({
        success: false,
        message: `Unsupported model: ${model}`,
      });
    }

    const today = new Date().toISOString().split('T')[0];
    const result = await DailyLimit.findOneAndUpdate(
      { date: today },
      { $inc: { total: 1, [`models.${model}`]: 1 } },
      { upsert: true, new: true },
    );

    if (result.total > 50) {
      await DailyLimit.updateOne(
        { date: today },
        { $inc: { total: -1, [`models.${model}`]: -1 } },
      );
      return res.status(429).json({
        success: false,
        message: 'Daily image limit reached (50/day). Please try again tomorrow!',
      });
    }

    const { base64 } = await generateImage(trimmedPrompt, model, !!jsonMode);

    res.status(200).json({ photo: base64 });

  } catch (error) {
    console.error(error);
    const errorMessage = error?.message || 'Something went wrong';
    res.status(500).json({ success: false, message: errorMessage });
  }
});

export default router;
