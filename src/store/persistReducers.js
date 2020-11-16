import AsyncStorage from '@react-native-community/async-storage';
import {persistReducer} from 'redux-persist';

export default (reducers) => {
  const persistedReducer = persistReducer(
    {
      key: 'pomo',
      storage: AsyncStorage,
      whitelist: ['auth', 'user', 'navigate'],
    },
    reducers,
  );
  return persistedReducer;
};
