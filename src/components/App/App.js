import React from 'react';
import { HashRouter as Router, Route } from 'react-router-dom';

import MarsWeatherPage from "../Pages/MarsWeatherPage/MarsWeatherPage";
import TopMenu from "../TopMenu/TopMenu";
import GalleryPage from "../Pages/GalleryPage/GalleryPage";
import HomePage from "../Pages/HomePage/HomePage";
import './App.css';

const App = () => {
  return (
    <div className="App">
      <Router>
        <header>
          <TopMenu />
        </header>

        <Route path="/" component={HomePage} exact />
        <Route path="/gallery" component={GalleryPage} />
        <Route path="/marsweather" component={MarsWeatherPage} />

      </Router>
    </div>
  );
};

export default App;
