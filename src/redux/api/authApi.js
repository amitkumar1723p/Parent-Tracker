// 📁 src/redux/api/authApi.js
import { baseApi } from './baseApi';

export const authApi = baseApi.injectEndpoints({
  endpoints: builder => ({
    login: builder.mutation({
      query: body => ({
        url:  '/api/auth/register',
        method: 'POST',
        body,
      }),
    }),

    // http://localhost:4000/api/auth/register
    // verifyOtp: builder.mutation({
    //   query: body => ({
    //     url: '/user/verify-otp',
    //     method: 'POST',
    //     body,
    //   }),
    // }),
    // editProfile: builder.mutation({
    //   query: body => ({
    //     url: '/user/updateProfile',
    //     method: 'PUT',
    //     body,
    //   }),
    // }),
    // getMe: builder.query({
    //   query: () => '/user/data',
    //   providesTags: ['User'],
    // }),
  }),
});
export const {
  useLoginMutation,
//   useLazyGetMeQuery,
//   useEditProfileMutation,
//   useVerifyOtpMutation,
} = authApi;
