import React from 'react';
import PictureOfTheDay from '../../PictureOfTheDay/PictureOfTheDay';
import MarsWeather from "../../MarsWeather/MarsWeather";
import './HomePage.css';

const Gallery = () => {
  return (
    <div className="Home">
      <PictureOfTheDay />
      <MarsWeather viewDetails={false} />
    </div>
  );
};

export default Gallery;