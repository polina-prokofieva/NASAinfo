import React, { Component } from 'react';
import { connect } from 'react-redux';
import { weatherLoaded } from "../../actions";

import MarsWeatherDay from './MarsWeatherDay/MarsWeatherDay';
import Details from "./Details/Details";
import Spinner from '../Spinner/Spinner';
import Error from '../Error/Error';
import NASAAPIService from '../../services/NASAAPIService';
import './MarsWeather.css';


class MarsWeather extends Component {
  nasaService = new NASAAPIService();

  state = {
    data: {},
    solKeys: [],
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
    this.props.weatherLoaded(data);
    this.setState({
      data: data,
      solKeys: data.sol_keys,
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

  render (){
    const { data, solKeys, loading, error } = this.state;
    const { isDetailsVisible } = this.props;

    const hasDate = !(loading || error);

    const errorMessage = error ? <Error /> : null;
    const spinner = loading ? <Spinner/> : null;
    const content = hasDate ? <MarsWeatherView
                                data={data}
                                solKeys={solKeys}
                                isDetailsVisible={isDetailsVisible && hasDate}
                              /> : null;

    return (
      <section className="marsWeather">
        <h2>Mars Weather</h2>
        {errorMessage}
        {spinner}
        {content}
      </section>
    );
  };
}

const MarsWeatherView = ({ data, solKeys, isDetailsVisible }) => {
  return (
    <React.Fragment>
      <ul className="latestWeather">
        {solKeys.map(key => (
          <li key={key}>
            <MarsWeatherDay
              sol={key}
              day={data[key]}
            />
          </li>
        ))}
      </ul>
      {isDetailsVisible && <Details data={data} />}
    </React.Fragment>
  );
};


const mapStateToProps = ({ }) => {
  return { }
};

const mapDispatchToProps = { weatherLoaded };

export default connect(mapStateToProps, mapDispatchToProps)(MarsWeather);