import React from 'react';
import Lottie from 'lottie-react';
import darkAnimation from '../assets/darkLoader.json';
import lightAnimation from '../assets/lightLoader.json';

const animations = { dark: darkAnimation, light: lightAnimation };

const Loader = ({ size = 400, variant = 'dark' }) => (
  <div role="status" style={{ width: size, height: size }}>
    <Lottie animationData={animations[variant]} loop />
  </div>
);

export default Loader;
