import Features from "../../components/Features/Features";
import FeatureItem from "../../components/Features/FeatureItem/FeatureItem";
import styles from "./Homepage.module.scss";
import iconChat from "../../assets/images/icon-chat.png";
import iconMoney from "../../assets/images/icon-money.png";
import iconSecurity from "../../assets/images/icon-security.png";

function Homepage() {
  return (
    <main>
      <div className={styles.hero}>
        <section className={styles.heroContent}>
          <h2 className="sr-only">Promoted Content</h2>
          <p className={styles.subtitle}>No fees.</p>
          <p className={styles.subtitle}>No minimum deposit.</p>
          <p className={styles.subtitle}>High interest rates.</p>
          <p className={styles.text}>Open a savings account with Argent Bank today!</p>
        </section>
      </div>
      <Features>
        <FeatureItem
          icon={iconChat}
          altText="Chat Icon"
          title="You are our #1 priority"
          description="Need to talk to a representative? You can get in touch through our 24/7 chat or through a phone call in less than 5 minutes."
        />
        <FeatureItem
          icon={iconMoney}
          altText="Money Icon"
          title="More savings means higher rates"
          description="The more you save with us, the higher your interest rate will be!"
        />
        <FeatureItem
          icon={iconSecurity}
          altText="Security Icon"
          title="Security you can trust"
          description="We use top of the line encryption to make sure your data and money is always safe."
        />
      </Features>
    </main>
  );
}

export default Homepage;
