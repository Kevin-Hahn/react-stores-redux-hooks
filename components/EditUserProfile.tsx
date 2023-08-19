import { useSelector, useDispatch } from 'react-redux';
import * as React from 'react';
import { useState } from 'react';
import { AppState } from '../stores/store';

export const EditUserProfileComponent = () => {
  const userProfile = useSelector((state: AppState) => state).userProfile;
  const dispatch = useDispatch();

  const [name, setName] = useState(userProfile.name);
  const [dateOfBirth, setDateOfBirth] = useState(
    new Date(userProfile.dateOfBirth).toISOString().substring(0, 10)
  );
  const [roles, setRoles] = useState(userProfile.roles.join(','));

  const handleSubmit = (event) => {
    event.preventDefault();

    const newProfile = {
      name,
      dateOfBirth: new Date(dateOfBirth).getTime(),
      roles: roles.split(','),
    };

    dispatch({ type: 'UPDATE_USER_PROFILE', payload: newProfile });
  };

  return (
    <div>
      <h2>Edit Profile</h2>
      <form onSubmit={handleSubmit}>
        <p>
          <label>
            Name:{' '}
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </label>
        </p>

        <p>
          <label>
            Date of Birth:{' '}
            <input
              type="date"
              value={dateOfBirth}
              onChange={(e) => setDateOfBirth(e.target.value)}
            />
          </label>
        </p>

        <p>
          <label>
            Roles:{' '}
            <input
              type="text"
              value={roles}
              onChange={(e) => setRoles(e.target.value)}
            />
          </label>
        </p>
        <button type="submit">Save</button>
      </form>
    </div>
  );
};
