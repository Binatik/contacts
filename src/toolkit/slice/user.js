import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: {
    name: null, 
    email: null,
  },
  isAuth: false
};

const user = createSlice({
  name: "slice",
  initialState,
  reducers: {
    getAccess(state) {
      state.isAuth = true;
    }
  },
});

export const { getAccess } = user.actions;
export default user.reducer;
