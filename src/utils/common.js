import { youTubeReg } from '../constants/index';

const isVideoContent = (url) => youTubeReg.test(url);

const today = new Date();

export { isVideoContent, today };
