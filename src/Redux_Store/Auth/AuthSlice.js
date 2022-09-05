import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "Auth",
  initialState: {
    islogged: false,
  },
  reducers: {
    login(state) {
      state.islogged = true;
    },
    logout(state) {
      state.islogged = false;
    },
  },
});

export const authActions = authSlice.actions;
export default authSlice.reducer;
