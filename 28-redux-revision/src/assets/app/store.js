import { configureStore } from "@reduxjs/toolkit";
// import { todoSlice } from "../features/todo/tosoSlice";
import todoReducer from "../features/todo/tosoSlice";

export const store = configureStore({
  reducer: todoReducer,
});
