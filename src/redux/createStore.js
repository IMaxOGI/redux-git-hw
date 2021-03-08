/* eslint-disable import/no-anonymous-default-export */
import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./rootReducer";

export default () => {
  return configureStore({
    reducer: rootReducer,
    devTools: true,
  });
};
