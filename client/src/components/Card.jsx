import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import toast from 'react-hot-toast';

import { download } from '../assets';
import { downloadImage } from '../utils';

const Card = ({ _id, name, prompt, photo }) => {
  const copyPrompt = () => {
    navigator.clipboard.writeText(prompt);
    toast.success('Prompt copied to clipboard!');
  };

  return (
    <div className="rounded-xl group relative shadow-lg hover:shadow-xl card">
      <LazyLoadImage
        className="w-full h-auto object-cover rounded-xl"
        src={photo}
        alt={prompt}
        effect="blur"
      />
      <div className="hidden group-hover:flex flex-col absolute bottom-0 left-0 right-0 bg-[#10131f] m-2 p-4 rounded-md">
        <p className="text-white text-sm overflow-y-auto prompt">{prompt.length > 100 ? `${prompt.slice(0, 100)}...` : prompt}</p>

        <div className="mt-5 flex justify-between items-center gap-2">
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 rounded-full bg-green-700 flex justify-center items-center text-white text-xs font-bold">
              {name[0]}
            </div>
            <p className="text-white text-sm">{name}</p>
          </div>
          <div className="flex items-center gap-2">
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