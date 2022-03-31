import { configureStore } from "@reduxjs/toolkit";
import burger from "./slice/burger";
import authorization from "./slice/authorization";

export const getBurgerState = state => state.burger;
export const getAuthorizationState = state => state.authorization;

export const store = configureStore({
  reducer: {
    burger,
    authorization,
  },
});
