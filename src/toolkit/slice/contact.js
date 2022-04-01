import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: [
    {
      id: new Date().toISOString(),
      titleText: 'Сергей А.С',
      titleButton: 'Удалить',
      text: '+79661901014',
      description: 'Эти данные формируются сейчас из redux.',
    },
  ],
};

const contact = createSlice({
  name: "contact",
  initialState,
  reducers: {
   test() {
     return null;
   }
  },
});

export const { test } = contact.actions;
export default contact.reducer;
