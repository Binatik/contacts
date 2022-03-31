import { createAsyncThunk, createSlice, current } from "@reduxjs/toolkit";

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
  form: {},
  isAuth: false,
  users: [],
};

const authorization = createSlice({
  name: "authorization",
  initialState,
  reducers: {
    setValueForm(state, action) {
      const { value, key } = action.payload;
      state.form = {
        ...state.form,
        [key]: value,
      };
    },

    getAccess(state, action) {
      const { name, email } = state.form;
      const [connect, error] = ["Вы успешно авторизовались и теперь вам доступны контакты.", "Не верные данные"];
      const isAuth = state.users.some(user => user.name === name && user.email === email);
      state.isAuth = isAuth;
      state.isAuth ? alert(connect) : alert(error);
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

export const { getAccess, setValueForm } = authorization.actions;
export default authorization.reducer;
