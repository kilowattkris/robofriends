import { configureStore } from '@reduxjs/toolkit';
import robotsReducer from "./features/robots/robotsSlice";
import counterReducer from "./features/counter/counterSlice";

export const store = configureStore({
  reducer: {
    robots: robotsReducer,
    counter: counterReducer
  },
});