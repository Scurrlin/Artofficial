export const MODEL_REGISTRY = {
  'dall-e-3': {
    provider: null,
    promptPrefix: '',
    generatable: false,
  },
  'gpt-image-1.5': {
    provider: 'openai',
    promptPrefix:
      'Render the image with cinematic lighting, balanced color grading, clean composition, coherent forms, and high detail:',
  },
  'nano-banana-2': {
    provider: 'google',
    promptPrefix: '',
  },
  'flux-2': {
    provider: 'blackForestLabs',
    promptPrefix: '',
  },
};

export const DEFAULT_MODEL = 'gpt-image-1.5';
