import { createSlice } from '@reduxjs/toolkit';

type userState = {
  user: Partial<UserType>;
  updatedUser: Partial<UserType>;
};

const initialState: userState = {
  user: {},
  updatedUser: {},
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUpdatedUser: (state, action) => {
      state.updatedUser = action.payload;
    },

    setUser: (state, action) => {
      state.user = action.payload;
    },
  },
});

export const userActions = userSlice.actions;
export const userReducer = userSlice.reducer;
