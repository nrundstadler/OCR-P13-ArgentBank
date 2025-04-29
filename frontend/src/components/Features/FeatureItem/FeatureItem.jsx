import styles from "./FeatureItem.module.scss";

function FeatureItem({ icon, title, description, altText }) {
  return (
    <div className={styles.featureItem}>
      <img src={icon} alt={altText} />
      <h3 className={styles.featureItemTitle}>{title}</h3>
      <p>{description}</p>
    </div>
  );
}

export default FeatureItem;
