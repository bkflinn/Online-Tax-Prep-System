import { createSlice } from '@reduxjs/toolkit';

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
export default authSlice.reducer;