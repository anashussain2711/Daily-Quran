import { configureStore } from '@reduxjs/toolkit';
import { quranApi } from './quran-api';

export const store = configureStore({
  reducer: {
    [quranApi.reducerPath]: quranApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(quranApi.middleware),
});