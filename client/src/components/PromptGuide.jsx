import React from 'react';
import ReactMarkdown from 'react-markdown';
import rehypeRaw from 'rehype-raw';
import guides from '../content/guides';

const PROSE_CLASSES = 'prose prose-lg prose-invert max-w-none prose-headings:text-white prose-p:text-white/80 prose-strong:text-white prose-code:bg-white/10 prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded prose-code:text-white/90 prose-code:before:content-none prose-code:after:content-none prose-pre:bg-white/10 prose-pre:text-white/90 prose-a:text-[#6dadeb] prose-blockquote:border-[#6dadeb] prose-blockquote:text-white/70 prose-hr:border-white/20 prose-li:text-white/80';

const PromptGuide = ({ selectedModel }) => {
  const guide = guides[selectedModel];

  if (!guide) return null;

  if (typeof guide !== 'string') {
    const GuideComponent = guide;
    return <GuideComponent />;
  }

  return (
    <article className={PROSE_CLASSES}>
      <ReactMarkdown rehypePlugins={[rehypeRaw]}>{guide}</ReactMarkdown>
    </article>
  );
};

export default PromptGuide;
