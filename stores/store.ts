import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { UserProfile } from '../interfaces/userProfile';
import { userProfileReducer } from '../reducers/userProfile.reducer';

export interface AppState {
  userProfile: UserProfile;
  // other state related properties can be placed here
}

const rootReducer = combineReducers({
  userProfile: userProfileReducer,
  // other reducers can be placed here
});

export const store = configureStore({
  reducer: rootReducer,
});
