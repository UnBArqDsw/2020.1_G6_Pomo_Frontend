import {Alert} from 'react-native';
import {takeLatest, call, put, all} from 'redux-saga/effects';

import api from '../../../services/api';
import {signInSuccess, signFailure} from './actions';

export function* navChat({payload, navigation}) {
  yield console.tron.log(navigation);
  navigation.navigate('Profile');
  return;
}

export function* signUp({payload}) {
  try {
    const {name, email, password} = payload;

    yield call(api.post, 'users', {
      name,
      email,
      password,
    });
    // history.push('/');
    Alert.alert(
      'Conta criada com sucesso! Volte para a página de login para iniciar',
    );
  } catch (err) {
    Alert.alert('Falha no cadastro', 'Verifique seus dados.');

    yield put(signFailure());
  }
}
export function setToken({payload}) {
  if (!payload) return;

  const {token} = payload.auth;
  if (token) {
    api.defaults.headers.Authorization = `Bearer ${token}`;
  }
}
export function signOut() {
  // history.push('/');
}
export default all([
  takeLatest('persist/REHYDRATE', setToken),
  takeLatest('@@chatNav/NAV_TO_CHAT', navChat),
  takeLatest('@auth/SIGN_UP_REQUEST', signUp),
  takeLatest('@auth/SIGN_OUT', signOut),
]);
