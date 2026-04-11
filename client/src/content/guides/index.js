import FluxGuide from './FluxGuide';
import GptImageGuide from './GptImageGuide';
import NanoGuide from './NanoGuide';

const guides = {
  'gpt-image-1.5': GptImageGuide,
  'nano-banana-2': NanoGuide,
  'flux-2': FluxGuide,
};

export default guides;
