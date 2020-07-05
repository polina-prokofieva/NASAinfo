import React, { Component } from 'react';
import Spinner from '../Spinner/Spinner';
import Error from '../Error/Error';
import { youTubeReg } from '../../constants/index';
import NASAAPIService from '../../services/NASAAPIService';
import './PictureOfTheDay.scss';


export default class PictureOfTheDay extends Component {
  nasaService = new NASAAPIService();

  state = {
    url: null,
    title: '',
    explanation: '',
    hdurl: '*',
    loading: true,
    error: false
  };

  componentDidMount() {
    this.nasaService
      .getPictureOfTheDay()
      .then(this.onPictureLoaded)
      .catch(this.onError);
  }

  onPictureLoaded = (picture) => {
    this.setState({
      url: picture.url,
      hdurl: picture.hdurl,
      title: picture.title,
      explanation: picture.explanation,
      loading: false,
      error: false
    });
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
    const { url, hdurl, title, explanation, loading, error } = this.state;

    const contentView = this.isVideoContent(url) ? <VideoView
      url={url}
      title={title}
      explanation={explanation}
    /> : <PictureView
      url={url}
      hdurl={hdurl}
      title={title}
      explanation={explanation}
    />;

    const hasDate = !(loading || error);

    const errorMessage = error ? <Error /> : null;
    const spinner = loading ? <Spinner /> : null;
    const content = hasDate ? contentView : null;

    return (
      <section className="pictureOfTheDay">
        {errorMessage}
        {spinner}
        {content}
      </section>
    );
  }
};

const PictureView = ({ url, hdurl, title, explanation }) => {
  return (
    <React.Fragment>
      <div className="image">
        <img
          alt={title}
          src={url}
        />
      </div>
      <div className="description">
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
      <div className="image">
        <iframe src={modifiedUrl}
                title="Picture Of The Day"
                frameBorder="0"
                allow="accelerometer; autoplay; encrypted-media; picture-in-picture"
                allowFullScreen
        >
        </iframe>

      </div>
      <div className="description">
        <h2>{title}</h2>
        <p>{explanation}</p>
      </div>
    </React.Fragment>
  );
};