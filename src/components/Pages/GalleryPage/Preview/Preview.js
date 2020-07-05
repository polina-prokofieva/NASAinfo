import React, { Component } from 'react';
import Spinner from '../../../Spinner/Spinner';
import Error from '../../../Error/Error';
import { youTubeReg } from '../../../../constants/index';
import NASAAPIService from '../../../../services/NASAAPIService';
import "./Preview.scss";

export default class Preview extends Component {
  nasaService = new NASAAPIService();

  state = {
    url: null,
    title: '',
    explanation: '',
    loading: true,
    error: false
  };

  componentDidMount() {
    const { date } = this.props;

    const url = localStorage.getItem(`${date}-url`);
    const title = localStorage.getItem(`${date}-title`);

    if (url) {
      this.setState({
        url,
        title: title || '',
        loading: false,
        error: false
      });
    } else {
      this.nasaService
        .getPictureOfTheDay(date)
        .then(this.onPictureLoaded)
        .catch(this.onError);
    }
  }

  onPictureLoaded = (picture) => {
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

  onError = () => {
    this.setState({
      loading: false,
      error: true
    });
  };

  isVideoContent(url) {
    return youTubeReg.test(url);
  }

  render() {
    const { url, title, loading, error } = this.state;
    const { date } = this.props;

    const contentView = this.isVideoContent(url) ? <VideoView
      url={url}
    /> : <PictureView
      url={url}
      title={title}
      date={date}
    />;

    const hasDate = !(loading || error);

    const errorMessage = error ? <Error /> : null;
    const spinner = loading ? <Spinner /> : null;
    const content = hasDate ? contentView : null;

    return (
      <li className="galleryPreview">
        {errorMessage}
        {spinner}
        {content}
      </li>
    );
  }
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
            frameBorder="0"
            allow="accelerometer; autoplay; encrypted-media; picture-in-picture"
            allowFullScreen
    >
    </iframe>
  );
};