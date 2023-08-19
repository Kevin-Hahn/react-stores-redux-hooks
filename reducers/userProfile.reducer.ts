import { UserProfile } from '../interfaces/userProfile';

export const initialProfileState: UserProfile = {
  name: 'John Doe',
  dateOfBirth: 123456789000,
  roles: ['admin'],
};

export const userProfileReducer = (state = initialProfileState, action) => {
  switch (action.type) {
    case 'UPDATE_USER_PROFILE':
      return {
        ...state,
        ...action.payload,
      };
    default:
      return state;
  }
};
