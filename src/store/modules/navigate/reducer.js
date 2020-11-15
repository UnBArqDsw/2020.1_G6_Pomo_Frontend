import producer from 'immer';

const INITIAL_STATE = {
  token: null,
  signed: true,
  loading: false,
};
export default function navigate(state = INITIAL_STATE, action) {
  return producer(state, (draft) => {
    switch (action.type) {
      case '@chatNav/NAV_TO_CHAT': {
        draft.signed = 2;
        break;
      }
      case '@auth/TESTE_CHAT': {
        draft.token = action.payload.token;
        draft.signed = true;
        draft.loading = false;
        break;
      }
      case '@auth/SIGN_FAILURE': {
        draft.loading = false;
        break;
      }
      case '@auth/SIGN_OUT': {
        draft.token = null;
        draft.signed = false;
        break;
      }
      default:
        return state;
    }
  });
}
