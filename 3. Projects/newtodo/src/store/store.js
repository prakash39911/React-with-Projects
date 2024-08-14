import { configureStore } from "@reduxjs/toolkit";
import todoreducer from "./todoslice";

export const store = configureStore({
  reducer: todoreducer,
});
