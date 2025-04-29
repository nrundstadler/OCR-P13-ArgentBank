import { configureStore } from "@reduxjs/toolkit";
import { authSlice } from "./auth/authSlice";
import { api } from "./auth/api";

const store = configureStore({
  reducer: {
    auth: authSlice.reducer,
    [api.reducerPath]: api.reducer,
  },
  middleware: getDefaultMiddleware => getDefaultMiddleware().concat(api.middleware),
});

export default store;
