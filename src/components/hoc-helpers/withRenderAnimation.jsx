import React, { useEffect, useState } from 'react';

const withRenderAnimation = (View) => {
  return ({
    delay = 200,
    ...otherProps
  }) => {
    const [rendered, setRendered] = useState(false);

    useEffect(() => {
      setTimeout(
        () => setRendered(true),
        delay
      );
    }, []);

    const viewProps = {
      ...otherProps,
      rendered
    };

    return <View { ...viewProps } />
  };
}
 
export default withRenderAnimation;
