import { combineReducers } from 'redux';

import peReducer from './pe/pe.reducer';
import UserReducer from './user/user.reducer';

export default combineReducers({
  pe: peReducer,
  user: UserReducer,
});
