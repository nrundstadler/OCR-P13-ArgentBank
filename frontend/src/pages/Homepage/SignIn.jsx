import { useState } from "react";
import styles from "./SignIn.module.scss";

function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);

  const handleSubmit = e => {
    e.preventDefault();
    console.log("Email:", email);
    console.log("Password:", password);
    console.log("Remember Me:", rememberMe);
  };

  return (
    <main className="bg-dark">
      <section className={styles.signIn}>
        <i className={`fa fa-user-circle ${styles.signInIcon}`}></i>
        <h1>Sign In</h1>
        <form onSubmit={handleSubmit}>
          <div className={styles.inputWrapper}>
            <label htmlFor="username">Username</label>
            <input type="text" id="username" onChange={e => setEmail(e.target.value)} />
          </div>
          <div className={styles.inputWrapper}>
            <label htmlFor="password">Password</label>
            <input type="password" id="password" onChange={e => setPassword(e.target.value)} />
          </div>
          <div className={styles.inputRemember}>
            <input type="checkbox" id="rememberMe" onChange={e => setRememberMe(e.target.checked)} />
            <label htmlFor="rememberMe">Remember me</label>
          </div>
          <button type="submit" className={styles.signInButton}>
            Sign In
          </button>
        </form>
      </section>
    </main>
  );
}

export default SignIn;
