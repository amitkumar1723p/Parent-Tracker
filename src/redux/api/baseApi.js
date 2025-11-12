// 📁 src/redux/api/baseApi.js
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { getToken } from '../../utils/keychainStorage';

export const baseApi = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://192.168.29.19:5000', // ✅ Replace this
    // credentials: 'include', // ⬅️ enable cookies if needed

    prepareHeaders: async headers => {
      const token = await getToken();
      if (token) headers.set('Authorization', `Bearer ${token}`);
      headers.set('x-client-type', 'mobile-app');

      return headers;
    },
  }),
  tagTypes: ['User', 'Post', 'Visit', 'Bid', 'Favourite'],
  endpoints: () => ({}),
});
