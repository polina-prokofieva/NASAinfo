import React from 'react';
import './TopMenu.scss';

const TopMenu = () => {
  return (
    <nav>
      <ul className="menu">
        <li><a href="#"><span>Home</span></a></li>
        <li><a href="#/gallery"><span>Gallery</span></a></li>
        <li><a href="#/marsweather"><span>Mars Weather</span></a></li>
      </ul>
    </nav>
  );
};

export default TopMenu;