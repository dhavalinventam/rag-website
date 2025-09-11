import styles from "./cta-section.module.scss";

const CTASection = () => {
  return (
    <section className={styles.ctaSection}>
      <div className="container">
        <div className={styles.ctaCard}>
          <div className={styles.bottomGlow}></div>
          <div className={styles.abstractLines}>
            <div className={styles.line + ' ' + styles.line1}></div>
            <div className={styles.line + ' ' + styles.line2}></div>
            <div className={styles.line + ' ' + styles.line3}></div>
            <div className={styles.line + ' ' + styles.line4}></div>
          </div>
          <div className={styles.ctaContent}>
            <h3>Ready to automate your growth?</h3>
            <p>
              AI-powered automation tools to streamline your business operations.
            </p>
            <div className={styles.ctaActions}>
              <a href="#contact" className={styles.primaryButton}>
                <span>Contact For Demo</span>
                <div className={styles.buttonIcon}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                    <path d="M13 7L18 12L13 17M6 12H18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
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

export default CTASection;
