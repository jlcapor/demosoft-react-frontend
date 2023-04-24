import { createSlice } from "@reduxjs/toolkit";
import { login, logout } from "../../actions/authActions";

const userToken = JSON.parse(localStorage.getItem("userToken"));

const initialState = {
  status: "idle", //'idle' | 'loading' | 'succeeded' | 'failed'
  user: userToken,
  error: false,
  errorMessage: "",
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    clearState: (state) => {
      state.status = "idle";
      state.error = false;
      state.errorMessage = '';
      return state
    },
  },
  extraReducers(builder) {
    builder
      .addCase(login.pending, (state) => {
        state.status = "loading";
      })
      .addCase(login.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.user = action.payload.user;
      })
      .addCase(login.rejected, (state, action) => {
        state.status = "failed";
        state.error = true;
        state.errorMessage = action.payload;
      })
      .addCase(logout.fulfilled, (state) => {
        state.user = null;
      });
  },
});

export const authSelector = (state) => state.auth;
export const getUserInfo = (state) => state.auth.user;
export const { clearState } = authSlice.actions;
const { reducer } = authSlice;
export default reducer;
