import { Outlet } from "react-router-dom";

import styles from "./App.module.scss";
import HeaderNav from "./components/HeaderNav/HeaderNav";
import Footer from "./components/Footer/Footer";

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
