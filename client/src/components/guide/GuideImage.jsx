import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import { placeholderImageUrl } from '../../utils';

const GuideImage = ({ src, alt, className, style }) => (
  <LazyLoadImage
    src={src}
    placeholderSrc={placeholderImageUrl(src)}
    alt={alt}
    effect="blur"
    wrapperClassName={className}
    wrapperProps={{ style: { display: 'block', ...style } }}
    width="100%"
    height="auto"
    threshold={300}
  />
);

export default GuideImage;
