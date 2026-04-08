import { MODEL_REGISTRY, DEFAULT_MODEL } from '../config/models.js';
import * as openai from './providers/openai.js';
import * as google from './providers/google.js';
import * as blackForestLabs from './providers/blackForestLabs.js';

const providers = { openai, google, blackForestLabs };

export function isValidModel(modelId) {
  const config = MODEL_REGISTRY[modelId];
  return !!config && config.generatable !== false;
}

export async function generateImage(prompt, modelId = DEFAULT_MODEL) {
  const config = MODEL_REGISTRY[modelId];
  if (!config) {
    throw new Error(`Unknown model: ${modelId}`);
  }

  const finalPrompt = config.promptPrefix
    ? `${config.promptPrefix} ${prompt}`
    : prompt;

  const provider = providers[config.provider];
  if (!provider) {
    throw new Error(`No provider configured for: ${config.provider}`);
  }

  console.log(`[imageService] model=${modelId} → provider=${config.provider}`);

  return provider.generate(finalPrompt);
}
