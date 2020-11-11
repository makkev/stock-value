import { combineReducers } from 'redux';

import peReducer from './pe/pe.reducer';

export default combineReducers({
  pe: peReducer,
});
