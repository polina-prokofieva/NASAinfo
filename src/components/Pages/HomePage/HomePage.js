import React from 'react';
import PictureOfTheDay from '../../PictureOfTheDay/PictureOfTheDay';
import MarsWeather from "../../MarsWeather/MarsWeather";
import './HomePage.scss';

const HomePage = () => {
  return (
    <main id="homePage">
      <PictureOfTheDay />
      <MarsWeather viewDetails={false} />
    </main>
  );
};

export default HomePage;