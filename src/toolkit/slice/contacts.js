import { createAsyncThunk, createSlice, current } from "@reduxjs/toolkit";
import { getRequest } from "@src/toolkit/fetch";

const initialState = {
  contacts: [],
  error: null,
};

export const fetchContacts = createAsyncThunk("contacts/fetchContacts", async (_, { rejectWithValue }) => {
  return getRequest({
    path: `http://localhost:${5000}/contacts`,
    reject: rejectWithValue,
  });
});

export const fetchRemoveContact = createAsyncThunk("contacts/removeContact", async (id, { rejectWithValue, dispatch }) => {
  return getRequest({
    path: `http://localhost:${5000}/contacts/${id}`,
    reject: rejectWithValue,
    method: "DELETE",
    dispatch: dispatch(removeContact(id)),
  });
});

const contacts = createSlice({
  name: "contacts",
  initialState,
  reducers: {
    removeContact(state, action) {
      state.contacts = state.contacts.filter(element => element.id !== action.payload);
    },
  },

  extraReducers: {
    [fetchContacts.pending]: (state, action) => {
      state.error = null;
    },
    [fetchContacts.fulfilled]: (state, action) => {
      state.contacts = action.payload;
    },
    [fetchContacts.rejected]: (state, action) => {
      state.error = action.payload;
    },
  },
});

export const { removeContact } = contacts.actions;
export default contacts.reducer;
