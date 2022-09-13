import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  islogged: false,
  token: JSON.parse(localStorage.getItem("token")),
  loading: false,
  userData: [],
  error: "",
};

export const fetchUserData = createAsyncThunk(
  "post/fetchUserData",
  async ({ email, password }) => {
    console.log("inside thunk");
    //const { email, password } = data;
    console.log(" email, password:", email, password);

    const response = await axios.post(`http://localhost:3030/users/`, {
      email: email,
      password: password,
    });
    console.log(response);
    return response;
  }
);

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
