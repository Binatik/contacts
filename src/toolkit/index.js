import { configureStore } from "@reduxjs/toolkit";
import burger from "./slice/burger";
import user from "./slice/user";

export const getBurgerState = state => state.burger;
export const getUserState = state => state.user;

export const store = configureStore({
  reducer: {
    burger,
    user,
  },
});
