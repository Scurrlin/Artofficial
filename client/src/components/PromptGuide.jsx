import React, { Suspense } from 'react';

const GUIDES = {
  'gpt-image-1.5': React.lazy(() => import('../content/guides/GptImageGuide')),
  'nano-banana-2': React.lazy(() => import('../content/guides/NanoGuide')),
  'flux-2': React.lazy(() => import('../content/guides/FluxGuide')),
};

export const GUIDED_MODELS = new Set(Object.keys(GUIDES));

const PromptGuide = React.memo(({ selectedModel }) => {
  const GuideComponent = GUIDES[selectedModel];
  if (!GuideComponent) return null;

  return (
    <Suspense fallback={<div className="min-h-screen" />}>
      <GuideComponent />
    </Suspense>
  );
});

PromptGuide.displayName = 'PromptGuide';

export default PromptGuide;
