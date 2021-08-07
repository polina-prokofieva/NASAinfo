import React, { useState, useEffect } from 'react';
import Spinner from '../Spinner/Spinner';
import Error from '../Error/Error';

const withData = (View) => {
  return ({ getData }) => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    const onDataLoaded = (data) => {
      setData(data);
      setLoading(false);
      setError(false);
    };

    const onError = () => {
      setError(true);
      setLoading(false);
    };
  
    useEffect(() => {
      getData()
        .then(onDataLoaded)
        .catch(onError);
    }, [getData]);
  
    if (loading) {
      return <Spinner />;
    }

    if (error) {
      return <Error />;
    }

    return <View data={data} />;
  }
};

export default withData;
