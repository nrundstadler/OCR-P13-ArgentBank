import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useGetUserProfileQuery } from "../../store/auth/api";
import { logout } from "../../store/auth/authSlice";

import styles from "./HeaderNav.module.scss";
import logo from "../../assets/images/argentBankLogo.png";

function HeaderNav() {
  const isAuthenticated = useSelector(state => state.auth.isAuthenticated);
  const dispatch = useDispatch();

  const { data, isLoading, isError } = useGetUserProfileQuery(undefined, {
    skip: !isAuthenticated,
  });

  const firstName = data?.body?.firstName || "User";

  const handleSignOut = e => {
    e.preventDefault();
    dispatch(logout());
  };

  return (
    <header>
      <nav className={styles.mainNav}>
        <Link className={styles.mainNavLogo} to="/">
          <img src={logo} alt="Argent Bank Logo" aria-hidden="true" />
          <h1 className="sr-only">Argent Bank</h1>
        </Link>
        {isAuthenticated && !isLoading && !isError ? (
          <div>
            <Link className={styles.mainNavItem} to="/user">
              <i className="fa fa-user-circle"></i>
              {firstName}
            </Link>
            <Link className={styles.mainNavItem} to="/" onClick={handleSignOut}>
              <i className="fa fa-sign-out"></i>
              Sign Out
            </Link>
          </div>
        ) : (
          <div>
            <Link className={styles.mainNavItem} to="/sign-in">
              <i className="fa fa-user-circle"></i>
              Sign In
            </Link>
          </div>
        )}
      </nav>
    </header>
  );
}

export default HeaderNav;
