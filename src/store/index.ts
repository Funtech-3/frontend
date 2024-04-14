import { configureStore } from '@reduxjs/toolkit';
import { api } from './funtech/funtech.api';
import { filtersReducer } from './funtech/filters.slice';
import { userReducer } from './funtech/user.slice';

export const store = configureStore({
  reducer: {
    [api.reducerPath]: api.reducer,
    filters: filtersReducer,
    user: userReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(api.middleware),
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
