import React, { useState } from 'react';
import Login from '../../ui/Login';
import Register from '../../ui/Register';

const LandingPage = (): JSX.Element => {
  const [action, setAction] = useState(false);

  function toggleAction(): void {
    setAction((prevAction) => !prevAction);
  }

  return <div>{action ? <Register toggleAction={toggleAction} /> : <Login toggleAction={toggleAction} />}</div>;
};

export default LandingPage;
