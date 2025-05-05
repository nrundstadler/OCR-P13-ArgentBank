import { useState } from "react";
import { useNavigate, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useLoginMutation } from "../../store/auth/api";
import styles from "./SignIn.module.scss";

function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const [login, { isLoading }] = useLoginMutation();

  const navigate = useNavigate();

  const isAuthenticated = useSelector(state => state.auth.isAuthenticated);

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
      navigate("/user", { replace: true });
    } catch (error) {
      console.error("Erreur de connexion:", error);
      switch (error.status) {
        case 400:
          setErrorMessage("Incorrect email or password");
          break;
        case 500:
          setErrorMessage("The server encountered a problem, please try again later");
          break;
        default:
          setErrorMessage("An error occurred");
      }
    }
  };

  if (isAuthenticated) {
    return <Navigate to="/user" />;
  }

  return (
    <main className="bg-dark">
      <section className={styles.signIn}>
        <i className={`fa fa-user-circle ${styles.signInIcon}`}></i>
        <h1>Sign In</h1>
        <form onSubmit={handleSubmit}>
          <div className={styles.inputWrapper}>
            <label htmlFor="username">Username</label>
            <input type="text" id="username" value={email} onChange={e => setEmail(e.target.value.trim())} required />
          </div>
          <div className={styles.inputWrapper}>
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
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
