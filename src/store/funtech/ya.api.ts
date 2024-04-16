/* eslint-disable camelcase */
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const yaApi = createApi({
  reducerPath: 'yaApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://login.yandex.ru/',
    prepareHeaders: headers => {
      const yaAuthToken = localStorage.getItem('yaAuthToken');
      if (yaAuthToken) {
        headers.set('Authorization', `OAuth ${yaAuthToken}`);
      }
      return headers;
    },
  }),

  endpoints: build => ({
    getYaUserInfo: build.query<YaIdResponseType, void>({
      query: () => 'info?',
    }),
  }),
});

export const { useGetYaUserInfoQuery } = yaApi;
