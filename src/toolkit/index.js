import { configureStore } from "@reduxjs/toolkit";
import burger from "./slice/burger";
import authorization from "./slice/authorization";
import contact from "./slice/contact";

export const getBurgerState = state => state.burger;
export const getAuthorizationState = state => state.authorization;
export const getContactState = state => state.contact;

export const store = configureStore({
  reducer: {
    burger,
    authorization, 
    contact,
  },
});
