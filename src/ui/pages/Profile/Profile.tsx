import React from 'react';
import { useAuth } from '../../../contexts/AuthContext';

const Profile = (): JSX.Element => {
  const { currentUser } = useAuth();
  return (
    <div>
      <h1>Profile page</h1>
      <div>{currentUser.id}</div>
      <div>{currentUser.name}</div>
      <div>{currentUser.username}</div>
      <div>{currentUser.token}</div>
    </div>
  );
};

export default Profile;
