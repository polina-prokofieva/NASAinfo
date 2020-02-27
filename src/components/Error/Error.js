import React from 'react';
import './Error.css';

const Error = (error) => {
  return (
    <div className="error">
      <h5>Ooops...</h5>
      <p>Something went wrong</p>
    </div>
  );
};

export default Error;