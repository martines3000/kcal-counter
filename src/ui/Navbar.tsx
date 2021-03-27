import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { AppBar, IconButton, Toolbar, Typography } from '@material-ui/core';
import FastFoodIcon from '@material-ui/icons/Fastfood';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import { useHistory } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import LoadingButton from './LoadingButton';
import { useThemeUpdate } from '../contexts/ThemeContext';
import { useTheme } from '@material-ui/core';
import Switch from '@material-ui/core/Switch';

const useStyles = makeStyles((theme) => ({
  menuButton: {
    marginRight: theme.spacing(2),
    edge: 'start',
    color: 'inherit',
  },
  title: {
    flexGrow: 1,
  },
  icon: {
    width: 40,
    height: 40,
  },
  switchToggle: {
    color: 'default',
  },
}));

const Navbar = (): JSX.Element => {
  const classes = useStyles();
  const history = useHistory();
  const { logout, loading } = useAuth();
  const toggleTheme = useThemeUpdate();
  const {
    palette: { type },
  } = useTheme();

  // All functions need to come as props so we can setup storybook without crashing everything
  return (
    <AppBar position='static'>
      <Toolbar>
        <IconButton className={classes.menuButton} onClick={() => history.push('/')}>
          <FastFoodIcon />
        </IconButton>
        <Typography className={classes.title} variant='h6'>
          KCAL-COUNTER
        </Typography>
        <Switch className={classes.switchToggle} checked={type === 'light'} onChange={toggleTheme} />
        <IconButton className={classes.menuButton} onClick={() => history.push('/profile')}>
          <AccountCircleIcon className={classes.icon} />
        </IconButton>
        <LoadingButton loading={loading} variant='outlined' color='inherit' onClick={logout}>
          Logout
        </LoadingButton>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
