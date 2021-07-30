import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './TopMenu.module.scss';

const TopMenu = () => {
  return (
    <nav className={styles.TopMenu}>
      <ul>
        <li>
          <NavLink to="/home" activeClassName={styles.selected}>
            <span>Home</span>
          </NavLink>
        </li>
        <li>
          <NavLink to="/gallery" activeClassName={styles.selected}>
            <span>Gallery</span>
          </NavLink>
        </li>
        <li>
          <NavLink to="/transfer" activeClassName={styles.selected}>
            <span>Transfer</span>
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default TopMenu;
