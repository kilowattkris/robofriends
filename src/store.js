import { configureStore } from '@reduxjs/toolkit';
import robotsReducer from "./features/robots/robotsSlice";

export const store = configureStore({
  reducer: {
    robots: robotsReducer
  },
});