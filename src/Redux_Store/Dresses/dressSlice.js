import { createSlice } from "@reduxjs/toolkit";

const DressSlice = createSlice({
  name: "Dress",
  initialState: {
    showDressComponent: false,
    dressDetail: [],
    count: 0,
  },
  reducers: {
    showDressComp(state) {
      state.showDressComponent = !state.showDressComponent;
    },
    addDress(state, action) {
      state.dressDetail.push(action.payload);
      state.count++;
    },
  },
});

export const dressActions = DressSlice.actions;
export default DressSlice.reducer;
