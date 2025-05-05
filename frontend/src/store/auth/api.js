import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const prepareAuthHeaders = (headers, { getState }) => {
  const isAuthenticated = getState().auth.isAuthenticated;
  const token = getState().auth.token;
  if (isAuthenticated && token) {
    headers.set("authorization", `Bearer ${token}`);
  }
  return headers;
};

const baseQueryWithTokenCheck = async (args, api, extraOptions) => {
  const baseQuery = fetchBaseQuery({
    baseUrl: "http://localhost:3001/api/v1",
    prepareHeaders: prepareAuthHeaders,
  });

  const result = await baseQuery(args, api, extraOptions);

  if (result.error && result.error.status === 401) {
    api.dispatch({ type: "auth/logout" });
  }

  return result;
};

export const api = createApi({
  reducerPath: "api",
  baseQuery: baseQueryWithTokenCheck,

  endpoints: builder => ({
    login: builder.mutation({
      query: ({ email, password }) => ({
        url: "/user/login",
        method: "POST",
        body: { email, password },
      }),
      invalidatesTags: ["User"],
    }),
    getUserProfile: builder.query({
      query: () => ({
        url: "/user/profile",
        method: "POST",
      }),
      providesTags: ["User"],
    }),
  }),
});

export const { useLoginMutation, useGetUserProfileQuery } = api;
