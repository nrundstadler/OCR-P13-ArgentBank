import { Outlet } from "react-router-dom";
import styles from "./App.module.scss";
import HeaderNav from "./components/HeaderNav/HeaderNav";
import Footer from "./components/Footer/Footer";

/**
 * Main application layout component
 *
 * Provides the common layout structure for all pages including:
 * - HeaderNav: Navigation header that appears on all pages
 * - Outlet: Placeholder where child route components will be rendered
 * - Footer: Footer component that appears on all pages
 *
 * @returns {JSX.Element} The application layout structure
 */
function App() {
  return (
    <div className={`${styles.appContainer}`}>
      <HeaderNav />
      <Outlet />
      <Footer />
    </div>
  );
}

export default App;
