import React from 'react';
import { isVideoContent, today } from '../../utils/common';
import withData from '../hoc-helpers/withData';
import { isVideoContent, isHTMLContent, videoAttrs } from '../../utils/common';
import {
    today, isToday, convertDateToString,
    getNextDay, getPrevDay,
    formatDate } from '../../utils/dateUtils';
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

const PictureOfTheDayView = ({
  date, url, hdurl, title, explanation,
  isVideo, isHTML,
  toPrevDay, toNextDay
}) => {
  const graphic = isVideo ?
    <iframe { ...videoAttrs } src={`${url}&controls=0`} /> :
    <img alt={title} src={url} />;

  console.log(isHTML);

  const linkUrl = isHTML ? url : hdurl;

  return (
    <React.Fragment>
      { !isHTML && <div className={styles.image}>
        { graphic }
      </div> }
      <div className={styles.description}>
        <div className={styles.currentDate}>
          <span className={ styles.yesterday } onClick={ toPrevDay }>◀</span>
          <span className={ styles.today }>{ convertDateToString(date) }</span>
          { !isToday(date) &&
            <span className={ styles.tomorrow } onClick={ toNextDay }>▶</span>
          }
        </div>
        <article className={styles.headerAndText}>
          <h2>{title}</h2>
          <p>{explanation}</p>
        </article>
        <p className="download">
          { !isVideo && !isHTML &&
            <a href={linkUrl} target="_blank" rel="noopener noreferrer">Download HD</a>
          }&nbsp;
          { isHTML && <a href={url} target="_blank">Go to picture of the day</a>}
        </p>
      </div>
    </React.Fragment>
  );
};

export default withData(PictureOfTheDay);
