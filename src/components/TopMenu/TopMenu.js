import React from 'react';
import { Link } from 'react-router-dom';
import './TopMenu.scss';

const TopMenu = () => {
  return (
    <nav>
      <ul className="menu">
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
        <li>
          <Link to="/marsweather">
            <span>Mars Weather</span>
          </Link>
        </li>
      </ul>
    </nav>
  )
};

export default TopMenu;