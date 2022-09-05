import { combineReducers } from "redux";
import DressReducer from "./Dresses/dressSlice";
import homeSlice from "./Home/homeSlice";
import authSlice from "./Auth/AuthSlice";
const rootReducer = combineReducers({
  dress: DressReducer,
  home: homeSlice,
  auth: authSlice,
});

export default rootReducer;
