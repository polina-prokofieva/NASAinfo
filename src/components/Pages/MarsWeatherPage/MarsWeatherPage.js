import React, { Component } from 'react';
import MarsWeather from "../../MarsWeather/MarsWeather";
import './MarsWeatherPage.scss';

export default class MarsWeatherPage extends Component {
  render () {
    return (
      <main id="marsWeatherPage">
        <MarsWeather isDetailsVisible={true} />
      </main>
    );
  }
};