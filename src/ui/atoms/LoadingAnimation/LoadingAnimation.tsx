import React from 'react';
import { RotateLoader } from 'react-spinners';

// TODO: Spremeni v Material UI Classes
const LoadingAnimation = (): JSX.Element => {
  return (
    <div
      style={{
        minHeight: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <RotateLoader loading={true} />
    </div>
  );
};

export default LoadingAnimation;
