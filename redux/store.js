import { configureStore } from "@reduxjs/toolkit";
import CounterSlice from "@redux/slice/counter";
import roadMapSlice from "./slice/explore_slice";

export const store = configureStore({
  reducer: {
    counter: CounterSlice,
    roadmap: roadMapSlice,
  },
});
