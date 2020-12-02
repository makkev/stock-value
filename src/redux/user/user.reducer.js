import UserActionTypes from './user.types';

const INITIAL_STATE = {
  currentUser: null,
};

const UserReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case UserActionTypes.SET_CURRENT_USER:
      return {
        ...state,
        currentUser: action.payload.email,
      };
    default:
      return state;
  }
};

export default UserReducer;
