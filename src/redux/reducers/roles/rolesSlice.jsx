import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import RoleService from "@/services/Roles.service";

const initialState = {
  rolesData: [],
  status: "idle",
  error: false,
};

export const fetchRoles = createAsyncThunk("roles/fetchRoles", async () => {
  const response = await RoleService.getAllRoles();
  return response.data;
});

const rolesSlice = createSlice({
  name: "roles",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchRoles.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(fetchRoles.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.rolesData = action.payload;
      })
      .addCase(fetchRoles.rejected, (state, action) => {
        state.status = "failed";
        state.error = true;
      });
  },
});

export const getSelectAllRoles = (state) => state.role.rolesData;
export const getStatus = (state) => state.role.status;
export const getError = (state) => state.role.error;
export default rolesSlice.reducer;
