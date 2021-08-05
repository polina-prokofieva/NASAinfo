import React from 'react';
import PictureOfTheDay from '../../PictureOfTheDay/PictureOfTheDay';
import styles from './HomePage.module.scss';

const HomePage = ({ getData }) => {
  return (
    <main className={styles.HomePage} id="homePage">
      <PictureOfTheDay getData={getData} />
    </main>
  );
};

export default HomePage;