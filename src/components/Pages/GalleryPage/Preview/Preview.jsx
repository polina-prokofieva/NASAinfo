import React from 'react';
import { isVideoContent } from '../../../../utils/common';
import withData from '../../../hoc-helpers/withData';
import styles from "./Preview.module.scss";

const Preview = (data) => {
  const { url } = data;

  const content = isVideoContent(url) ?
    <VideoView url={url} /> :
    <PictureView { ...data } />;

  return (
    <li className={styles.Preview}>
      {content}
    </li>
  );
};

const PictureView = ({ url, title, date }) => {
  return (
    <img
      title={`${date} ${title}`}
      alt={title}
      src={url}
    />
  );
};

const VideoView = ({ url }) => {
  const modifiedUrl = `${url}&controls=0`;
  return (
    <iframe src={modifiedUrl}
            title="Picture Of The Day Preview"
            frameBorder="0"
            allow="accelerometer; autoplay; encrypted-media; picture-in-picture"
            allowFullScreen
    >
    </iframe>
  );
};

export default withData(Preview);
