import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectIsAuthenticated } from "../../store/auth/authSlice";

/**
 * Checks if user is logged in:
 * - If yes: shows the page
 * - If no: redirects to login
 *
 * @param {Object} props
 * @param {React.ReactNode} props.children - Content to show when logged in
 * @returns Either the content or redirect to login
 */
function ProtectedRoute({ children }) {
  // Check if user is logged in
  const isAuthenticated = useSelector(selectIsAuthenticated);

  // Not logged in? Go to login page
  if (!isAuthenticated) {
    return <Navigate to="/sign-in" replace />;
  }

  // Logged in? Show content
  return children;
}

export default ProtectedRoute;
