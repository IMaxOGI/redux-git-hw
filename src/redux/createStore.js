import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./rootReducer";

// eslint-disable-next-line import/no-anonymous-default-export
export default () => {
  return configureStore({
    reducer: rootReducer,
    devTools: true,
  });
};
