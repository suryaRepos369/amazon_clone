import { configureStore, createStore, applyMiddleware } from "@reduxjs/toolkit";
import rootReducer from "./rootReducer";
import logger from "redux-logger";
import { composeWithDevTools } from "redux-devtools-extension";

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(logger))
);

// const unsubscribe = store.subscribe(() => {
//   console.log("Updated state", store.getState());
// });
// unsubscribe();

export default store;
