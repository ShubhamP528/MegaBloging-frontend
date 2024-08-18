import { configureStore } from "@reduxjs/toolkit";
import auth from "./auth";

const store = configureStore({
  reducer: {
    //Define your reducers here
    auth: auth,
  },
});

export default store;
