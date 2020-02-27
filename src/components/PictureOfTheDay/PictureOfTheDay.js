import React, { Component } from 'react';
import Spinner from '../Spinner/Spinner';
import Error from '../Error/Error';
import NASAAPIService from '../../services/NASAAPIService';
import './PictureOfTheDay.css';


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
    console.log(picture);

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

  render() {
    const { url, hdurl, title, explanation, loading, error } = this.state;

    const hasDate = !(loading || error);

    const errorMessage = error ? <Error /> : null;
    const spinner = loading ? <Spinner /> : null;
    const content = hasDate ? (<PictureView
      url={url}
      hdurl={hdurl}
      title={title}
      explanation={explanation}
    />) : null;

    return (
      <div className="pictureOfTheDay">
        {errorMessage}
        {spinner}
        {content}
      </div>
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