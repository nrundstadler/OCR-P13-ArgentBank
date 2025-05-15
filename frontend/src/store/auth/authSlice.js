/**
 * Redux slice for managing authentication state
 */

import { createSlice } from "@reduxjs/toolkit";
import { apiSlice } from "../api/apiSlice";

// Retrieve stored token from browser storage
const storedToken = localStorage.getItem("authToken") || sessionStorage.getItem("authToken");

/**
 * Initial state for the auth slice
 * @type {Object}
 * @property {string|null} token - JWT authentication token
 * @property {boolean} isAuthenticated - Whether user is currently authenticated
 */
const initialState = {
  token: storedToken || null,
  isAuthenticated: storedToken !== null,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    /**
     * Logout action - clears authentication state and removes tokens from browser storage
     */
    logout: state => {
      state.token = null;
      state.isAuthenticated = false;
      localStorage.removeItem("authToken");
      sessionStorage.removeItem("authToken");
    },
  },
  extraReducers: builder => {
    // Handle successful login - update auth state when login mutation succeeds
    builder.addMatcher(apiSlice.endpoints.login.matchFulfilled, (state, { payload, meta }) => {
      if (!payload?.body?.token) {
        console.error("Authentication error: Token is missing in the response");
        return;
      }

      // Store token based on "remember me" preference
      const { rememberMe } = meta.arg.originalArgs;
      if (rememberMe) {
        localStorage.setItem("authToken", payload.body.token);
      } else {
        sessionStorage.setItem("authToken", payload.body.token);
      }

      state.token = payload.body.token;
      state.isAuthenticated = true;
    });
  },
});

export const { logout } = authSlice.actions;

/**
 * Selector to check if user is authenticated
 * @param {Object} state - The Redux store state
 * @returns {boolean} Authentication status
 */
export const selectIsAuthenticated = state => state.auth.isAuthenticated;
