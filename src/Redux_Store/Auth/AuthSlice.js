import { createSlice, createAsyncThunk, unwrapResult } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  token: localStorage.getItem("rrtfaca"),
  islogged: localStorage.hasOwnProperty("rrtfaca"),
  loading: false,
  userData: [],
  error: "",
};
export const fetchUserData = createAsyncThunk(
  "post/fetchUserData",
  // () => {}
  async ({ email, password, user }, { rejectWithValue, fulfillWithValue }) => {
    // console.log("initial:", initial);
    let url = user
      ? "http://localhost:3030/users/login"
      : "http://localhost:3030/users/signup";

    try {
      const response = await axios.post(url, {
        email,
        password,
      });
      return fulfillWithValue(response);
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

const authSlice = createSlice({
  name: "Auth",
  initialState,
  reducers: {
    login(state) {
      state.islogged = true;
    },
    logout(state) {
      state.islogged = false;
      localStorage.clear();
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchUserData.pending, (state) => {
      state.loading = true;
      state.UserData = [];
      state.error = "";
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
        localStorage.setItem("rrtfaca", action.payload.data.TOKEN);
        state.token = action.payload.data.TOKEN;
        //console.log("action:", action);
        state.error = "";
      }
    });
    builder.addCase(fetchUserData.rejected, (state, action) => {
      state.loading = false;
      state.UserData = [];
      console.log(action.payload.response.data);
      state.error = action.payload.response.data;
    });
  },
});

// export const sendCartData = (cart) => {
//   return async (dispatch) => {
//     dispatch(
//       uiActions.showNotification({
//         status: 'pending',
//         title: 'Sending...',
//         message: 'Sending cart data!',
//       })
//     );

//     const sendRequest = async () => {
//       const response = await fetch(
//         'https://react-http-6b4a6.firebaseio.com/cart.json',
//         {
//           method: 'PUT',
//           body: JSON.stringify(cart),
//         }
//       );

//       if (!response.ok) {
//         throw new Error('Sending cart data failed.');
//       }
//     };

//     try {
//       await sendRequest();

//       dispatch(
//         uiActions.showNotification({
//           status: 'success',
//           title: 'Success!',
//           message: 'Sent cart data successfully!',
//         })
//       );
//     } catch (error) {
//       dispatch(
//         uiActions.showNotification({
//           status: 'error',
//           title: 'Error!',
//           message: 'Sending cart data failed!',
//         })
//       );
//     }
//   };
// };

export const authActions = authSlice.actions;
export default authSlice.reducer;
