import { createSlice } from '@reduxjs/toolkit';
import { signIn, signOut, serviceCurrentUser, signUp } from './auth-operations';

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
  extraReducers: buider =>
    buider

      //* signup
      .addCase(signUp.pending, handelPending)
      .addCase(signUp.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isLoggedIn = true;
      })
      .addCase(signUp.rejected, handleRejected)

      //* signIn
      .addCase(signIn.pending, handelPending)
      .addCase(signIn.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isLoggedIn = true;
      })
      .addCase(signIn.rejected, handleRejected)

      //* signOut
      .addCase(signOut.pending, handelPending)
      .addCase(signOut.fulfilled, state => {
        state.user = { name: null, email: null };
        state.token = null;
        state.isLoggedIn = false;
      })
      .addCase(signOut.rejected, handleRejected)

      //*serviceCurrentUser
      .addCase(serviceCurrentUser.pending, handelPending)
      .addCase(serviceCurrentUser.fulfilled, (state, action) => {
        state.user = action.payload;
        state.isLoggedIn = true;
      })
      .addCase(serviceCurrentUser.rejected, handleRejected),
});

export const authReducer = authSlice.reducer;
