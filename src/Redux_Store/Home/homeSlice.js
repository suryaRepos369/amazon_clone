import { createSlice } from "@reduxjs/toolkit";

const homeSlice = createSlice({
  name: "Home",
  initialState: {
    showHome: false,
  },
  reducers: {
    showDressComp(state) {
      state.showDressComponent = true;
    },
  },
});

export const dressActions = homeSlice.actions;
export default homeSlice.reducer;
