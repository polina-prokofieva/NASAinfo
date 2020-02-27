import React, { Component } from 'react';
import NASAAPIService from '../../services/NASAAPIService';
import './Asteroids.css';


export default class Asteroids extends Component {
  nasaService = new NASAAPIService();

  state = {
    picture: null,
    url: null
  }

  constructor() {
    super();
    this.updatePicture();
  }

  updatePicture() {
    this.nasaService
      .getPictureOfTheDay()
      .then((picture) => {
        console.log(picture);
        this.setState({picture: picture, url: picture.url});
      });
  }

  render() {
    const { url, picture } = this.state;

    console.log(picture);

    return (
      <img src={url} />
    );
  }
};