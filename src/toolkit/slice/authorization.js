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
    setValueName(state, action) {
      state.form.userName = action.payload;
    },
    setValueEmail(state, action) {
      state.form.email = action.payload;
    },
    getAccess(state, action) {
      const { userName, email } = state.form;
      const users = action.payload;
      const isAuth = users.some(user => user.name === userName && user.email === email);
      state.isAuth = isAuth;
      state.isAuth ? alert("Вы успешно авторизовались и теперь вам доступны контакты.") : alert("Не верные данные");
    },
  },

  extraReducers: {
    [fetchUser.pending]: (state, action) => {
      //Когда идет загрузка данных.
    },
    [fetchUser.fulfilled]: (state, action) => {
      state.users = action.payload;
    },
    [fetchUser.rejected]: (state, action) => {
      //Обработка ошибок
    },
  },
});

export const { getAccess, setValueName, setValueEmail } = authorization.actions;
export default authorization.reducer;
