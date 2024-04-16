import { createSlice } from '@reduxjs/toolkit';

type AlertStateType = {
  isOpen: boolean;
  severity?: 'error' | 'info' | 'success' | 'warning';
  message: string;
  timeout?: number;
};

const initialState: AlertStateType = {
  isOpen: false,
  message: '',
  timeout: 700,
};

const alertSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setAlert(state, action) {
      state.isOpen = action.payload.isOpen;
      state.severity = action.payload.severity;
      state.message = action.payload.message;
      state.timeout = action.payload.timeout;
    },
  },
});

export const alertActions = alertSlice.actions;
export const alertReducer = alertSlice.reducer;
