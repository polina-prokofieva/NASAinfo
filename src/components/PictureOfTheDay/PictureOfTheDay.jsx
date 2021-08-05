import React, { useContext, useMemo } from 'react';
import withData from '../hoc-helpers/withData';
import { isVideoContent, isHTMLContent, videoAttrs } from '../../utils/common';
import { isToday, convertDateToString } from '../../utils/dateUtils';
import { SwitchDayContext } from '../Pages/HomePage/HomePage';
import styles from './PictureOfTheDay.module.scss';

const PictureOfTheDay = ({ data }) => {
  const { url } = data;

  const isVideo = useMemo(() => isVideoContent(url), [url]); 
  const isHTML = useMemo(() => isHTMLContent(url), [url]); 

  const viewProps = { ...data, isVideo, isHTML };
  
  return (
    <section className={styles.PictureOfTheDay}>
      <PictureOfTheDayView { ...viewProps } />
    </section>
  );
};

const PictureOfTheDayView = ({
  url, hdurl, title, explanation,
  isVideo, isHTML
}) => {
  const { date, toPrevDay, toNextDay } = useContext(SwitchDayContext);

  const graphic = isVideo ?
    <iframe { ...videoAttrs } src={`${url}&controls=0`} /> :
    <img alt={title} src={url} />;

  const next = !isToday(date) ?
    <span className={ styles.tomorrow } onClick={ toNextDay }>▶</span> :
    <span className={ styles.tomorrow }>&nbsp;</span>

  return (
    <React.Fragment>
      { !isHTML && <div className={styles.image}>
        { graphic }
      </div> }
      <div className={styles.description}>
        <div className={styles.currentDate}>
          <span className={ styles.yesterday } onClick={ toPrevDay }>◀</span>
          <span className={ styles.today }>{ convertDateToString(date) }</span>
          { next }
        </div>
        <article className={styles.headerAndText}>
          <h2>{title}</h2>
          <p>{explanation}</p>
        </article>
        <p className="download">
          { !isVideo && !isHTML &&
            <a href={hdurl} target="_blank" rel="noopener noreferrer">Download HD</a>
          }&nbsp;
          { isHTML && <a href={url} target="_blank">Go to picture of the day</a>}
        </p>
      </div>
    </React.Fragment>
  );
};

export default withData(PictureOfTheDay);
