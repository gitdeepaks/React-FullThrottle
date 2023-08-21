// store.js
import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/todo/counterSlice";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
});
