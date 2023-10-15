import { configureStore } from '@reduxjs/toolkit';
import { filterReducer } from './contacts/filterSlice';
import { authReducer } from 'redux/auth/auth-slice';
import { contactsReducer } from './contacts/contacts-slice';

export const store = configureStore({
  reducer: {
    auth: authReducer,
    contacts: contactsReducer,
    filter: filterReducer,
  },
});

//* configureStore(options)
