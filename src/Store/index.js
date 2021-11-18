import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./Slices/user-slice";
import authSlice from "./Slices/authenticationSlice";
const store = configureStore({
  reducer: { userDetail: userSlice.reducer, auth: authSlice.reducer },
});

export default store;
