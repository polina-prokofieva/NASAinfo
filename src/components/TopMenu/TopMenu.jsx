import React from 'react';
import { routes } from '../../routes';
import MenuItem from './MenuItem/MenuItem';
import styles from './TopMenu.module.scss';

const TopMenu = () => {
  return (
    <nav className={styles.TopMenu}>
      <ul>
        { routes.map((route, i) => (
          <MenuItem
            key={ route.name }
            {...route}
            delay={i * 300} />
        )) }
      </ul>
    </nav>
  );
};

export default TopMenu;
