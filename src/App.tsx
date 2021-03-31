import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import LandingPage from './ui/pages/LandingPage/LandingPage';
import Dashboard from './ui/pages/Dashboard/Dashboard';
import Profile from './ui/pages/Profile/Profile';
import PrivateRoute from './ui/PrivateRoute';
import Navbar from './ui/Navbar';

function App(): JSX.Element {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <Switch>
        <Route path='/' exact component={LandingPage} />
        <PrivateRoute path='/dashboard'>
          <Navbar />
          <Dashboard />
        </PrivateRoute>
        <PrivateRoute path='/profile'>
          <Navbar />
          <Profile />
        </PrivateRoute>
      </Switch>
    </Router>
  );
}

export default App;
