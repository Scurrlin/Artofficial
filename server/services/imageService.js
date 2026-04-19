import { MODEL_REGISTRY } from '../config/models.js';
import * as openai from './providers/openai.js';
import * as google from './providers/google.js';
import * as blackForestLabs from './providers/blackForestLabs.js';

const providers = { openai, google, blackForestLabs };

const SQUARE_SUFFIX_TEXT =
  'The final image must be a 1:1 square. Ignore any other aspect ratio requested in the prompt.';

const SQUARE_SUFFIX_JSON = '{ "aspect_ratio": "1:1" }';

export function isValidModel(modelId) {
  const config = MODEL_REGISTRY[modelId];
  return !!config && config.generatable !== false;
}

export async function generateImage(prompt, modelId, jsonMode = false) {
  const config = MODEL_REGISTRY[modelId];
  if (!config) {
    throw new Error(`Unknown model: ${modelId}`);
  }

  const suffix = jsonMode ? SQUARE_SUFFIX_JSON : SQUARE_SUFFIX_TEXT;
  const finalPrompt = `${prompt}\n${suffix}`;

  const provider = providers[config.provider];
  if (!provider) {
    throw new Error(`No provider configured for: ${config.provider}`);
  }

  return provider.generate(finalPrompt);
}
