import React, { useState } from 'react';
import Login from '../../organisms/Login/Login';
import Register from '../../organisms/Register/Register';

const LandingPage = (): JSX.Element => {
  const [action, setAction] = useState(false);

  function toggleAction(): void {
    setAction((prevAction) => !prevAction);
  }

  return <div>{action ? <Register toggleAction={toggleAction} /> : <Login toggleAction={toggleAction} />}</div>;
};

export default LandingPage;
