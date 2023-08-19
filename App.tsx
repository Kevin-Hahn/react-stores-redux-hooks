import * as React from 'react';
import { Provider } from 'react-redux';
import { EditUserProfileComponent } from './components/EditUserProfile';
import { UserProfileComponent } from './components/UserProfile';
import { store } from './stores/store';
import './style.css';

export default function App() {
  return (
    <Provider store={store}>
      <UserProfileComponent />
      <EditUserProfileComponent />
    </Provider>
  );
}
