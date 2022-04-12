import { createAsyncThunk, createSlice, current } from "@reduxjs/toolkit";
import { getRequest, postRequest } from "@src/toolkit/fetch";

const initialState = {
  contacts: [],
  form: {},
  error: null,
};

export const fetchContacts = createAsyncThunk("contacts/fetchContacts", async (_, { rejectWithValue }) => {
  return getRequest({
    path: `http://localhost:${5000}/contacts`,
    reject: rejectWithValue,
  });
});

export const fetchRemoveContact = createAsyncThunk("contacts/fetchRemoveContact", async (id, { rejectWithValue, dispatch }) => {
  return getRequest({
    path: `http://localhost:${5000}/contacts/${id}`,
    method: "DELETE",
    payload: id,
    reject: rejectWithValue,
  });
});

export const fetchCreateContact = createAsyncThunk("contacts/createContact", async (_, { rejectWithValue, getState }) => {
  return postRequest({
    path: `http://localhost:${5000}/contacts`,
    body: getState().contacts.form,
    reject: rejectWithValue,
  });
});

const contacts = createSlice({
  name: "contacts",
  initialState,
  reducers: {

    createContact(state, action) {
      state.contacts.push(action.payload);
    },

    setValueContacts(state, action) {
      const key = action.payload["1"];
      const value = action.payload["0"];

      state.form = {
        ...state.form,
        [key]: value,
      };
    },
  },

  extraReducers: {
    [fetchContacts.pending]: (state, action) => {
      state.error = null;
    },
    [fetchContacts.fulfilled]: (state, action) => {
      state.contacts = action.payload;
    },
    [fetchCreateContact.fulfilled]: (state, action) => {
      state.contacts.push(action.payload);
    },
    [fetchRemoveContact.fulfilled]: (state, action) => {
      state.contacts = state.contacts.filter(element => element.id !== action.payload);
    },
    
    [fetchContacts.rejected]: (state, action) => {
      state.error = action.payload;
    },
  },
});

export const { removeContact, setValueContacts } = contacts.actions;
export default contacts.reducer;
