import {combineReducers} from 'redux';

import auth from './auth/reducer';
//import user from './user/reducer'; // adicionar posteriormente
import navigate from './navigate/reducer';
export default combineReducers({
  auth,
  //user,
  navigate,
});
