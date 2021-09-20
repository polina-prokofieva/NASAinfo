import React, { useEffect, useState } from 'react';

const withRenderAnimation = (View) => {
  return ({
    delay = 200,
    ...otherProps
  }) => {
    const [classNames, setClassNames] = useState([View.name]);

    useEffect(() => {
      setTimeout(
        () => setClassNames([View.name, 'rendered']),
        delay
      );
    }, []);

    const viewProps = {
      ...otherProps,
      classNames
    };

    return <View { ...viewProps } />
  };
}
 
export default withRenderAnimation;
