import { createSlice } from '@reduxjs/toolkit';
import { signUp } from './auth-operations';
// import { addContact, deleteContact, serviceContacts } from './auth-operations';

const handelPending = state => {
  state.isLoading = true;
};

const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const initialState = {
  user: { name: null, email: null },
  token: null,
  isLoggedIn: false,
  isLoading: false,
  error: null,
};

const contactsSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: {
    [signUp.pending]: handelPending,
    [signUp.fulfilled](state, action) {},
    [signUp.rejected]: handleRejected,
    // [serviceContacts.pending]: handelPending,
    // [serviceContacts.fulfilled](state, action) {
    //   state.isLoading = false;
    //   state.error = null;
    //   state.items = action.payload;
    // },
    // [serviceContacts.rejected]: handleRejected,
    // [addContact.pending]: handelPending,
    // [addContact.fulfilled](state, action) {
    //   state.isLoading = false;
    //   state.error = null;
    //   state.items.push(action.payload);
    // },
    // [addContact.rejected]: handleRejected,
    // [deleteContact.pending]: handelPending,
    // [deleteContact.fulfilled](state, action) {
    //   state.isLoading = false;
    //   state.error = null;
    //   state.items = state.items.filter(
    //     contact => contact.id !== action.payload.id
    //   );
    // },
    // [deleteContact.rejected]: handleRejected,
  },
});

export const contactsReducer = contactsSlice.reducer;
