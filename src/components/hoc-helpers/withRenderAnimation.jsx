import React, { useEffect, useState } from 'react';

const withRenderAnimation = (View, mainClassName) => {
  return ({
    delay = 200,
    ...otherProps
  }) => {
    const [classNames, setClassNames] = useState([mainClassName]);

    useEffect(() => {
      setTimeout(
        () => setClassNames(prev => [...prev, 'rendered']),
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
