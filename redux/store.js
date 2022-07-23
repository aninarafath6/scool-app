import { configureStore } from "@reduxjs/toolkit";
import CounterSlice from "@redux/slice/counter";
import MenuSlice from "./slice/menu";

export const store = configureStore({
  reducer: {
    counter: CounterSlice,
    menu: MenuSlice,
  },
});
