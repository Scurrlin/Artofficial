import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import toast from 'react-hot-toast';

import { download } from '../assets';
import { downloadImage, optimizedImageUrl, placeholderImageUrl } from '../utils';

const Card = ({ _id, name, prompt, photo }) => {
  const copyPrompt = () => {
    navigator.clipboard.writeText(prompt);
    toast.success('Prompt copied to clipboard!');
  };

  return (
    <div className="rounded-xl flex flex-col shadow-lg hover:shadow-xl card overflow-hidden bg-[#10131f]">
      <div className="group relative aspect-square overflow-hidden">
        <LazyLoadImage
          className="w-full h-full object-cover"
          src={optimizedImageUrl(photo)}
          placeholderSrc={placeholderImageUrl(photo)}
          alt={prompt}
          effect="blur"
          width="100%"
          height="100%"
          threshold={1000}
        />
        <div className="hidden group-hover:flex absolute top-0 left-0 right-0 bg-[#10131f] m-2 p-3 rounded-md justify-between items-center gap-2">
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
              className="outline-none bg-transparent border-none"
            >
              <img
                src={download}
                alt="download"
                className="w-6 h-6 object-contain invert"
              />
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