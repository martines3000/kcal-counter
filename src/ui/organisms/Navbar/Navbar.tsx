import React from 'react';
import { useAuth } from '../../../contexts/AuthContext';
import { useThemeUpdate } from '../../../contexts/ThemeContext';
import { useTheme } from '@material-ui/core';
import { useHistory } from 'react-router-dom';
import TopAppBar from '../TopAppBar/TopAppBar';
import { useStyles } from '../../../App';

const Navbar = (): JSX.Element => {
  const history = useHistory();
  const { logout, loading } = useAuth();
  const toggleTheme = useThemeUpdate();

  const {
    palette: { type },
  } = useTheme();

  const handleLogoClick = (): void => {
    history.push('/');
  };

  const handleProfileClick = (): void => {
    history.push('/profile');
  };

  const handleFoodClick = (): void => {
    history.push('/food');
  };

  const handleIntakeClick = (): void => {
    history.push('/intake');
  };

  // All functions need to come as props so we can setup storybook without crashing everything
  return (
    <TopAppBar
      loading={loading}
      logout={logout}
      handleLogoClick={handleLogoClick}
      handleProfileClick={handleProfileClick}
      handleFoodClick={handleFoodClick}
      handleIntakeClick={handleIntakeClick}
      toggleTheme={toggleTheme}
      type={type}
    />
  );
};

export default Navbar;
