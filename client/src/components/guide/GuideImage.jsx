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

const GuideImage = ({ src, alt, className, style, maxHeight }) => {
  const eager = useContext(GuideEagerContext);
  const wrapperStyle = { display: 'block', minHeight: 200, ...style };
  const imgStyle = maxHeight
    ? { maxHeight, objectFit: 'cover', width: '100%' }
    : undefined;

  return (
    <LazyLoadImage
      src={optimizedImageUrl(src)}
      srcSet={responsiveSrcSet(src) || undefined}
      sizes={GUIDE_SIZES}
      placeholderSrc={placeholderImageUrl(src)}
      alt={alt}
      effect="blur"
      visibleByDefault={eager}
      wrapperClassName={className}
      wrapperProps={{ style: wrapperStyle }}
      style={imgStyle}
      width="100%"
      threshold={1000}
    />
  );
};

export default GuideImage;
