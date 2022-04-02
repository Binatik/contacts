import { configureStore } from "@reduxjs/toolkit";
import burger from "./slice/burger";
import registeredUsers from "./slice/registeredUsers";
import contacts from "./slice/contacts";

export const getBurgerState = state => state.burger;
export const getRegisteredUsersState = state => state.registeredUsers;
export const getContactsState = state => state.contacts;

export const store = configureStore({
  reducer: {
    burger,
    registeredUsers, 
    contacts
  },
});
