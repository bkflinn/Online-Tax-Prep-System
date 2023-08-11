import { createSlice } from '@reduxjs/toolkit';

//stores authentication
const authSlice = createSlice({
  name: 'auth',
  initialState: {
    isAuthenticated: false,
    token: '',
  },
  reducers: {
    setAuth: (state, action) => {
      state.isAuthenticated = true;
      state.token = action.payload;
    },
    resetAuth: (state) => {
      state.isAuthenticated = false;
      state.token = '';
    },
  },
});

export const { setAuth, resetAuth } = authSlice.actions;

// Selector to extract the authentication token
export const selectAuthToken = (state: { auth: { token: any; }; }) => state.auth.token;

export default authSlice.reducer;