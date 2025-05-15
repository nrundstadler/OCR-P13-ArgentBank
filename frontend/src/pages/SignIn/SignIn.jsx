import { useState } from "react";
import { useNavigate, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useDocumentTitle } from "../../hooks/useDocumentTitle";
import { useLoginMutation } from "../../store/api/apiSlice";
import { selectIsAuthenticated } from "../../store/auth/authSlice";
import styles from "./SignIn.module.scss";

function SignIn() {
  useDocumentTitle("Sign In");

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const [login, { isLoading }] = useLoginMutation();

  const navigate = useNavigate();

  const isAuthenticated = useSelector(selectIsAuthenticated);

  const handleSubmit = async e => {
    e.preventDefault();
    setErrorMessage("");

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setErrorMessage("Please enter a valid email address");
      return;
    }

    if (password.length < 4) {
      setErrorMessage("Password must be at least 4 characters long");
      return;
    }

    try {
      await login({ email, password, rememberMe }).unwrap();
      navigate("/profile", { replace: true });
    } catch (error) {
      console.error("Connection error:", error);

      switch (error.status) {
        case "FETCH_ERROR":
          setErrorMessage("The server is unavailable. Please check your connection or try again later.");
          break;
        case 400:
          setErrorMessage("The email and password combination is incorrect.");
          break;
        case 500:
          setErrorMessage("The server encountered a problem, please try again later.");
          break;
        default:
          setErrorMessage("An error occurred.");
      }
    }
  };

  if (isAuthenticated) {
    return <Navigate to="/profile" />;
  }

  return (
    <main className="bg-dark">
      <section className={styles.signIn}>
        <i className={`fa fa-user-circle ${styles.signInIcon}`}></i>
        <h1>Sign In</h1>
        <form onSubmit={handleSubmit}>
          <div className={styles.inputWrapper}>
            <label htmlFor="username">Username</label>
            <input
              type="text"
              id="username"
              autoComplete="username"
              value={email}
              onChange={e => setEmail(e.target.value.trim())}
              required
            />
          </div>
          <div className={styles.inputWrapper}>
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              autoComplete="current-password"
              value={password}
              onChange={e => setPassword(e.target.value.trim())}
              required
            />
          </div>
          <div className={styles.inputRemember}>
            <input type="checkbox" id="rememberMe" onChange={e => setRememberMe(e.target.checked)} />
            <label htmlFor="rememberMe">Remember me</label>
          </div>
          <button type="submit" className={styles.signInButton} disabled={isLoading}>
            {isLoading ? "Signing in..." : "Sign In"}
          </button>
          <div className={styles.errorMessage} role="alert" aria-live="assertive">
            {errorMessage}
          </div>
        </form>
      </section>
    </main>
  );
}

export default SignIn;
