import { createSlice, createAsyncThunk, unwrapResult } from "@reduxjs/toolkit";
import axios from "axios";
import { getApi, postApi } from "./../../http/apiServices/Services";

//if (typeof token == "undefined");
//localStorage.clear();
//typeof localStorage.getItem("rrtfaca") !== "undefined",
var v = false;

if (localStorage.hasOwnProperty("rrtfaca")) {
  if (localStorage.getItem("rrtfaca") !== "undefined") v = true;
}

const initialState = {
  token: localStorage.getItem("rrtfaca"),
  islogged: false,
  loading: false,
  userData: [],
  error: null,
  logoutLoading: false,
  logoutError: false,
  logoutMessage: false,
};

export const fetchUserData = createAsyncThunk("post/fetchUserData", async ({ email, password, user }, { rejectWithValue, fulfillWithValue }) => {
  console.log("email, password, user:", email, password, user);
  let url = user ? "http://localhost:3030/users/login" : "http://localhost:3030/users/signup";

  try {
    const response = await axios.post(url, {
      email,
      password,
    });
    return fulfillWithValue(response);
  } catch (error) {
    return rejectWithValue(error);
  }
});

const authSlice = createSlice({
  name: "Auth",
  initialState,
  reducers: {
    login(state) {
      state.islogged = true;
    },
    logout(state, action) {
      const { islogged, error, loading, message } = action.payload;
      state.logoutLoading = loading;
      state.logoutError = error;
      state.logoutMessage = message;
      state.islogged = islogged;
    },
    check(state) {
      console.log("all the store variables*********");
      console.log("loading:", state.loading);
      console.log("error:", state.error);
      console.log("userData:", state.userData);
      console.log("logoutLoading:", state.logoutLoading);
      console.log("logoutError:", state.logoutError);
      console.log("logoutMessage:", state.logoutMessage);
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchUserData.pending, (state) => {
      state.loading = true;
      state.UserData = [];
      state.error = null;
    });
    builder.addCase(fetchUserData.fulfilled, (state, action) => {
      // console.log("promise fulfilled", action.payload.status);
      state.loading = false;
      if (action.payload.status === 404) {
        state.islogged = false;
        state.UserData = [];
        state.error = "Page not found";
      } else {
        state.islogged = true;

        state.UserData = action.payload;
        // console.log("action.payload:", action.payload.data);
        localStorage.setItem("rrtfaca", action.payload.data.TOKEN);
        state.token = action.payload.data.TOKEN;
        //console.log("action:", action);
        state.error = null;
      }
    });
    builder.addCase(fetchUserData.rejected, (state, action) => {
      state.loading = false;
      state.UserData = [];
      console.log(action.payload);
      if (action.payload.response.status === 0) {
        state.error = action.payload.message;
        console.log("action.payload.message:", action.payload.message);
      } else state.error = action.payload.response.data;
    });
  },
});

export const authActions = authSlice.actions;
export default authSlice.reducer;

export const logoutServer = () => async (dispatch) => {
  dispatch(authActions.check());
  dispatch(
    authActions.logout({
      islogged: true,
      error: null,
      loading: true,
      message: null,
    })
  );
  try {
    let url = "http://localhost:3030/users/logout";
    let token = localStorage.getItem("rrtfaca");
    let response = await axios.get(url, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    dispatch(authActions.logout({ islogged: false, error: null, loading: false, message: "Logged out successfully" }));
  } catch (error) {
    console.log("error:", error);
    dispatch(authActions.logout({ islogged: true, error: error.response.data, loading: false, message: null }));
  }
};
