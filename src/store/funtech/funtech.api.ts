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
        headers.set('Authorization', `Bearer ${authToken}`);
      }
      return headers;
    },
  }),
  tagTypes: ['Events', 'UserInfo', 'Event', 'Notifications', 'Interests'],
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
    postUserProfileChanges: build.mutation<
      UserType,
      { data: Partial<UserType>; id: number }
    >({
      query: ({ data, id }) => {
        return {
          url: `user/${id}/`,
          method: 'PATCH',
          body: data,
        };
      },
      invalidatesTags: ['UserInfo'],
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
    getEvent: build.query<EventData, string>({
      query: slug => `events/${slug}/`,
      providesTags: ['Event'],
    }),
    postLike: build.mutation({
      query: slug => {
        return {
          url: `events/${slug}/favorite/`,
          method: 'POST',
        };
      },
      invalidatesTags: ['Events', 'Event'],
    }),
    deleteLike: build.mutation({
      query: (slug: string) => {
        return {
          url: `events/${slug}/favorite/`,
          method: 'DELETE',
        };
      },
      invalidatesTags: ['Events', 'Event'],
    }),
    getUserInfo: build.query<UserType, { id: number }>({
      query: ({ id }) => `user/${id}/`,
      providesTags: ['UserInfo'],
    }),
    getNotificationInfo: build.query<NotificationsType, void>({
      query: () => 'user/notifications/',
      providesTags: ['Notifications'],
    }),
    patchNotificationInfo: build.mutation<
      NotificationsType,
      PatchNotificationsType
    >({
      query: data => {
        return {
          url: 'user/notifications/',
          method: 'PATCH',
          body: data,
        };
      },
      invalidatesTags: ['Notifications'],
    }),
    postRegister: build.mutation({
      query: id => {
        return {
          url: `events/${id}/registration/`,
          method: 'POST',
        };
      },
      invalidatesTags: ['Events', 'Event'],
    }),
    deleteRegister: build.mutation({
      query: id => {
        return {
          url: `events/${id}/registration/`,
          method: 'DELETE',
        };
      },
      invalidatesTags: ['Events', 'Event'],
    }),
    getUserInterests: build.query<UserInterests, void>({
      query: () => 'user/interests/',
      providesTags: ['Interests'],
    }),
    putUserInterests: build.mutation<UserInterests, UserInterests>({
      query: data => {
        return {
          url: 'user/interests/',
          method: 'PUT',
          body: data,
        };
      },
      invalidatesTags: ['Interests'],
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
  usePostUserProfileChangesMutation,
  useGetNotificationInfoQuery,
  usePatchNotificationInfoMutation,
  useGetUserInfoQuery,
  usePostRegisterMutation,
  useGetUserInterestsQuery,
  usePutUserInterestsMutation,
  useDeleteRegisterMutation,
} = api;
