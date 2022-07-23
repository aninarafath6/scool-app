import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: "on",
};

export const menuSlice = createSlice({
  name: "menu",
  initialState,
  reducers: {
    toggleMenu: (state) => {
      state.value = state.value === "on" ? "off" : "on";
    },
  },
});

// Action creators are generated for each case reducer function
export const { toggleMenu } = menuSlice.actions;

export default menuSlice.reducer;
