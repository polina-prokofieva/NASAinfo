import { youTubeReg } from '../constants/index';

const isVideoContent = (url) => youTubeReg.test(url);
const isHTMLContent = (url) => /.*\.html$/.test(url);

const videoAttrs = {
  title: 'Picture Of The Day',
  frameBorder: '0',
  allow: 'accelerometer; autoplay; encrypted-media; picture-in-picture',
  allowFullScreen: true
};

const getClassNamesFromStyles = (classNames, styles) =>
  classNames
    .map(className => styles[className])
    .join(' ');

export {
  videoAttrs,
  isVideoContent,
  isHTMLContent,
  getClassNamesFromStyles
};
