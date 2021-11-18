import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  file: "",
  imageUrl:
    "https://github.com/OlgaKoplik/CodePen/blob/master/profile.jpg?raw=true",
  name: "",
  Dob: "",
  height: "",
  religion: "",
  active: "",
};
const userSlice = createSlice({
  name: "userDetails",
  initialState,
  reducers: {
    setName(state, action) {
      state.name = action.payload.name;
    },
    setDob(state, action) {
      state.Dob = action.payload.Dob;
    },
    setHeight(state, action) {
      state.height = action.payload.height;
    },
    setReligion(state, action) {
      state.religion = action.payload.religion;
    },
    setActive(state, action) {
      state.active = action.payload.active;
    },
    setProfile(state, action) {
      state.file = action.payload.file;
      state.imageUrl = action.payload.imageUrl;
    },
  },
});

export const userAction = userSlice.actions;
export default userSlice;
