import { configureStore } from '@reduxjs/toolkit';
import { api } from './amCrm/amCrm.api';

import { amFiltersReducer } from './amCrm/amFilters.slice';

export const store = configureStore({
  reducer: {
    [api.reducerPath]: api.reducer,
    amFilters: amFiltersReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(api.middleware),
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
