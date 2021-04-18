import React from 'react';
import { AppBar, Toolbar, IconButton, Typography, makeStyles, PaletteType, Switch, Button } from '@material-ui/core';
import LoadingButton from '../../atoms/LoadingButton/LoadingButton';
import FastFoodIcon from '@material-ui/icons/Fastfood';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';

export type TopAppBarProps = {
  loading: boolean;
  logout: () => void;
  toggleTheme: () => void;
  type: PaletteType;
  handleLogoClick: () => void;
  handleProfileClick: () => void;
  handleFoodClick: () => void;
  handleIntakeClick: () => void;
};

const useStyles = makeStyles((theme) => ({
  menuButton: {
    marginRight: theme.spacing(2),
    edge: 'start',
    color: 'inherit',
  },
  title: {
    marginRight: 20,
  },
  filler: {
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

const TopAppBar = ({
  loading,
  logout,
  toggleTheme,
  type,
  handleLogoClick,
  handleProfileClick,
  handleFoodClick,
  handleIntakeClick,
}: TopAppBarProps): JSX.Element => {
  const classes = useStyles();

  return (
    <AppBar position='static'>
      <Toolbar>
        <IconButton className={classes.menuButton} onClick={handleLogoClick}>
          <FastFoodIcon />
        </IconButton>
        <Typography className={classes.title} variant='h6'>
          KCAL-COUNTER
        </Typography>
        <Button variant='text' color='inherit' onClick={handleFoodClick}>
          Food
        </Button>
        <Button variant='text' color='inherit' onClick={handleIntakeClick}>
          Intake
        </Button>
        <div className={classes.filler} />
        <Switch className={classes.switchToggle} checked={type === 'light'} onChange={toggleTheme} />
        <IconButton className={classes.menuButton} onClick={handleProfileClick}>
          <AccountCircleIcon className={classes.icon} />
        </IconButton>
        <LoadingButton loading={loading} variant='outlined' color='inherit' onClick={logout}>
          Logout
        </LoadingButton>
      </Toolbar>
    </AppBar>
  );
};

export default TopAppBar;
