import React, { useMemo } from 'react';
import { HashRouter as Router, Route } from 'react-router-dom';

import TopMenu from "../TopMenu/TopMenu";

import GalleryPage from "../Pages/GalleryPage/GalleryPage";
import HomePage from "../Pages/HomePage/HomePage";
import TransferPage from "../Pages/TransferPage/TransferPage";

import NASAAPIService from '../../services/NASAAPIService';
import ErrorBoundry from '../ErrorBoundry/ErrorBoundry';

import './App.scss';


const App = () => {
  const nasaService = useMemo(() => new NASAAPIService(), []);

  const routes = useMemo(() => ([
    {
      path: '/home',
      component: HomePage,
      exact: true,
      getData: nasaService.getPictureOfTheDay
    }, {
      path: '/gallery',
      component: GalleryPage,
      exact: true,
      getData: nasaService.getPictureOfTheDay
    }, {
      path: '/transfer',
      component: TransferPage,
      exact: true,
      getData: nasaService.getTransfer
    }
  ]), []);

  return (
    <ErrorBoundry>
      <div className="App">
        <Router>
          <header>
            <TopMenu/>
          </header>

          { routes.map(({ component: C, getData, ...otherProps }) => (
              <Route
                { ...otherProps }
                key={otherProps.path}
                render={(props) => <C { ...props } getData={getData} />}
              />
          )) }

        </Router>
      </div>
    </ErrorBoundry>
  );
};

export default App;
