import styles from "./n8n-flow-cta.module.scss";

const N8nFlowCTA = () => {
  return (
    <section className={styles.n8nFlowSection}>

      <div className="container">
        <div className={styles.contentWrapper}>
          {/* Left Side - Content */}
          <div className={styles.contentSection}>
            <div className={styles.badge}>
              <span>n8n Workflow</span>
            </div>
            
            <h2 className={styles.title}>
              Automate your business 
              <p> processes with <span className={styles.highlight}> n8n workflows</span></p>
            </h2>
            
            <p className={styles.subtitle}>
              Connect your favorite tools and services to create powerful automated workflows. 
              From simple data transfers to complex business logic, n8n makes automation accessible to everyone.
            </p>

            <div className={styles.ctaButtons}>
              <a href="#contact" className={styles.primaryButton}>
                <span>Start Building Workflows</span>
                <div className={styles.buttonIcon}>
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path d="M6 4L10 8L6 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default N8nFlowCTA;
