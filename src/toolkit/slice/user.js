import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchUser = createAsyncThunk("users/fetchUser", async (_, { rejectWithValue }) => {
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
  value: {
    name: null,
    email: null,
  },
  isAuth: false,
  data: [],
};

const user = createSlice({
  name: "user",
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
      state.data = action.payload;
      console.log(state.data);
    },
    [fetchUser.rejected]: (state, action) => {
      //Обработка ошибок
    },
  },
});

export const { getAccess } = user.actions;
export default user.reducer;
