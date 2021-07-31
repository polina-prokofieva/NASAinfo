import React, { useMemo, useState, useEffect } from 'react';
import Spinner from '../../../Spinner/Spinner';
import Error from '../../../Error/Error';

import NASAAPIService from '../../../../services/NASAAPIService';
import { isVideoContent } from '../../../../utils/common';

import styles from "./Preview.module.scss";


const Preview = ({ date }) => {
  const initialState = {
    url: null,
    title: '',
    explanation: ''
  };

  const nasaService = useMemo(() => new NASAAPIService(), []);

  const [state, setState] = useState(initialState);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const url = localStorage.getItem(`${date}-url`);
    const title = localStorage.getItem(`${date}-title`);

    if (url) {
      setState(prev => ({
        ...prev,
        url,
        title: title || ''
      }));
      setLoading(false);
      setError(false);
    } else {
      nasaService
        .getPictureOfTheDay(date)
        .then(onPictureLoaded)
        .catch(onError);
    }
  }, [date]);

  const onPictureLoaded = (picture) => {
    const { date } = this.props;

    this.setState({
      url: picture.url,
      title: picture.title,
      loading: false,
      error: false
    });

    localStorage.setItem(`${date}-url`, picture.url);
    localStorage.setItem(`${date}-title`, picture.title);
  };

  const onError = () => {
    this.setState({
      loading: false,
      error: true
    });
  };

  const { url, title } = state;

  const pictureProps = { url, title, date };

  const contentView = isVideoContent(url) ?
    <VideoView url={url} /> :
    <PictureView { ...pictureProps } />;

  const hasDate = !(loading || error);

  const errorMessage = error ? <Error /> : null;
  const spinner = loading ? <Spinner /> : null;
  const content = hasDate ? contentView : null;

  return (
    <li className={styles.Preview}>
      {errorMessage}
      {spinner}
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

export default Preview;
