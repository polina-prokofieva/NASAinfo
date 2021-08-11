import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { topRoutes } from '../../routes';
import styles from './TopMenu.module.scss';

const TopMenu = () => {
  return (
    <nav className={styles.TopMenu}>
      <ul>
        { routes.map((route, i) => <MenuItem {...route} order={i} />) }
      </ul>
    </nav>
  );
};

const MenuItem = ({ name, path, order }) => {
  const [isRendered, setIsRendered] = useState(false);

  useEffect(() => {
    setTimeout(() => setIsRendered(true), 200 * order);
  }, []);

  return (
    <li key={name} className={ isRendered ? styles.rendered : '' }>
      <NavLink to={path} activeClassName={styles.selected}>
        <span>{name}</span>
      </NavLink>
    </li>
  );
};

export default TopMenu;
