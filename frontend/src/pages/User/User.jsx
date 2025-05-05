import { useGetUserProfileQuery } from "../../store/auth/api";
import { useSelector } from "react-redux";

function User() {
  const isAuthenticated = useSelector(state => state.auth.isAuthenticated);

  const { data, isLoading, isError, error } = useGetUserProfileQuery(undefined, {
    skip: !isAuthenticated,
  });

  const userProfile = data?.body || {};
  const { id, email, firstName, lastName } = userProfile;

  return (
    <main className="bg-dark">
      <h1>
        Bienvenue :
        <br />
        {id} {email} {firstName} {lastName}
      </h1>
    </main>
  );
}

export default User;
