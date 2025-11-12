// import { configureStore } from '@reduxjs/toolkit';
// import { apiSlice } from './services/apiSlice'; // ye abhi banayenge

// export const store = configureStore({
//   reducer: {
//     [apiSlice.reducerPath]: apiSlice.reducer,
//   },
//   middleware: (getDefaultMiddleware) =>
//     getDefaultMiddleware().concat(apiSlice.middleware),
// });


// 📁 src/redux/store.js
import { configureStore } from '@reduxjs/toolkit';
import { baseApi } from './api/baseApi.js';
import alertReducer from './slices/alertSlice.js';
// import authReducer from './slices/authSlice.js';

export const store = configureStore({
  reducer: {
    auth: authReducer,
    // alert: alertReducer,
    [baseApi.reducerPath]: baseApi.reducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(baseApi.middleware),
  // ⚠️ NOTE: `enhancers` का इस्तेमाल करें remotedev जोड़ने के लिए
  // enhancers: [devToolsEnhancer({ realtime: true })],
});
