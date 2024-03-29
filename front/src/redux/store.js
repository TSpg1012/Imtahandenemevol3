import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./slices/productSlice";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
});
