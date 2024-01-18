import express from 'express';
import dotenv from 'dotenv';
import OpenAI from 'openai';

dotenv.config();

const router = express.Router();

router.use(express.json());

const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

const errorHandler = (res, status, message) => {
  res.status(status).json({ success: false, message });
};

router.route('/').get((req, res) => {
  res.status(200).json({ message: 'Hello from DALL-E!' });
});

router.route('/').post(async (req, res) => {
  try {
    const { prompt } = req.body;

    const aiResponse = await openai.images.generate({
      prompt,
      n: 1,
      size: '1024x1024',
      response_format: 'b64_json',
    });

    const image = aiResponse.data[0].b64_json;
    res.status(200).json({ photo: image });
  } catch (error) {
    console.error(error);
    errorHandler(res, 500, error?.response?.data?.error?.message || 'Something went wrong');
  }
});

export default router;