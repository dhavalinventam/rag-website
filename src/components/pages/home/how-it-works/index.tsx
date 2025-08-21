import styles from "./how.module.scss";

const HowItWorks = () => {
  return (
    <section className={styles.howSection}>
      <div className="container">
        <div className="text-center mb-4 mb-md-5">
          <h2 className={`${styles.title} fw-bold`}>How it works in 3 simple steps</h2>
          <p className={`${styles.subtitle} mt-2`}>
            Connect data, choose your model, and deploy — all in minutes.
          </p>
        </div>

        <div className={`row g-4 justify-content-center position-relative ${styles.stepsRow}`}>
          {/* Step 1 */}
          <div className="col-12 col-md-4">
            <div className={styles.step}>
              <div className={styles.iconWrap} aria-hidden="true">
                <i className={`bi bi-database-up ${styles.icon}`} aria-hidden></i>
              </div>
              <h3 className={`h5 mb-2 ${styles.stepTitle}`}>Connect Data</h3>
              <p className={`mb-0 ${styles.stepDesc}`}>
                Bring your files, URLs, or databases. We handle ingestion, chunking, and storage.
              </p>
            </div>
          </div>

          {/* Step 2 */}
          <div className="col-12 col-md-4">
            <div className={styles.step}>
              <div className={styles.iconWrap} aria-hidden="true">
                <i className={`bi bi-cpu ${styles.icon}`} aria-hidden></i>
              </div>
              <h3 className={`h5 mb-2 ${styles.stepTitle}`}>Choose Model</h3>
              <p className={`mb-0 ${styles.stepDesc}`}>
                Select from multiple AI models and switch anytime without vendor lock-in.
              </p>
            </div>
          </div>

          {/* Step 3 */}
          <div className="col-12 col-md-4">
            <div className={styles.step}>
              <div className={styles.iconWrap} aria-hidden="true">
                <i className={`bi bi-cloud-arrow-up ${styles.icon}`} aria-hidden></i>
              </div>
              <h3 className={`h5 mb-2 ${styles.stepTitle}`}>Deploy</h3>
              <p className={`mb-0 ${styles.stepDesc}`}>
                Go from prototype to production in minutes with enterprise-ready infrastructure.
              </p>
            </div>
          </div>

          {/* connectors removed as requested */}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
