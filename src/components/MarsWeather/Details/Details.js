import React from 'react';
import './Details.css';

const Details = ({ data, solKey }) => {
  const date = new Date(data.First_UTC);
  const earthDay = date.toLocaleDateString('en-US', {month: 'long', day: 'numeric', year: 'numeric'});

  return (
    <div className="details">
      <h3>Sol {solKey}</h3>
      <h4>{earthDay}</h4>
      <p>Season: {data.Season} </p>

      <div className="mainData">
        <InfoBlock
          title="Air temperature"
          measurement="°C"
          data={data.AT}
        />
        <InfoBlock
          title="Wind Speed"
          measurement="m/s"
          data={data.HWS}
        />
        <InfoBlock
          title="Pressure"
          measurement="Pa"
          data={data.PRE}
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
        <p>
          <span>{a}:</span>&nbsp;
          <span>{transormedData[a]}</span>
        </p>
      ))}
    </div>
  );
}

export default Details;