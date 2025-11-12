// 📁 src/redux/api/authApi.js
import { baseApi } from './baseApi';

export const authApi = baseApi.injectEndpoints({
  endpoints: builder => ({
    login: builder.mutation({
      query: body => ({
        url: body.email ? '/user/nri-genrate-otp' : '/user/genrate-otp',
        method: 'POST',
        body,
      }),
    }),
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
