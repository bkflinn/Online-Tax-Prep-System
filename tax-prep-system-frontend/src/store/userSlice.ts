import { createSlice } from '@reduxjs/toolkit';

interface UserState {
    user: {
      social: number | null;
      // Other user properties...
    } | null;
  }
  
  const initialState: UserState = {
    user: null,
  };

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
    },
  },
});

export const { setUser } = userSlice.actions;
export default userSlice.reducer;