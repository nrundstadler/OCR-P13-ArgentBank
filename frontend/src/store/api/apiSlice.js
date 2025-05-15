/**
 * API Slice Configuration using RTK Query
 */

import { createApi } from "@reduxjs/toolkit/query/react";
import { baseQueryWithTokenCheck } from "./baseQuery";

/**
 * Main API slice that handles all API requests to the backend
 */
export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: baseQueryWithTokenCheck,

  endpoints: builder => ({
    login: builder.mutation({
      query: ({ email, password }) => ({
        url: "/user/login",
        method: "POST",
        body: { email, password },
      }),
      invalidatesTags: ["Profile"],
    }),
    getUserProfile: builder.query({
      query: () => ({
        url: "/user/profile",
        method: "POST",
      }),
      providesTags: ["Profile"],
    }),
    updateUserProfile: builder.mutation({
      query: ({ firstName, lastName }) => ({
        url: "/user/profile",
        method: "PUT",
        body: { firstName, lastName },
      }),
      // Only invalidate cache if the request succeeds
      invalidatesTags: (result, error) => (error ? [] : ["Profile"]),
    }),
  }),
});

// Export hooks for using the API endpoints
export const { useLoginMutation, useGetUserProfileQuery, useUpdateUserProfileMutation } = apiSlice;
