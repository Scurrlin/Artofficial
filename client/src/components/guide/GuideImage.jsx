import React, { useContext } from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import { optimizedImageUrl, placeholderImageUrl, responsiveSrcSet } from '../../utils';
import { GuideEagerContext } from './GuideEagerContext';

const GUIDE_SIZES = [
  '(max-width: 639px) 92vw',
  '(max-width: 1023px) 80vw',
  '60vw',
].join(', ');

const GuideImage = ({ src, alt, className, style, maxHeight, aspectRatio, objectFit = 'cover' }) => {
  const eager = useContext(GuideEagerContext);

  if (aspectRatio) {
    return (
      <div className={`bg-white/5 overflow-hidden ${className || ''}`} style={style}>
        <div className="overflow-hidden" style={{ aspectRatio }}>
          <LazyLoadImage
            src={optimizedImageUrl(src)}
            srcSet={responsiveSrcSet(src) || undefined}
            sizes={GUIDE_SIZES}
            placeholderSrc={placeholderImageUrl(src)}
            alt={alt}
            effect="blur"
            visibleByDefault={eager}
            wrapperClassName="w-full h-full"
            wrapperProps={{ style: { display: 'block', height: '100%' } }}
            style={{
              display: 'block',
              width: '100%',
              height: '100%',
              objectFit,
              ...(maxHeight ? { maxHeight } : {}),
            }}
            width="100%"
            threshold={1500}
          />
        </div>
      </div>
    );
  }

  const wrapperStyle = { display: 'block', ...style };
  const imgStyle = {
    display: 'block',
    ...(maxHeight ? { maxHeight, objectFit: 'cover', width: '100%' } : {}),
  };

  return (
    <LazyLoadImage
      src={optimizedImageUrl(src)}
      srcSet={responsiveSrcSet(src) || undefined}
      sizes={GUIDE_SIZES}
      placeholderSrc={placeholderImageUrl(src)}
      alt={alt}
      effect="blur"
      visibleByDefault={eager}
      wrapperClassName={`md:min-h-[200px] ${className || ''}`}
      wrapperProps={{ style: wrapperStyle }}
      style={imgStyle}
      width="100%"
      threshold={1500}
    />
  );
};

export default GuideImage;
