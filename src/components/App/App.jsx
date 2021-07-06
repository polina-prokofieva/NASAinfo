import React from 'react';
import { HashRouter as Router, Route } from 'react-router-dom';

import TopMenu from "../TopMenu/TopMenu";
import GalleryPage from "../Pages/GalleryPage/GalleryPage";
import HomePage from "../Pages/HomePage/HomePage";
import ErrorBoundry from '../ErrorBoundry/ErrorBoundry';

import './App.scss';

const App = () => {
  return (
    <ErrorBoundry>
      <div className="App">
        <Router>
          <header>
            <TopMenu/>
          </header>

          <Route path="/" component={HomePage} exact/>
          <Route path="/gallery" component={GalleryPage}/>
        </Router>
      </div>
    </ErrorBoundry>
  );
};

export default App;
