/* eslint-disable camelcase */
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { formatDate } from '../../utils/formatDate';

export const api = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://funtech.myddns.me/api/v1/',
    prepareHeaders: headers => {
      const authToken = localStorage.getItem('authToken');
      if (authToken) {
        headers.set('Authorization', `Token ${authToken}`);
      }
      return headers;
    },
  }),
  tagTypes: ['Events'],
  endpoints: build => ({
    postYaUserInfo: build.mutation({
      query: data => {
        return {
          url: 'user/',
          method: 'POST',
          body: data,
        };
      },
    }),
    getFilters: build.query({
      query: () => 'filters/',
    }),
    getCities: build.query<CityType[], void>({
      query: () => 'cities/',
    }),
    getTags: build.query<TagType[], void>({
      query: () => 'tags/',
    }),
    getEvents: build.query<ApiResponseType<EventType>, FiltersStateType>({
      query: params => {
        const searchParams = new URLSearchParams();

        Object.entries(params).forEach(([key, value]) => {
          if (value !== null) {
            if (value instanceof Date) {
              searchParams.append(key, formatDate(value.toString(), 'numeric'));
            } else if (Array.isArray(value)) {
              value.forEach(item => searchParams.append(key, item.toString()));
            } else {
              searchParams.append(key, value.toString());
            }
          }
        });
        return `events/?${searchParams.toString()}`;
      },
      providesTags: ['Events'],
    }),
    getEvent: build.query<DetailedEventType, string>({
      query: slug => `events/${slug}/`,
    }),
    postLike: build.mutation({
      query: slug => {
        return {
          url: `events/${slug}/favorite/`,
          method: 'POST',
        };
      },
      invalidatesTags: ['Events'],
    }),
    deleteLike: build.mutation({
      query: slug => {
        return {
          url: `events/${slug}/favorite/`,
          method: 'DELETE',
        };
      },
      invalidatesTags: ['Events'],
    }),
  }),
});

export const {
  useGetFiltersQuery,
  useGetCitiesQuery,
  useGetTagsQuery,
  useGetEventsQuery,
  useGetEventQuery,
  usePostYaUserInfoMutation,
  usePostLikeMutation,
  useDeleteLikeMutation,
} = api;
