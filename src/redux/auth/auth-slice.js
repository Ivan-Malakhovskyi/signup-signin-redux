import { createSlice } from '@reduxjs/toolkit';
import { logIn, logOut, serviceCurrentUser, signUp } from './auth-operations';

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
  isRefresh: false,
  isLoading: false,
  error: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: {
    [signUp.pending]: handelPending,
    [signUp.fulfilled](state, action) {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isLoggedIn = true;
    },
    [signUp.rejected]: handleRejected,
    [logIn.pending]: handelPending,
    [logIn.fulfilled](state, action) {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isLoggedIn = true;
    },
    [logIn.rejected]: handleRejected,
    [logOut.pending]: handelPending,
    [logOut.fulfilled](state, action) {
      state.user = { name: null, email: null };
      state.token = null;
      state.isLoggedIn = false;
    },
    [logOut.rejected]: handleRejected,
    [serviceCurrentUser.pending]: handelPending,
    [serviceCurrentUser.fulfilled](state, action) {
      state.user = action.payload;
      state.isLoggedIn = true;
    },
    [serviceCurrentUser.rejected]: handleRejected,
  },
});

export const authReducer = authSlice.reducer;
