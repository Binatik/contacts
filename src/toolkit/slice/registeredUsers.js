import { createAsyncThunk, createSlice, current } from "@reduxjs/toolkit";

const initialState = {
  users: [],
  form: {},
  isAuth: true,
  activeUser: null,
  error: null,
};

export const fetchUsers = createAsyncThunk("registeredUsers/fetchUsers", async (_, { rejectWithValue }) => {
  try {
    const usersPath = "https://jsonplaceholder.typicode.com/users";
    const response = await fetch(usersPath);

    if (!response.ok) {
      throw new Error("Вы не получили запрос в fetchUser");
    }
    return response.json();
  } catch (error) {
    return rejectWithValue(error.message);
  }
});

const registeredUsers = createSlice({
  name: "registeredUsers",
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
      const activeUser = state.users.find(user => user.name === name && user.email === email);
      state.isAuth = !!activeUser;
      state.isAuth ? alert(connect) : alert(error);
      state.activeUser = activeUser;
    },
  },

  extraReducers: {
    [fetchUsers.pending]: (state, action) => {
      state.error = null;
      //Когда идет загрузка данных.
    },
    [fetchUsers.fulfilled]: (state, action) => {
      state.users = action.payload;
    },
    [fetchUsers.rejected]: (state, action) => {
      state.error = action.payload;
      //Обработка ошибок
    },
  },
});

export const { getAccess, setValueForm } = registeredUsers.actions;
export default registeredUsers.reducer;
