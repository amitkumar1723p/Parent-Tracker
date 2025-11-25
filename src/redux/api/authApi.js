// 📁 src/redux/api/authApi.js
import { baseApi } from './baseApi';

export const authApi = baseApi.injectEndpoints({
  endpoints: builder => ({
    sendOtp: builder.mutation({
      query: body => ({
        url:  '/api/auth/v1/send-otp',
        method: 'POST',
        body,
      }),
    }),

   verifyOtp: builder.mutation({
      query: body => ({
        url:  '/api/auth/v1/verify-otp',
        method: 'POST',
        body,
      }),
    }),



completeProfile: builder.mutation({
  query: (formData) => ({
    url: '/api/auth/v1/complete-profile',
    method: 'POST',
    body: formData,
    // 👇 IMPORTANT
    formData: true,
  }),
}),





  }),
});
export const {
  useSendOtpMutation ,
  useVerifyOtpMutation,
 useCompleteProfileMutation
//   useLazyGetMeQuery,
//   useEditProfileMutation,
//   useVerifyOtpMutation,
} = authApi;
