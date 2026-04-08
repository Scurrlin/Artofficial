import Replicate from 'replicate';
import dotenv from 'dotenv';

dotenv.config();

const replicate = new Replicate();

export async function generate(prompt) {
  const output = await replicate.run('black-forest-labs/flux-2-pro', {
    input: { prompt },
  });

  const response = await fetch(output.url());
  if (!response.ok) {
    throw new Error(`Failed to download Flux image (${response.status})`);
  }

  const buffer = Buffer.from(await response.arrayBuffer());
  return { base64: buffer.toString('base64') };
}
