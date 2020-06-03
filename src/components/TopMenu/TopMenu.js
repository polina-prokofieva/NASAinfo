import React from 'react';
import './TopMenu.css';

const TopMenu = () => {
  return (
    <ul className="menu">
      <li><a href="#"><span>Home</span></a></li>
      <li><a href="#/gallery"><span>Gallery</span></a></li>
      <li><a href="#/marsweather"><span>Mars Weather</span></a></li>
    </ul>
  );
};

export default TopMenu;