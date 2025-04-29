import { Link } from "react-router-dom";

import styles from "./HeaderNav.module.scss";
import logo from "../../assets/images/argentBankLogo.png";

function HeaderNav() {
  return (
    <header>
      <nav className={styles.mainNav}>
        <Link className={styles.mainNavLogo} to="/">
          <img src={logo} alt="Argent Bank Logo" aria-hidden="true" />
          <h1 className="sr-only">Argent Bank</h1>
        </Link>
        <div>
          <Link className={styles.mainNavItem} to="/sign-in">
            <i className="fa fa-user-circle"></i>
            Sign In
          </Link>
        </div>
      </nav>
    </header>
  );
}

export default HeaderNav;
