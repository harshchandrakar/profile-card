import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  status: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setTrue(state, action) {
      state.status = true;
    },
    setFalse(state, action) {
      state.status = false;
    },
  },
});

export const authAction = authSlice.actions;
export default authSlice;
