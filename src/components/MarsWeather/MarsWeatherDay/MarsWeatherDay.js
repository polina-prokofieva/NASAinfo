import React from 'react';
import { connect } from "react-redux";
import { solChosen } from "../../../actions";

import './MarsWeatherDay.css';


const MarsWeatherDay = ({ sol, day: { AT, HWS, PRE, First_UTC }, solChosen }) => {
  const date = new Date(First_UTC);
  const altDay = date.toLocaleDateString('en-US', {month: 'short', day: 'numeric'});

  const at = AT ? Math.round(AT.av) : '&ndash;';
  const hws = HWS ? Math.round(HWS.av) : '&ndash;';
  const pre = PRE ? Math.round(PRE.av) : '&ndash;';

  const onDayClick = () => {
    solChosen(sol);
  }

  return (
    <div className="marsWeatherDay"
          onClick={onDayClick}>
      <p className="solDate">Sol {sol}</p>
      <p className="date">{altDay}</p>
      <MarsWeatherDetail
        type="airT"
        label="Air temp."
        value={at}
        unit="°C"
      />
      <MarsWeatherDetail
        type="wind"
        label="Wind"
        value={hws}
        unit="m/s"
      />
      <MarsWeatherDetail
        type="pressure"
        label="Press."
        value={pre}
        unit="Pa"
      />
    </div>
  )
}

const MarsWeatherDetail = ({ type, label, value, unit }) => {
  return (
    <p className={type}>
      <span className="label">{label}:&nbsp;</span><span className="value">{value}</span><span className="unit">{unit}</span>
    </p>
  );
}

const mapStateToProps = () => {
  return {}
};

const mapDispatchToProps = { solChosen };

export default connect(mapStateToProps, mapDispatchToProps)(MarsWeatherDay);