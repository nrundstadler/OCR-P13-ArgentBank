import styles from "./Features.module.scss";

function Features({ children }) {
  return (
    <section className={styles.features}>
      <h2 className="sr-only">Features</h2>
      {children}
    </section>
  );
}

export default Features;
