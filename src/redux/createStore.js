/* eslint-disable import/no-anonymous-default-export */
import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./rootReducers";

export default () => {
  return configureStore({
    reducer: rootReducer,
    devTools: true,
  });
};
