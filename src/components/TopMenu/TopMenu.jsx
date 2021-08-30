import React from 'react';
import { NavLink } from 'react-router-dom';
import { topRoutes } from '../../routes';
import styles from './TopMenu.module.scss';

const TopMenu = () => {
  return (
    <nav className={styles.TopMenu}>
      <ul>
        { topRoutes.map(({name, path}) => (
          <li key={name}>
            <NavLink to={path} activeClassName={styles.selected}>
              <span>{name}</span>
            </NavLink>
          </li>
        )) }
      </ul>
    </nav>
  );
};

export default TopMenu;
