import React from 'react';
import PictureOfTheDay from '../../PictureOfTheDay/PictureOfTheDay';
import MarsWeather from "../../MarsWeather/MarsWeather";
import './HomePage.scss';

const Gallery = () => {
  return (
    <main className="Home">
      <PictureOfTheDay />
      <MarsWeather viewDetails={false} />
    </main>
  );
};

export default Gallery;