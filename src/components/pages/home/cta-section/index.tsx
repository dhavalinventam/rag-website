import styles from "./cta-section.module.scss";

const CTASection = () => {
  return (
    <section className={styles.ctaSection}>

      <div className="container">
        <div className={styles.ctaCard}>
          <div className={styles.ctaContent}>
            <h3>Ready to Transform Your Industry?</h3>
            <p>
              Join thousands of companies already leveraging AI to revolutionize their operations
            </p>
            <a href="#waitlist-sec" className="btn btn-gradient-primary rounded-pill">
              <span>Get Early Access</span>
              <i className="bi bi-rocket-takeoff"></i>
            </a>
          </div>
          <div className={styles.ctaVisual}>
            <div className={styles.animatedCube}></div>
            <div className={styles.animatedSphere}></div>
            <div className={styles.animatedRings}>
              <div className={styles.ring}></div>
              <div className={styles.ring}></div>
              <div className={styles.ring}></div>
            </div>
            <div className={styles.floatingParticles}>
              <div className={styles.particle}></div>
              <div className={styles.particle}></div>
              <div className={styles.particle}></div>
              <div className={styles.particle}></div>
              <div className={styles.particle}></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
