import { configureStore } from '@reduxjs/toolkit';
import { filterReducer } from './contacts/filterSlice';
import { authReducer } from 'redux/auth/auth-slice';
import { contactsReducer } from './contacts/contacts-slice';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const authPersistConfig = {
  key: 'auth',
  storage,
  whitelist: ['token'],
};

export const store = configureStore({
  reducer: {
    auth: persistReducer(authPersistConfig, authReducer),
    contacts: contactsReducer,
    filter: filterReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoreActions: [FLUSH, REHYDRATE, PAUSE, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
