import { useSelector } from "react-redux";
import { useGetUserProfileQuery } from "../../store/api/apiSlice";
import { selectIsAuthenticated } from "../../store/auth/authSlice";

/**
 * This component is responsible for automatically fetching the user's profile data
 * when the user is authenticated. It doesn't display anything on the screen, but works
 * in the background to make sure the user's data is available throughout the app.
 *
 * @returns {null}
 */
function ProfileDataFetcher() {
  // Check authentication status from Redux store
  const isAuthenticated = useSelector(selectIsAuthenticated);

  // Execute the profile query only when user is authenticated
  useGetUserProfileQuery(undefined, {
    skip: !isAuthenticated,
  });

  return null;
}

export default ProfileDataFetcher;
