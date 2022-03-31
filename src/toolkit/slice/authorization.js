import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchUser = createAsyncThunk("authorization/fetchUser", async (_, { rejectWithValue }) => {
  try {
    const usersPath = "https://jsonplaceholder.typicode.com/users";
    const response = await fetch(usersPath);

    if (!response.ok) {
      throw new Error("Вы не получили запрос в fetchUser");
    }
    return response.json();
  } catch (error) {
    return rejectWithValue(error);
  }
});

const initialState = {
  form: {
    userName: null,
    email: null,
  },
  isAuth: false,
  users: [],
};

const authorization = createSlice({
  name: "authorization",
  initialState,
  reducers: {
    getAccess(state) {
      state.isAuth = true;
    },
  },

  extraReducers: {
    [fetchUser.pending]: (state, action) => {
      //Когда идет загрузка данных.
    },
    [fetchUser.fulfilled]: (state, action) => {
      state.users = action.payload;
      console.log(state.users);
    },
    [fetchUser.rejected]: (state, action) => {
      //Обработка ошибок
    },
  },
});

export const { getAccess } = authorization.actions;
export default authorization.reducer;
