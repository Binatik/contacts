import { createAsyncThunk, createSlice, current } from "@reduxjs/toolkit";

const initialState = {
  contacts: [],
  error: null,
};

export const fetchContacts = createAsyncThunk("contacts/fetchContacts", async (_, { rejectWithValue }) => {
  try {
    const port = 5000;
    const contactsPath = `http://localhost:${port}/contacts`;
    const response = await fetch(contactsPath);

    if (!response.ok) {
      throw new Error("Вы не получили запрос в fetchContacts");
    }
    return response.json();
  } catch (error) {
    return rejectWithValue(error.message);
  }
});

export const fetchRemoveContact = createAsyncThunk("contacts/removeContact", async (id, { rejectWithValue, dispatch }) => {
  try {
    const port = 5000;
    const contactsPath = `http://localhost:${port}/contacts/${id}`;
    const response = await fetch(contactsPath, {
      method: "DELETE",
    });

    if (!response.ok) {
      throw new Error("Вы не получили запрос в fetchContacts");
    }

    dispatch(removeContact(id));
  } catch (error) {
    return rejectWithValue(error.message);
  }
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
