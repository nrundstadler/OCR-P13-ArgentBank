/**
 * Redux Store Configuration
 *
 * @module store
 */

import { configureStore } from "@reduxjs/toolkit";
import { apiSlice } from "./api/apiSlice";
import { authSlice } from "./auth/authSlice";
import { profileSlice } from "./profile/profileSlice";

const store = configureStore({
  reducer: {
    auth: authSlice.reducer,
    profile: profileSlice.reducer,
    [apiSlice.reducerPath]: apiSlice.reducer,
  },

  // Add RTK Query middleware required for API requests
  middleware: getDefaultMiddleware => getDefaultMiddleware().concat(apiSlice.middleware),
});

export default store;
