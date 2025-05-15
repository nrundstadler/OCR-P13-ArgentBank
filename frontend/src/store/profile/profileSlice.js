/**
 * Redux slice for managing user profile state
 */

import { createSlice } from "@reduxjs/toolkit";
import { apiSlice } from "../api/apiSlice";
import { logout } from "../auth/authSlice";

/**
 * Initial state for the profile slice
 * @type {Object}
 * @property {string} firstName - User's first name
 * @property {string} lastName - User's last name
 * @property {boolean} isLoading - Loading state during getUserProfile query execution
 * @property {string|null} fetchError - Error message from getUserProfile query failure
 * @property {boolean} isUpdating - Loading state during updateUserProfile mutation execution
 * @property {string|null} updateError - Error message from updateUserProfile mutation failure
 */
const initialState = {
  firstName: "",
  lastName: "",
  isLoading: false,
  fetchError: null,
  isUpdating: false,
  updateError: null,
};

export const profileSlice = createSlice({
  name: "profile",
  initialState,
  extraReducers: builder => {
    // Reset profile state on logout
    builder.addCase(logout, state => {
      Object.assign(state, initialState);
    });

    // --- Handle profile state during getUserProfile query lifecycle ---
    builder.addMatcher(apiSlice.endpoints.getUserProfile.matchPending, state => {
      state.isLoading = true;
      state.fetchError = null;
    });
    builder.addMatcher(apiSlice.endpoints.getUserProfile.matchFulfilled, (state, { payload }) => {
      state.isLoading = false;
      if (payload?.body) {
        state.firstName = payload.body?.firstName || "";
        state.lastName = payload.body?.lastName || "";
      }
    });
    builder.addMatcher(apiSlice.endpoints.getUserProfile.matchRejected, (state, { error }) => {
      state.isLoading = false;

      console.error("Error fetching user profile:", error.message);
      state.fetchError = error.message || "An error occurred while loading profile data";
    });

    // --- Handle profile state during updateUserProfile mutation lifecycle ---
    builder.addMatcher(apiSlice.endpoints.updateUserProfile.matchPending, state => {
      state.isUpdating = true;
      state.updateError = null;
    });

    builder.addMatcher(apiSlice.endpoints.updateUserProfile.matchFulfilled, (state, { payload }) => {
      if (payload?.body) {
        state.firstName = payload.body.firstName || "";
        state.lastName = payload.body.lastName || "";
      }

      state.isUpdating = false;
      state.updateError = null;
    });

    builder.addMatcher(apiSlice.endpoints.updateUserProfile.matchRejected, (state, { error }) => {
      state.isUpdating = false;
      console.error("Error updating user profile:", error.message);
      state.updateError = error.message || "Failed to update profile";
    });
  },
});

/**
 * Selector to access profile state from the Redux store
 * @param {Object} state - The Redux store state
 * @returns {Object} The profile state slice
 */
export const selectProfile = state => state.profile;
