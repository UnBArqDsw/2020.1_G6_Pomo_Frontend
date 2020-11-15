import {all} from 'redux-saga/effects';

import auth from './auth/sagas';
import navigate from './navigate/sagas';
export default function* rootSaga() {
  return yield all([auth, navigate]);
}
