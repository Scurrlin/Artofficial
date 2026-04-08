import OpenAI from 'openai';
import dotenv from 'dotenv';

dotenv.config();

const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

export async function generate(prompt) {
  const aiResponse = await openai.images.generate({
    model: 'gpt-image-1.5',
    prompt,
    n: 1,
    size: '1024x1024',
    quality: 'high',
  });

  return { base64: aiResponse.data[0].b64_json };
}
