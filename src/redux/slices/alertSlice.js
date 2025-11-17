import { createSlice } from '@reduxjs/toolkit';

const alertSlice = createSlice({
  name: 'alert',
  initialState: {
    queue: [],
    loadingMap: {},
  },
  reducers: {
    pushAlert: (state, action) => {
      const alertWithId = {
        id: Date.now().toString(), // 🔑 Unique ID for each toast
        ...action.payload,
      };
      state.queue.push(alertWithId);
    },
    removeAlertById: (state, action) => {
      const idToRemove = action.payload;
      state.queue = state.queue.filter(alert => alert.id !== idToRemove);
    },
    setLoading: (state, action) => {
      const { key, value } = action.payload;
      state.loadingMap[key] = value;
    },
    clearLoadingKey: (state, action) => {
  const key = action.payload;
  delete state.loadingMap[key]; // remove key completely
},
  },
});

export const { pushAlert, removeAlertById, setLoading  , clearLoadingKey} = alertSlice.actions;
export default alertSlice.reducer;
