import { useSelector } from 'react-redux';
import * as React from 'react';
import { AppState } from '../stores/store';

export const UserProfileComponent = () => {
  const userProfile = useSelector((state: AppState) => state.userProfile);

  return (
    <div>
      <h2>User Profile</h2>
      <p>Name: {userProfile.name}</p>
      <p>
        Date of Birth: {new Date(userProfile.dateOfBirth).toLocaleDateString()}
      </p>
      <p>Roles: {userProfile.roles?.join(', ')}</p>
    </div>
  );
};
