import React from 'react';
import { NavLink } from 'react-router-dom';
import classNames from 'classnames';
import withRenderAnimation from '../../hoc-helpers/withRenderAnimation';
import styles from './MenuItem.module.scss';

const MenuItem = ({ name, path, rendered }) => {
  const classes = classNames({
    [styles.MenuItem]: true,
    [styles.rendered]: rendered
  });

  return (
    <li className={ classes }>
      <NavLink to={path} activeClassName={styles.selected}>
        <span>{name}</span>
      </NavLink>
    </li>
  );
};

export default withRenderAnimation(MenuItem);
