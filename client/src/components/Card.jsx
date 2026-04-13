import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import toast from 'react-hot-toast';

import { downloadImage, optimizedImageUrl, placeholderImageUrl, responsiveSrcSet, CARD_SIZES } from '../utils';

const Card = ({ _id, name, prompt, photo, priority }) => {
  const copyPrompt = async () => {
    try {
      await navigator.clipboard.writeText(prompt);
      toast.success('Prompt copied to clipboard');
    } catch {
      toast.error('Failed to copy prompt');
    }
  };

  return (
    <div className="rounded-xl flex flex-col shadow-lg hover:shadow-xl card overflow-hidden bg-[#10131f]">
      <div className="group relative aspect-square overflow-hidden bg-[#10131f]">
        {priority ? (
          <img
            className="w-full h-full object-cover"
            src={optimizedImageUrl(photo)}
            srcSet={responsiveSrcSet(photo)}
            sizes={CARD_SIZES}
            alt={prompt}
            width="100%"
            height="100%"
            fetchPriority="high"
            loading="eager"
          />
        ) : (
          <LazyLoadImage
            className="w-full h-full object-cover"
            src={optimizedImageUrl(photo)}
            srcSet={responsiveSrcSet(photo)}
            sizes={CARD_SIZES}
            placeholderSrc={placeholderImageUrl(photo)}
            alt={prompt}
            effect="blur"
            width="100%"
            height="100%"
            threshold={300}
          />
        )}
        <div className="opacity-0 group-hover:opacity-100 group-focus-within:opacity-100 flex transition-opacity absolute top-0 left-0 right-0 bg-[#10131f] m-2 p-3 rounded-md justify-between items-center gap-2">
          <p className="text-white text-[13px] truncate">{name}</p>
          <div className="flex items-center gap-2 flex-shrink-0">
            <button
              type="button"
              onClick={copyPrompt}
              className="outline-none bg-transparent border-none cursor-pointer"
              title="Copy prompt"
            >
              <img src="/copy.svg" alt="Copy prompt" className="w-6 h-6" />
            </button>
            <button
              type="button"
              onClick={() => downloadImage(_id, photo)}
              className="outline-none bg-transparent border-none cursor-pointer"
              title="Download image"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" viewBox="0 0 32 32" fill="#ffffff" aria-hidden="true">
                <path d="M26 24v4H6v-4H4v4a2 2 0 0 0 2 2h20a2 2 0 0 0 2-2v-4zM15 3v17.17l-4.59-4.58L9 17l7 7 7-7-1.41-1.41L17 20.17V3z" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      <div className="bg-[#10131f] p-3">
        <p className="text-white text-[13px] line-clamp-3">{prompt}</p>
      </div>
    </div>
  );
};

export default Card;