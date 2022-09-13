import { combineReducers } from "redux";
import DressReducer from "./Dresses/dressSlice";
import authSlice from "./Auth/AuthSlice";
import cartSlice from "./Cart/CartSlice";
const rootReducer = combineReducers({
  dress: DressReducer,
  auth: authSlice,
  cart: cartSlice,
});

export default rootReducer;
