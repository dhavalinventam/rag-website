import styles from "./n8n-flow-cta.module.scss";

const N8nFlowCTA = () => {
  return (
    <section className={styles.n8nFlowSection}>
      {/* Animated Background Elements */}
      <div className={styles.backgroundAnimation}>
        <div className={styles.floatingOrb}></div>
        <div className={styles.floatingOrb}></div>
        <div className={styles.floatingOrb}></div>
      </div>

      <div className="container">
        <div className={styles.contentWrapper}>
          {/* Left Side - Content */}
          <div className={styles.contentSection}>
            <div className={styles.badge}>
              <span>n8n Workflow</span>
            </div>
            
            <h2 className={styles.title}>
              Automate your business processes with
              <span className={styles.highlight}> n8n workflows</span>
            </h2>
            
            <p className={styles.subtitle}>
              Connect your favorite tools and services to create powerful automated workflows. 
              From simple data transfers to complex business logic, n8n makes automation accessible to everyone.
            </p>

            <div className={styles.featuresList}>
              <div className={styles.featureItem}>
                <div className={styles.featureIcon}>
                  <i className="bi bi-arrow-repeat"></i>
                </div>
                <div className={styles.featureContent}>
                  <h4>Visual Workflow Builder</h4>
                  <p>Drag and drop interface to create complex workflows without coding</p>
                </div>
              </div>
              
              <div className={styles.featureItem}>
                <div className={styles.featureIcon}>
                  <i className="bi bi-shield-check"></i>
                </div>
                <div className={styles.featureContent}>
                  <h4>Enterprise Security</h4>
                  <p>Self-hosted solution with full control over your data and processes</p>
                </div>
              </div>
              
              <div className={styles.featureItem}>
                <div className={styles.featureIcon}>
                  <i className="bi bi-lightning"></i>
                </div>
                <div className={styles.featureContent}>
                  <h4>Real-time Execution</h4>
                  <p>Trigger workflows instantly with webhooks, schedules, or manual execution</p>
                </div>
              </div>
            </div>

            <div className={styles.ctaButtons}>
              <button className={styles.primaryButton}>
                <span>Start Building Workflows</span>
                <i className="bi bi-arrow-right"></i>
              </button>
              <button className={styles.secondaryButton}>
                <i className="bi bi-play-circle"></i>
                <span>Watch Demo</span>
              </button>
            </div>
          </div>

          {/* Right Side - Visual Flow Diagram */}
          <div className={styles.visualSection}>
            <div className={styles.flowDiagram}>
              <div className={styles.flowNode} style={{ animationDelay: '0s' }}>
                <div className={styles.nodeIcon}>
                  <i className="bi bi-database"></i>
                </div>
                <span>Database</span>
              </div>
              
              <div className={styles.flowArrow}>
                <i className="bi bi-arrow-right"></i>
              </div>
              
              <div className={styles.flowNode} style={{ animationDelay: '0.2s' }}>
                <div className={styles.nodeIcon}>
                  <i className="bi bi-gear"></i>
                </div>
                <span>Process</span>
              </div>
              
              <div className={styles.flowArrow}>
                <i className="bi bi-arrow-right"></i>
              </div>
              
              <div className={styles.flowNode} style={{ animationDelay: '0.4s' }}>
                <div className={styles.nodeIcon}>
                  <i className="bi bi-envelope"></i>
                </div>
                <span>Email</span>
              </div>
              
              <div className={styles.flowArrow}>
                <i className="bi bi-arrow-right"></i>
              </div>
              
              <div className={styles.flowNode} style={{ animationDelay: '0.6s' }}>
                <div className={styles.nodeIcon}>
                  <i className="bi bi-graph-up"></i>
                </div>
                <span>Analytics</span>
              </div>
            </div>
            
            <div className={styles.flowGlow}></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default N8nFlowCTA;
