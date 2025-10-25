import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const apiSlice = createApi({
  reducerPath: 'safeTrackerApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://192.168.1.100:5000/api', // ⚠️ apna Node.js backend URL yahan lagana
    prepareHeaders: (headers, { getState }) => {
      const token = getState()?.auth?.token; // agar auth reducer ho future me
      if (token) {
        headers.set('authorization', `Bearer ${token}`);
      }
      return headers;
    },
  }),
  tagTypes: ['User', 'Child', 'Parent', 'Location'],
  endpoints: (builder) => ({
    // 🟢 Example: Google Login
    googleLogin: builder.mutation({
      query: (body) => ({
        url: '/auth/google',
        method: 'POST',
        body,
      }),
      invalidatesTags: ['User'],
    }),

    // 🟢 Example: Add child
    addChild: builder.mutation({
      query: (body) => ({
        url: '/child/add',
        method: 'POST',
        body,
      }),
      invalidatesTags: ['Child'],
    }),

    // 🟢 Example: Get child list for parent
    getChildren: builder.query({
      query: (parentId) => `/child/${parentId}`,
      providesTags: ['Child'],
    }),

    // 🟢 Example: Update location
    updateLocation: builder.mutation({
      query: (body) => ({
        url: '/location/update',
        method: 'POST',
        body,
      }),
      invalidatesTags: ['Location'],
    }),
  }),
});

export const {
  useGoogleLoginMutation,
  useAddChildMutation,
  useGetChildrenQuery,
  useUpdateLocationMutation,
} = apiSlice;
