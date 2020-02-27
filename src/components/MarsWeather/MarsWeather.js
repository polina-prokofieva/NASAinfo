import React, { Component } from 'react';
import MarsWeatherDay from './MarsWeatherDay/MarsWeatherDay';
import Details from "./Details/Details";
import Spinner from '../Spinner/Spinner';
import Error from '../Error/Error';
import NASAAPIService from '../../services/NASAAPIService';
import './MarsWeather.css';

export default class MarsWeather extends Component {
  nasaService = new NASAAPIService();

  state = {
    data: {},
    sol_keys: [],
    choosenSol: null,
    loading: true,
    error: false
  }

  componentDidMount() {
    this.nasaService
      .getMarsWeather()
      .then(this.onWeatherLoaded)
      .catch(this.onError);
  }

  onWeatherLoaded = (data) => {
    this.setState({
      data: data,
      sol_keys: data.sol_keys,
      choosenSol: data.sol_keys[0],
      loading: false,
      error: false
    });
  }

  onError = () => {
    this.setState({
      loading: false,
      error: true
    })
  }

  onDayClick = (sol) => {
    this.setState({
      choosenSol: sol
    })
  }

  render (){
    const { data, sol_keys, choosenSol, loading, error } = this.state;
    const { viewDetails } = this.props;

    const hasDate = !(loading || error);

    const errorMessage = error ? <Error /> : null;
    const spinner = loading ? <Spinner/> : null;
    const content = hasDate ? <MarsWeatherView
                                data={data}
                                sol_keys={sol_keys}
                                choosenSol={choosenSol}
                                viewDetails={viewDetails}
                                onDayClick={this.onDayClick}
                              /> : null;

    return (
      <div className="marsWeather">
        <h2>Mars Weather</h2>
        {errorMessage}
        {spinner}
        {content}
        </div>
    );
  };
}

const MarsWeatherView = ({ data, sol_keys, viewDetails, choosenSol, onDayClick }) => {
  console.log(`choosenSol = ${choosenSol}`);
  console.log(sol_keys[choosenSol]);
  return (
    <React.Fragment>
      <ul className="latestWeather">
        {sol_keys.map(key => (
          <li key={key}>
            <MarsWeatherDay
              sol={key}
              day={data[key]}
              onDayClick={() => onDayClick(key)}
            />
          </li>
        ))}
      </ul>
      {viewDetails && choosenSol && <Details data={data[choosenSol]} solKey={choosenSol} />}
    </React.Fragment>
  );
}