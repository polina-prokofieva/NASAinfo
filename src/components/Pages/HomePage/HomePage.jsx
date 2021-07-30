import React from 'react';
import PictureOfTheDay from '../../PictureOfTheDay/PictureOfTheDay';
import styles from './HomePage.module.scss';

const HomePage = () => {
  return (
    <main className={styles.HomePage} id="homePage">
      <PictureOfTheDay />
    </main>
  );
};

export default HomePage;