import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import userService from "@/services/User.service";

const initialState = {
  users: [],
  status: "idle",
  error: null,
};

export const fetchUsers = createAsyncThunk("users/fetchUsers", async () => {
  try {
    const response = await userService.getUsers();
    return response.data;
  } catch (error) {
    return error.message;
  }
});

export const saveNewUser = createAsyncThunk(
  "users/addNewUsers",
  async (initialUser) => {
    const response = await userService.createUser(initialUser);
    return response.data;
  }
);

export const updateUsers = createAsyncThunk(
  "users/updateUsers",
  async (initialUser) => {
    try {
      const response = await userService.updateUser(initialUser);
      return response.data;
    } catch (error) {
      return initialUser;
    }
  }
);

export const deleteUser = createAsyncThunk(
  "users/deleteUser",
  async (id) => {
    try {
      const response = await userService.deleteUser(id);
      return `${response?.status}: ${response?.statusText}`;
    } catch (error) {
      return error.message;
    }
  }
);

const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {},
  //https://www.youtube.com/watch?v=NqzdVN2tyvQ&t=11353s
  extraReducers(builder) {
    builder
      .addCase(fetchUsers.pending, (state, action) => {
        state.status = "loading";
        state.error = null;
      })
      .addCase(fetchUsers.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.users = state.users.concat(action.payload);
      })
      .addCase(fetchUsers.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })
      .addCase(saveNewUser.pending, (state, action) => {
        state.status = "pending";
      })
      .addCase(saveNewUser.fulfilled, (state, action) => {
        state.status = "idle";
        state.users = state.users.concat(action.payload);
      })
      .addCase(updateUsers.fulfilled, (state, action) => {
        const { id } = action.payload;
        const users = state.users.filter((user) => user.id !== id);
        state.users = [...users, action.payload];
      })
      .addCase(deleteUser.fulfilled, (state, action) => {
        const { id } = action.payload;
        const users = state.users.filter((user) => user.id !== id);
        state.users = users;
      });
  },
});

export const selectAllUsers = (state) => state.users.users;
export const getUsersStatus = (state) => state.users.status;
export const getUsersError = (state) => state.users.error;

export const selectUserById = (state, userId) =>
  state.users.users.find((user) => user.id === userId);
export default usersSlice.reducer;
