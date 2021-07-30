import React from 'react';
import { Link } from 'react-router-dom';
import styles from './TopMenu.module.scss';

const TopMenu = () => {
  return (
    <nav>
      <ul className={styles.TopMenu}>
        <li>
          <Link to="/">
            <span>Home</span>
          </Link>
        </li>
        <li>
          <Link to="/gallery">
            <span>Gallery</span>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default TopMenu;
