import dotenv from 'dotenv';

dotenv.config();

const API_KEY = process.env.GOOGLE_API_KEY;
const ENDPOINT =
  'https://generativelanguage.googleapis.com/v1beta/models/imagen-3.0-generate-002:predict';

export async function generate(prompt) {
  const response = await fetch(`${ENDPOINT}?key=${API_KEY}`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      instances: [{ prompt }],
      parameters: {
        sampleCount: 1,
        aspectRatio: '1:1',
      },
    }),
  });

  if (!response.ok) {
    const err = await response.text();
    throw new Error(`Google Imagen API error (${response.status}): ${err}`);
  }

  const data = await response.json();
  const base64 = data.predictions?.[0]?.bytesBase64Encoded;

  if (!base64) {
    throw new Error('Google Imagen returned no image data');
  }

  return { base64 };
}
