export function chatNav(data) {
  return {
    type: '@chatNav/NAV_TO_CHAT',
    payload: {data},
  };
}

export function teste(token, user) {
  return {
    type: '@auth/TESTE_CHAT',
    payload: {token, user},
  };
}

export function signUpRequest(name, email, password) {
  return {
    type: '@auth/SIGN_UP_REQUEST',
    payload: {name, email, password},
  };
}

export function signFailure() {
  return {
    type: '@auth/SIGN_FAILURE',
  };
}
export function signOut() {
  return {
    type: '@auth/SIGN_OUT',
  };
}
