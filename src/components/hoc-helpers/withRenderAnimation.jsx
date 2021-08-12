import React, { useEffect, useState } from 'react';

const withRenderAnimation = (View) => {
  return ({
    delay = 0,
    ...other
  }) => {
    const [classNames, setClassNames] = useState([View.name]);

    useEffect(() => {
      setTimeout(
        () => setClassNames([View.name, 'rendered']),
        delay
      );
    }, []);

    const viewProps = {
      ...other,
      classNames
    };

    return <View { ...viewProps } />
  };
}
 
export default withRenderAnimation;
