import React from 'react';
import './MarsWeatherDay.css';


const MarsWeatherDay = ({ sol, day: { AT, HWS, PRE, First_UTC }, onDayClick }) => {
  const date = new Date(First_UTC);
  const altDay = date.toLocaleDateString('en-US', {month: 'short', day: 'numeric'});

  const at = AT ? Math.round(AT.av) : '&ndash;';
  const hws = HWS ? Math.round(HWS.av) : '&ndash;';
  const pre = PRE ? Math.round(PRE.av) : '&ndash;';

  return (
    <div className="marsWeatherDay"
          onClick={onDayClick}>
      <p className="solDate">Sol {sol}</p>
      <p className="date">{altDay}</p>
      <p className="airT"><span className="label">Air temp.:&nbsp;</span><span className="value">{at}</span><span className="unit">°C</span></p>
      <p className="wind"><span className="label">Wind:&nbsp;</span><span className="value">{hws}</span><span className="unit">m/s</span></p>
      <p className="pressure"><span className="label">Press.:&nbsp;</span><span className="value">{pre}</span><span className="unit">Pa</span></p>
    </div>
  )
}

export default MarsWeatherDay;