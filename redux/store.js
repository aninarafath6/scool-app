import { configureStore } from "@reduxjs/toolkit";
import CounterSlice from "@redux/slice/counter";

export const store = configureStore({
  reducer: {
    counter: CounterSlice,
  },
});
