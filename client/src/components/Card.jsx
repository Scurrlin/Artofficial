import React, { useRef } from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import toast from 'react-hot-toast';

import { download } from '../assets';
import { downloadImage, optimizedImageUrl, placeholderImageUrl } from '../utils';

const Card = ({ _id, name, prompt, photo }) => {
  const cardRef = useRef(null);

  const copyPrompt = () => {
    navigator.clipboard.writeText(prompt);
    toast.success('Prompt copied to clipboard!');
  };

  const handleImageLoaded = () => {
    setTimeout(() => {
      if (cardRef.current) {
        cardRef.current.style.backgroundColor = '#f9fafe';
      }
    }, 300);
  };

  return (
    <div ref={cardRef} className="rounded-xl group relative shadow-lg hover:shadow-xl card aspect-square overflow-hidden bg-[#10131f]">
      <LazyLoadImage
        className="w-full h-full object-cover rounded-xl"
        src={optimizedImageUrl(photo)}
        placeholderSrc={placeholderImageUrl(photo)}
        alt={prompt}
        effect="blur"
        width="100%"
        height="100%"
        threshold={1000}
        afterLoad={handleImageLoaded}
      />
      <div className="hidden group-hover:flex flex-col absolute bottom-0 left-0 right-0 bg-[#10131f] m-2 p-4 rounded-md">
        <p className="text-white text-[13px] overflow-y-auto prompt">{prompt.length > 70 ? `${prompt.slice(0, 70)}...` : prompt}</p>

        <div className="mt-5 flex justify-between items-center gap-2">
          <p className="text-white text-[13px]">{name}</p>
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
    </div>
  );
};

export default Card;