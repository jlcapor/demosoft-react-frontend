import { createAsyncThunk } from "@reduxjs/toolkit";
import authService from "@/services/Auth.service";

export const login = createAsyncThunk("auth/login", async (user, thunkAPI) => {
    try {
      const data = await authService.login(user);
      return { user: data };
    } catch (error) {
      const message =
        (error.response && error.response.data && error.response.data.message) ||
        error.mensaje ||
        error.toString();
  
      return thunkAPI.rejectWithValue(message);
    }
  });
  
  export const logout = createAsyncThunk("auth/logout", async () => {
    authService.logout();
  });