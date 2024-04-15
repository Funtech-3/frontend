import { configureStore } from '@reduxjs/toolkit';
import { api } from './funtech/funtech.api';
import { yaApi } from './funtech/ya.api';
import { filtersReducer } from './funtech/filters.slice';
import { userReducer } from './funtech/user.slice';
import { authReducer } from './funtech/auth.slice';

export const store = configureStore({
  reducer: {
    [api.reducerPath]: api.reducer,
    [yaApi.reducerPath]: yaApi.reducer,
    filters: filtersReducer,
    user: userReducer,
    auth: authReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(api.middleware, yaApi.middleware),
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
