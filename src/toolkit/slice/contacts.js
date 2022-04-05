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
    dispatch: dispatch(removeContact(id)),
    reject: rejectWithValue,
  });
});

export const fetchCreateContact = createAsyncThunk("contacts/createContact", async (_, { rejectWithValue, dispatch, getState }) => {
  return postRequest({
    path: `http://localhost:${5000}/contacts`,
    body: getState().contacts.form,
    reject: rejectWithValue,
    // dispatch: dispatch(removeContact(id)),
  });
});

const contacts = createSlice({
  name: "contacts",
  initialState,
  reducers: {
    removeContact(state, action) {
      state.contacts = state.contacts.filter(element => element.id !== action.payload);
    },

    setValueContacts(state, action) {
      const { value, key } = action.payload;
      state.form = {
        ...state.form,
        [key]: value,
      };

      console.log(state.form);
    },
  },

  extraReducers: {
    [fetchContacts.pending]: (state, action) => {
      state.error = null;
    },
    [fetchContacts.fulfilled]: (state, action) => {
      state.contacts = action.payload;
    },
    [ fetchCreateContact.fulfilled]: (state, action) => {
      console.log(action.payload);
    },
    [fetchContacts.rejected]: (state, action) => {
      state.error = action.payload;
    },
  },
});

export const { removeContact, setValueContacts } = contacts.actions;
export default contacts.reducer;
