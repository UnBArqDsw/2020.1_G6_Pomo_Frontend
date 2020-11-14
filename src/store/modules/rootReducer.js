import {combineReducers} from 'redux';

import auth from './auth/reducer';
//import user from './user/reducer'; // adicionar posteriormente

export default combineReducers({
  auth,
  //user,
});
