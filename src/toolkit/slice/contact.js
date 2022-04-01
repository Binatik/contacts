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
   removeContact(state, action) {
     state.data = state.data.filter((element) => element.id !== action.payload);
   }
  },
});

export const { removeContact } = contact.actions;
export default contact.reducer;
