import { makeStyles } from '@material-ui/core';
import React from 'react';
import { useAuth } from '../../../contexts/AuthContext';
import MacroCounter from '../../organisms/MacroCounter/MacroCounter';

const useStyles = makeStyles((theme) => ({
  main: {
    margin: theme.spacing(2, 8, 0),
  },
  inner: {
    margin: theme.spacing(4, 0, 0),
  },
}));

const Profile = (): JSX.Element => {
  const classes = useStyles();
  const { currentUser } = useAuth();
  return (
    <div className={classes.main}>
      <h1>Profile page</h1>
      <div>{currentUser.name}</div>
      <div>{currentUser.username}</div>
      <div className={classes.inner}>
        <MacroCounter />
      </div>
    </div>
  );
};

export default Profile;
