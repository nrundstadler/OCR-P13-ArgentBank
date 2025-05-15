/**
 * Configuration for API requests with authentication
 */

import { fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { logout } from "../auth/authSlice";

/**
 * Adds authentication token to request headers if user is logged in
 *
 * @param {Object} headers - HTTP headers for the request
 * @param {Object} param1 - Object containing getState function
 * @returns {Object} Updated headers with auth token if available
 */
const prepareAuthHeaders = (headers, { getState }) => {
  const isAuthenticated = getState().auth.isAuthenticated;
  const token = getState().auth.token;
  if (isAuthenticated && token) {
    headers.set("authorization", `Bearer ${token}`);
  }
  return headers;
};

/**
 * Base query configuration for all API requests
 */
const baseQuery = fetchBaseQuery({
  baseUrl: "http://localhost:3001/api/v1",
  prepareHeaders: prepareAuthHeaders,
});

/**
 * Enhanced query function that checks response status codes
 *
 * If the API returns a 401 error (unauthorized),
 * this function calls the logout action to clean up auth data
 *
 * @param {Object} args - Query arguments
 * @param {Object} api - RTK Query API object
 * @param {Object} extraOptions - Additional options
 * @returns {Promise} The query result
 */
export const baseQueryWithTokenCheck = async (args, api, extraOptions) => {
  // Execute the API request
  const result = await baseQuery(args, api, extraOptions);

  // If token is invalid or expired (401 error)
  if (result.error && result.error.status === 401) {
    api.dispatch(logout());
  }

  return result;
};
