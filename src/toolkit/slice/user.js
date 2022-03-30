import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  name: "Glenna Reichert",
  username: "Delphine",
  email: "Chaim_McDermott@dana.io",
  isAuth: true
};

const user = createSlice({
  name: "slice",
  initialState,
  reducers: {
  },
});

// export const { toggle } = burger.actions;
export default user.reducer;
