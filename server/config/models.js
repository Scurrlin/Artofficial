export const MODEL_REGISTRY = {
  'dall-e-3': {
    provider: null,
    generatable: false,
  },
  'gpt-image-1.5': {
    provider: 'openai',
  },
  'nano-banana-2': {
    provider: 'google',
  },
  'flux-2': {
    provider: 'blackForestLabs',
  },
};

export const DEFAULT_MODEL = 'gpt-image-1.5';
