import React, { Component } from 'react';
import { HashRouter as Router, Route } from 'react-router-dom';

import MarsWeatherPage from "../Pages/MarsWeatherPage/MarsWeatherPage";
import TopMenu from "../TopMenu/TopMenu";
import GalleryPage from "../Pages/GalleryPage/GalleryPage";
import HomePage from "../Pages/HomePage/HomePage";
import ErrorBoundry from '../ErrorBoundry/ErrorBoundry';

import './App.scss';

export default class App extends Component {
  render() {
    return (
      <ErrorBoundry>
        <div className="App">
          <Router>
            <header>
              <TopMenu/>
            </header>

            <Route path="/" component={HomePage} exact/>
            <Route path="/gallery" component={GalleryPage}/>
            <Route path="/marsweather" component={MarsWeatherPage}/>
          </Router>
        </div>
      </ErrorBoundry>
    );
  }
};
