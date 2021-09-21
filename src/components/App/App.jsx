import React from 'react';
import { HashRouter as Router, Route } from 'react-router-dom';
import TopMenu from "../TopMenu/TopMenu";
import ErrorBoundry from '../ErrorBoundry/ErrorBoundry';
import { routes } from '../../routes';
import './App.scss';

const App = () => {
  return (
    <ErrorBoundry>
      <div className="App">
        <Router>
          <header>
            <TopMenu/>
          </header>

          { routes.map(({ name, component: C, getData, ...otherProps }, ind) => (
            <Route
              { ...otherProps }
              key={`${name}-${ind}`}
              render={(props) => <C { ...props } getData={getData} />}
            />
          )) }

        </Router>
      </div>
    </ErrorBoundry>
  );
};

export default App;
