import { createAsyncThunk, createSlice, current } from "@reduxjs/toolkit";
import { getRequest } from "@src/toolkit/fetch";

const initialState = {
  users: [],
  form: {},
  isAuth: false,
  activeUser: null,
  error: null,
};

export const fetchUsers = createAsyncThunk("registeredUsers/fetchUsers", async (_, { rejectWithValue }) => {
  return getRequest({
    path: `https://jsonplaceholder.typicode.com/users`,
    reject: rejectWithValue,
  });
});

const registeredUsers = createSlice({
  name: "registeredUsers",
  initialState,
  reducers: {
    setValueRegisteredUsers(state, action) {
      const key = action.payload['1'];
      const value  = action.payload['0'];

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

export const { getAccess, setValueRegisteredUsers } = registeredUsers.actions;
export default registeredUsers.reducer;
