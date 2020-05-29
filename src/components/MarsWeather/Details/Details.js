import React from 'react';
import { connect } from 'react-redux';
import './Details.css';

const Details = ({ data, sol }) => {
  const sol_data = data[sol];
  const date = new Date(sol_data.First_UTC);
  const earthDay = date.toLocaleDateString('en-US', {month: 'long', day: 'numeric', year: 'numeric'});

  return (
    <div className="details">
      <h3>Sol {sol}</h3>
      <h4>{earthDay}</h4>
      <p>Season: {sol_data.Season} </p>

      <div className="mainData">
        <InfoBlock
          title="Air temperature"
          measurement="°C"
          data={sol_data.AT}
        />
        <InfoBlock
          title="Wind Speed"
          measurement="m/s"
          data={sol_data.HWS}
        />
        <InfoBlock
          title="Pressure"
          measurement="Pa"
          data={sol_data.PRE}
        />
      </div>
    </div>
  )
};

const InfoBlock = ({ title, measurement, data }) => {
  const transormedData = {
    minimum: data.mn,
    maximum: data.mx,
    average: data.av
  }

  return (
    <div className="InfoBlock">
      <h5>{title} ({measurement}):</h5>
      {Object.keys(transormedData).map(a => (
        <p key={a}>
          <span>{a}:</span>&nbsp;
          <span>{transormedData[a]}</span>
        </p>
      ))}
    </div>
  );
};

const mapStateToProps = ({ sol }) => {
  return { sol }
};

export default connect(mapStateToProps)(Details);