import React from 'react';
import { isVideoContent, today } from '../../utils/common';
import withData from '../hoc-helpers/withData';
import styles from './PictureOfTheDay.module.scss';


const PictureOfTheDay = ({ data }) => {
  const content = isVideoContent(data.url) ?
    <VideoView { ...data } /> :
    <PictureView { ...data } />; 
  
  return (
    <section className={styles.PictureOfTheDay}>
      {content}
    </section>
  );
};

const PictureView = ({ url, hdurl, title, explanation, date = today }) => {
  return (
    <React.Fragment>
      <div className={styles.image}>
        <img
          alt={title}
          src={url}
        />
      </div>      
      <div className={styles.description}>
        <h2>{title}</h2>
        <p>{explanation}</p>
        <p className="download"><a href={hdurl} target="_blank" rel="noopener noreferrer">Download HD</a></p>
      </div>
    </React.Fragment>
  );
};

const VideoView = ({ url, title, explanation }) => {
  const modifiedUrl = `${url}&controls=0`;
  return (
    <React.Fragment>
      <div className={styles.image}>
        <iframe src={modifiedUrl}
                title="Picture Of The Day"
                frameBorder="0"
                allow="accelerometer; autoplay; encrypted-media; picture-in-picture"
                allowFullScreen
        >
        </iframe>

      </div>
      <div className={styles.description}>
        <h2>{title}</h2>
        <p>{explanation}</p>
      </div>
    </React.Fragment>
  );
};

export default withData(PictureOfTheDay);
