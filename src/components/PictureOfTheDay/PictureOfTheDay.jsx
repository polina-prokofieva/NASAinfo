import React, { useContext, useMemo } from 'react';
import withData from '../hoc-helpers/withData';
import withRenderAnimation from '../hoc-helpers/withRenderAnimation';
import { isVideoContent, isHTMLContent, videoAttrs } from '../../utils/common';
import { isToday, convertDateToString } from '../../utils/dateUtils';
import { SwitchDayContext } from '../Pages/HomePage/HomePage';
import { getClassNamesFromStyles } from '../../utils/common';
import styles from './PictureOfTheDay.module.scss';

const PictureOfTheDay = ({ data, classNames }) => {
  const { url } = data;

  const isVideo = useMemo(() => isVideoContent(url), [url]); 
  const isHTML = useMemo(() => isHTMLContent(url), [url]); 

  const viewProps = { ...data, isVideo, isHTML };

  const classes = getClassNamesFromStyles(classNames, styles);
  
  return (
    <section className={classes}>
      <PictureOfTheDayView { ...viewProps } />
    </section>
  );
};

const PictureOfTheDayView = ({
  url,
  hdurl,
  title,
  explanation,
  isVideo,
  isHTML
}) => {
  const { date, toPrevDay, toNextDay } = useContext(SwitchDayContext);

  const graphic = isVideo ?
    <iframe { ...videoAttrs } src={`${url}&controls=0`} /> :
    <img alt={title} src={url} />;

  const next = !isToday(date) ?
    <span className={ styles.tomorrow } onClick={ toNextDay }>▶</span> :
    <span className={ styles.tomorrow }>&nbsp;</span>

  return (
    <>
      { !isHTML && <figure className={styles.image}>
        { graphic }
      </figure> }
      <div className={styles.description}>
        <div className={styles.currentDate}>
          <span className={styles.yesterday} onClick={toPrevDay}>◀</span>
          <span className={styles.today}>{ convertDateToString(date) }</span>
          { next }
        </div>
        <article className={styles.headerAndText}>
          <h2 className={styles.title}>{title}</h2>
          <p className={styles.text}>{explanation}</p>
        </article>
        <p className="download">
          { !isVideo && !isHTML &&
            <a href={hdurl} target="_blank" rel="noopener noreferrer">Download HD</a>
          }&nbsp;
          { isHTML && <a href={url} target="_blank">Go to picture of the day</a>}
        </p>
      </div>
    </>
  );
};

export default withData(withRenderAnimation(PictureOfTheDay, 'PictureOfTheDay'));
