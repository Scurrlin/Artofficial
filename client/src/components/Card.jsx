import React, { useState } from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

import { download } from '../assets';
import { downloadImage } from '../utils';

const Card = ({ _id, name, prompt, photo }) => {
  const [isLoading, setIsLoading] = useState(true);

  // Function to generate optimized Cloudinary URL
  const getOptimizedImageUrl = (url) => {
    // Check if it's a Cloudinary URL
    if (url.includes('cloudinary.com')) {
      // Extract base URL and transformation string
      const [baseUrl, ...transformationParts] = url.split('/upload/');
      const transformationString = transformationParts.join('/upload/');

      // Add optimization parameters
      const optimizations = [
        'f_auto', // Automatic format selection (WebP/AVIF)
        'q_auto', // Automatic quality optimization
        'w_auto', // Automatic width based on viewport
        'c_scale', // Scale mode
        'dpr_auto', // Automatic device pixel ratio
      ].join(',');

      return `${baseUrl}/upload/${optimizations}/${transformationString}`;
    }
    return url;
  };

  return (
    <div className="rounded-xl group relative shadow-lg hover:shadow-xl card">
      <LazyLoadImage
        className={`w-full h-auto object-cover rounded-xl transition-opacity duration-300 ${
          isLoading ? 'opacity-0' : 'opacity-100'
        }`}
        src={getOptimizedImageUrl(photo)}
        alt={prompt}
        effect="blur"
        threshold={100}
        beforeLoad={() => setIsLoading(true)}
        afterLoad={() => setIsLoading(false)}
        placeholderSrc={`${photo}?tr=w-20,q-5`} // Low quality placeholder
        wrapperClassName="w-full"
      />
      {isLoading && (
        <div className="absolute inset-0 bg-gray-200 animate-pulse rounded-xl" />
      )}
      <div className="hidden group-hover:flex flex-col absolute bottom-0 left-0 right-0 bg-[#10131f] m-2 p-4 rounded-md">
        <p className="text-white text-sm overflow-y-auto prompt">{prompt}</p>

        <div className="mt-5 flex justify-between items-center gap-2">
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 rounded-full bg-green-700 flex justify-center items-center text-white text-xs font-bold">
              {name[0]}
            </div>
            <p className="text-white text-sm">{name}</p>
          </div>
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
  );
};

export default Card;