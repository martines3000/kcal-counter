import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import Dashboard from './pages/Dashboard';
import Profile from './pages/Profile';
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
