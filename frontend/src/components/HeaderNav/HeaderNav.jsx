import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { selectIsAuthenticated, logout } from "../../store/auth/authSlice";
import { selectProfile } from "../../store/profile/profileSlice";
import styles from "./HeaderNav.module.scss";
import logo from "../../assets/images/argentBankLogo.png";

function HeaderNav() {
  const dispatch = useDispatch();

  const isAuthenticated = useSelector(selectIsAuthenticated);
  const { firstName } = useSelector(selectProfile);

  const handleSignOut = e => {
    e.preventDefault();
    dispatch(logout());
  };

  return (
    <header>
      <nav className={styles.mainNav}>
        <Link className={styles.mainNavLogo} to="/" aria-label="Argent Bank Home">
          <img src={logo} alt="" aria-hidden="true" />
          <h1 className="sr-only">Argent Bank</h1>
        </Link>
        {isAuthenticated ? (
          <div>
            <Link className={styles.mainNavItem} to="/profile">
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
