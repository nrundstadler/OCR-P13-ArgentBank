import { createSlice } from "@reduxjs/toolkit";
import { api } from "./api";

const storedToken = localStorage.getItem("authToken");

const initialState = {
  token: storedToken || null,
  isAuthenticated: storedToken !== null,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logout: state => {
      state.token = null;
      state.isAuthenticated = false;
      localStorage.removeItem("authToken");
    },
  },
  extraReducers: builder => {
    builder.addMatcher(api.endpoints.login.matchFulfilled, (state, { payload, meta }) => {
      if (!payload?.body?.token) {
        console.error("Authentication error: Token is missing in the response");
        return;
      }

      state.token = payload.body.token;
      state.isAuthenticated = true;

      const { rememberMe } = meta.arg.originalArgs;
      if (rememberMe) {
        localStorage.setItem("authToken", payload.body.token);
      }
    });
  },
});
