import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
//import { getApi, postApi } from "./../../http/apiServices/Services";
import { AxiosClient } from "./../../http/axios/axiosClient";

import { loginClient } from "../../http/axios/axiosClient";
import { isJwtExpired } from "jwt-check-expiration";

var v = false;

if (localStorage.hasOwnProperty("rrtfaca")) {
  let token = localStorage.getItem("rrtfaca");
  if (token !== "undefined") {
    v = !isJwtExpired(token);
    console.log("isJwtExpired(token):", isJwtExpired(token));
  }
}

//console.log("token :", localStorage.getItem("rrtfaca"));
const initialState = {
  token: localStorage.getItem("rrtfaca"),
  islogged: v,
  loading: false,
  userData: [],
  error: null,
  logoutLoading: false,
  logoutError: false,
  logoutMessage: false,
};

export const fetchUserData = createAsyncThunk(
  "post/fetchUserData",
  async ({ email, password, rememberLogin, user }, { rejectWithValue, fulfillWithValue }) => {
    // console.log("email, password, user,RememberLogin:", email, password, user, rememberLogin);
    localStorage.setItem("keepLogin", rememberLogin);
    let url = user ? "/users/login" : "/users/signup";

    try {
      const response = await loginClient.post(url, {
        email,
        password,
      });
      console.log("response:", response);

      return fulfillWithValue(response, rememberLogin);
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

const authSlice = createSlice({
  name: "Auth",
  initialState,
  reducers: {
    keepLogin(state, action) {
      state.keepLogin = action.payload.rememberLogin;
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
      console.log("promise fulfilled", action.payload);
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
  // dispatch(authActions.check());
  dispatch(
    authActions.logout({
      islogged: true,
      error: null,
      loading: true,
      message: null,
    })
  );
  try {
    let url = "/users/logout";
    let token = localStorage.getItem("rrtfaca");

    await AxiosClient.get(url, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    if (!localStorage.getItem("keepLogin")) {
      console.log("Deleting local storage");
      localStorage.clear();
    }

    dispatch(authActions.logout({ islogged: false, error: null, loading: false, message: "Logged out successfully" }));
    return 1;
  } catch (error) {
    console.log("error:", Object.keys(error), Object.values(error));
    let err = error.response.data;
    if (error.message === "Network Error") {
      console.log("network error Please check your connection ");
      err = error.message;
    }

    dispatch(authActions.logout({ islogged: true, error: err, loading: false, message: null }));
    return 0;
  }
};
export const authData = (state) => {
  return { token: state.token, auth: state.islogged };
};
