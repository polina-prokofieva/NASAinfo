import React, { useState, useMemo, useEffect } from 'react';
import Spinner from '../Spinner/Spinner';
import Error from '../Error/Error';
import { isVideoContent, today } from '../../utils/common';
import NASAAPIService from '../../services/NASAAPIService';
import styles from './PictureOfTheDay.module.scss';


const PictureOfTheDay = () => {
  const initialState = {
    url: null,
    title: '',
    explanation: '',
    hdurl: '*'
  };

  const nasaService = useMemo(() => new NASAAPIService(), []);

  const [state, setState] = useState(initialState);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const onPictureLoaded = (picture) => {
    setLoading(false);
    setError(false);
    setState({ ...picture });
  };

  const onError = () => {
    setLoading(false);
    setError(true)
  };

  useEffect(() => {
    nasaService.getPictureOfTheDay()
      .then(onPictureLoaded)
      .catch(onError);
  }, [nasaService]);

  const { url, hdurl, title, explanation } = state;

  const viewProps = { url, title, explanation };

  const contentView = isVideoContent(url) ?
    <VideoView { ...viewProps } /> :
    <PictureView { ...viewProps } hdurl={hdurl} />;

  const hasDate = !(loading || error);

  const errorMessage = error ? <Error /> : null;
  const spinner = loading ? <Spinner /> : null;
  const content = hasDate ? contentView : null;

  return (
    <section className={styles.PictureOfTheDay}>
      {errorMessage}
      {spinner}
      {content}
    </section>
  );
};

const PictureView = ({ url, hdurl, title, explanation, date = today }) => {
  console.log(date);
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

export default PictureOfTheDay;
