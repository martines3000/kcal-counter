import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import LandingPage from './ui/pages/LandingPage/LandingPage';
import Dashboard from './ui/pages/Dashboard/Dashboard';
import Profile from './ui/pages/Profile/Profile';
import PrivateRoute from './ui/PrivateRoute';
import Navbar from './ui/organisms/Navbar/Navbar';
import { useAuth } from './contexts/AuthContext';
import Food from './ui/pages/FoodPage/FoodPage';
import LoadingAnimation from './ui/atoms/LoadingAnimation/LoadingAnimation';
import Error404 from './ui/pages/Error404/Error404';
import Intake from './ui/pages/Intake/Intake';

function App(): JSX.Element {
  const { isAuthenticated } = useAuth();
  if (isAuthenticated === null) return <LoadingAnimation />;

  return (
    <Switch>
      <Route exact path='/' component={LandingPage} />
      <PrivateRoute path='/dashboard'>
        <Navbar />
        <Dashboard />
      </PrivateRoute>
      <PrivateRoute path='/profile'>
        <Navbar />
        <Profile />
      </PrivateRoute>
      <PrivateRoute path='/food'>
        <Navbar />
        <Food />
      </PrivateRoute>
      <PrivateRoute path='/intake'>
        <Navbar />
        <Intake />
      </PrivateRoute>
      <Route path='*' component={Error404} />
    </Switch>
  );
}

export default App;
