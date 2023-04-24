import { configureStore } from "@reduxjs/toolkit";
import menuReducer from "./reducers/menu/menuSlice";
import authReduce from "./reducers/authentication/authSlice";

export default configureStore({
  reducer: {
    menu: menuReducer,
    auth: authReduce,
  },
});
