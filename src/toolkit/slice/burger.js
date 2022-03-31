import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  toggle: false,
};

const burger = createSlice({
  name: "burger",
  initialState,
  reducers: {
    toggle(state) {
      state.toggle = !state.toggle;
    },
  },
});

export const { toggle } = burger.actions;
export default burger.reducer;
