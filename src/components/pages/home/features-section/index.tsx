import styles from "./features.module.scss";

const FeaturesSection = () => {
  return (
    <section className={styles.featuresSection}>
      <div className="container">
        <div className="text-center mb-4 mb-md-5">
          <span className={styles.badge}>Features</span>
          <h2 className={styles.title + " mt-3"}>Everything you need to build RAG applications</h2>
          <p className={styles.subtitle + " mt-2"}>
            From data ingestion to model deployment, we&apos;ve got you covered with
            enterprise-grade tools.
          </p>
        </div>

        <div className="row g-3 g-md-4">
          <div className="col-12 col-md-4">
            <div className={`cardGlass h-100 ${styles.featureCard}`}>
              <div className={styles.iconWrap} aria-hidden="true">
                <svg
                  className={styles.icon}
                  width="28"
                  height="28"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                  focusable="false"
                >
                  <path d="M10 13a5 5 0 0 1 0-7l1-1a5 5 0 1 1 7 7l-1 1" />
                  <path d="M14 11a5 5 0 0 1 0 7l-1 1a5 5 0 1 1-7-7l1-1" />
                </svg>
              </div>
              <h3 className={`h5 mb-2 ${styles.featureTitle}`}>Connect Any Data Source</h3>
              <p className={`mb-0 ${styles.featureDesc}`}>
                Bring files, URLs, databases, and more. We handle chunking, embeddings, and storage.
              </p>
            </div>
          </div>

          <div className="col-12 col-md-4">
            <div className={`cardGlass h-100 ${styles.featureCard}`}>
              <div className={styles.iconWrap} aria-hidden="true">
                <svg
                  className={styles.icon}
                  width="28"
                  height="28"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                  focusable="false"
                >
                  <path d="M12 3l8 4-8 4-8-4 8-4z" />
                  <path d="M4 12l8 4 8-4" />
                  <path d="M4 16l8 4 8-4" />
                </svg>
              </div>
              <h3 className={`h5 mb-2 ${styles.featureTitle}`}>AI Model Flexibility</h3>
              <p className={`mb-0 ${styles.featureDesc}`}>
                Works with popular LLM providers and lets you switch anytime without vendor lock-in.
              </p>
            </div>
          </div>

          <div className="col-12 col-md-4">
            <div className={`cardGlass h-100 ${styles.featureCard}`}>
              <div className={styles.iconWrap} aria-hidden="true">
                <svg
                  className={styles.icon}
                  width="28"
                  height="28"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                  focusable="false"
                >
                  <path d="M8 8l-4 4 4 4" />
                  <path d="M16 8l4 4-4 4" />
                  <path d="M12 6l-2 12" />
                </svg>
              </div>
              <h3 className={`h5 mb-2 ${styles.featureTitle}`}>Developer-Friendly APIs</h3>
              <p className={`mb-0 ${styles.featureDesc}`}>
                Clean SDKs and APIs to integrate quickly with your stack and CI/CD workflows.
              </p>
            </div>
          </div>

          <div className="col-12 col-md-4">
            <div className={`cardGlass h-100 ${styles.featureCard}`}>
              <div className={styles.iconWrap} aria-hidden="true">
                <svg
                  className={styles.icon}
                  width="28"
                  height="28"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                  focusable="false"
                >
                  <path d="M7 18a4.5 4.5 0 1 1 .9-8.9 5.5 5.5 0 0 1 10.6 1.6A3.5 3.5 0 0 1 17 18H7z" />
                  <path d="M16 16v-5" />
                  <path d="M13 14l3-3 3 3" />
                </svg>
              </div>
              <h3 className={`h5 mb-2 ${styles.featureTitle}`}>Deploy in Minutes</h3>
              <p className={`mb-0 ${styles.featureDesc}`}>
                From prototype to production fast with prebuilt flows and infra-friendly defaults.
              </p>
            </div>
          </div>

          <div className="col-12 col-md-4">
            <div className={`cardGlass h-100 ${styles.featureCard}`}>
              <div className={styles.iconWrap} aria-hidden="true">
                <svg
                  className={styles.icon}
                  width="28"
                  height="28"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                  focusable="false"
                >
                  <path d="M12 3l7 4v5c0 5-3.5 8.5-7 9-3.5-.5-7-4-7-9V7l7-4z" />
                  <path d="M9 13v-2a3 3 0 1 1 6 0v2" />
                  <rect x="7" y="13" width="10" height="7" rx="2" />
                </svg>
              </div>
              <h3 className={`h5 mb-2 ${styles.featureTitle}`}>Enterprise Security</h3>
              <p className={`mb-0 ${styles.featureDesc}`}>
                Role-based access, audit trails, encryption, and SSO for enterprise needs.
              </p>
            </div>
          </div>

          <div className="col-12 col-md-4">
            <div className={`cardGlass h-100 ${styles.featureCard}`}>
              <div className={styles.iconWrap} aria-hidden="true">
                <svg
                  className={styles.icon}
                  width="28"
                  height="28"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                  focusable="false"
                >
                  <path d="M4 19h16" />
                  <rect x="6" y="12" width="3" height="5" rx="1" />
                  <rect x="11" y="8" width="3" height="9" rx="1" />
                  <rect x="16" y="14" width="3" height="3" rx="1" />
                </svg>
              </div>
              <h3 className={`h5 mb-2 ${styles.featureTitle}`}>Analytics &amp; Monitoring</h3>
              <p className={`mb-0 ${styles.featureDesc}`}>
                Insights and observability to track usage, performance, and quality.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
