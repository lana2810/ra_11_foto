import { configureStore } from "@reduxjs/toolkit";
import fotoReducer from "./fotoReducer";

const store = configureStore({
  reducer: {
    foto: fotoReducer,
  },
});

export default store;
