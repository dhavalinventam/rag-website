import Link from "next/link";
import styles from "./cta.module.scss";

const FinalCTA = () => {
  return (
    <section className={styles.ctaSection}>
      <div className="container">
        <div className={styles.wrap}>
          <h2 className={styles.title}>Ready to build your RAG application?</h2>
          <p className={styles.subtitle}>
            Get started in minutes and experience the power of Retrieval-Augmented Generation
            without the complexity.
          </p>

          <div className={styles.actions}>
            <Link
              href={{ pathname: "/", hash: "get-started" }}
              className={`btn btn-gradient-primary rounded-pill ${styles.primaryBtn}`}
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;
