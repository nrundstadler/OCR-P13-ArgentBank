import "./assets/styles/index.scss";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store";
import { router } from "./router";
import ProfileDataFetcher from "./components/ProfileDataFetcher/ProfileDataFetcher";

/**
 * Application entry point
 * Sets up the React application with Redux store and router
 */
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <ProfileDataFetcher /> {/* Fetches user profile data when authenticated */}
      <RouterProvider router={router} />
    </Provider>
  </StrictMode>
);
