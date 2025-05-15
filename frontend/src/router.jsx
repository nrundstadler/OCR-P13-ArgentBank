import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Homepage from "./pages/Homepage/Homepage";
import SignIn from "./pages/SignIn/SignIn";
import Profile from "./pages/Profile/Profile";
import ProtectedRoute from "./components/ProtectedRoute/ProtectedRoute";

/**
 * Application Router Configuration
 *
 * Creates a browser router with the following routes:
 * - "/" (root): Main application layout wrapped by App component
 *   - Index route: Homepage component displaying the landing page
 *   - "/sign-in": Authentication page for user login
 *   - "/profile": Protected user profile page that requires authentication
 *
 * The profile route is wrapped in a ProtectedRoute component
 * that checks if the user is authenticated.
 */
export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <Homepage />,
      },
      {
        path: "/sign-in",
        element: <SignIn />,
      },
      {
        path: "/profile",
        element: (
          <ProtectedRoute>
            <Profile />
          </ProtectedRoute>
        ),
      },
    ],
  },
]);
