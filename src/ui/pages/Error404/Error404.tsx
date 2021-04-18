import { Button } from '@material-ui/core';
import React from 'react';
import { useHistory } from 'react-router';

const Error404 = (): JSX.Element => {
  const history = useHistory();
  return (
    <div>
      <h1>Error 404</h1>
      <h6>Page does not exist!</h6>
      <Button variant='contained' color='primary' onClick={() => history.push('/')}>
        Go to login
      </Button>
    </div>
  );
};

export default Error404;
