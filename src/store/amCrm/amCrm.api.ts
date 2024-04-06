/* eslint-disable camelcase */
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

interface LoginRequest {
  email: string;
  password: string;
}

interface LoginResponse {
  auth_token: string;
}

export const api = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://localhost:8000/api/v1/',
    prepareHeaders: headers => {
      const authToken = localStorage.getItem('authToken');
      if (authToken) {
        headers.set('authorization', `Token ${authToken}`);
      }
      return headers;
    },
  }),
  tagTypes: ['Tags'],
  endpoints: build => ({
    login: build.mutation<LoginResponse, LoginRequest>({
      query: credentials => ({
        url: 'auth/token/login',
        method: 'POST',
        body: credentials,
      }),
      invalidatesTags: ['Tags'],
    }),
    getFilters: build.query({
      query: () => 'filters/',
    }),
  }),
});

export const { useLoginMutation, useGetFiltersQuery } = api;
