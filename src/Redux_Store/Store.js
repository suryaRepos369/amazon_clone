import { configureStore, createStore, applyMiddleware } from "@reduxjs/toolkit";
import rootReducer from "./rootReducer";
import thunk from "redux-thunk";
import logger from "redux-logger";
import { composeWithDevTools } from "redux-devtools-extension";

// const store = createStore(
//   rootReducer,
//   composeWithDevTools(applyMiddleware(thunk))
// );

// const unsubscribe = store.subscribe(() => {
//   console.log("Updated state", store.getState());
// });
// unsubscribe();
const store = configureStore({
  reducer: rootReducer,
  middleware: [thunk],
});

export default store;
