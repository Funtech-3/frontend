import { configureStore } from '@reduxjs/toolkit';
import { api } from './funtech/funtech.api';
import { filtersReducer } from './funtech/filters.slice';

export const store = configureStore({
  reducer: {
    [api.reducerPath]: api.reducer,
    filters: filtersReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(api.middleware),
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
