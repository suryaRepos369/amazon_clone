import { combineReducers } from "redux";
import DressReducer from "./Dresses/dressSlice";
import homeSlice from "./Home/homeSlice";
const rootReducer = combineReducers({
  dress: DressReducer,
  home: homeSlice,
});

export default rootReducer;
