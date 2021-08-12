import React from 'react';
import { NavLink } from 'react-router-dom';
import { getClassNamesFromStyles } from '../../../utils/common';
import withRenderAnimation from '../../hoc-helpers/withRenderAnimation';
import styles from './MenuItem.module.scss';

const MenuItem = ({ name, path, classNames }) => {
  const classes = getClassNamesFromStyles(classNames, styles);

  console.log(classNames);
  console.log(classes);

  return (
    <li className={ classes }>
      <NavLink to={path} activeClassName={styles.selected}>
        <span>{name}</span>
      </NavLink>
    </li>
  );
};

export default withRenderAnimation(MenuItem);
