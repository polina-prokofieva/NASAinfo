import { youTubeReg } from '../constants/index';

const isVideoContent = (url) => youTubeReg.test(url);

const today = new Date();

const getClasses = classList => classList.reduce((acc, className) => {
  return `${acc} ${className}`;
}, '');

export {
  isVideoContent,
  today,
  getClasses
};
