import styles from "./n8n-flow-cta.module.scss";

const N8nFlowCTA = () => {
  return (
    <section className={styles.n8nFlowSection}>
      <div className="container">
        <div className={styles.contentWrapper}>
          {/* Header Content */}
          <div className={styles.headerSection}>
            <div className={styles.badge}>
              <span>n8n Workflow</span>
            </div>
            
            <h2 className="section-title">
              Automate your business 
              <p> processes with <span className="highlight"> n8n workflows</span></p>
            </h2>
            
            <p className="section-subtitle">
              Connect your favorite tools and services to create powerful automated workflows. 
              From simple data transfers to complex business logic, n8n makes automation accessible to everyone.
            </p>
          </div>

          {/* CTA Button */}
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

          {/* Flow Visualization */}
          <div className={styles.flowVisualization}>
            {/* Flow Lines Background */}
            <div className={styles.flowLines}>
              <svg className={styles.flowSVG} viewBox="0 0 1000 400" preserveAspectRatio="xMidYMid meet">
                {/* Input to Central - Multiple converging lines */}
                <path 
                  className={styles.flowPath} 
                  d="M80 80 Q400 120 450 180" 
                  stroke="url(#inputGradient)" 
                  strokeWidth="3" 
                  fill="none"
                />
                <path 
                  className={styles.flowPath} 
                  d="M80 120 Q400 140 450 180" 
                  stroke="url(#inputGradient)" 
                  strokeWidth="3" 
                  fill="none"
                />
                <path 
                  className={styles.flowPath} 
                  d="M80 160 Q400 160 450 180" 
                  stroke="url(#inputGradient)" 
                  strokeWidth="3" 
                  fill="none"
                />
                <path 
                  className={styles.flowPath} 
                  d="M80 200 Q400 180 450 180" 
                  stroke="url(#inputGradient)" 
                  strokeWidth="3" 
                  fill="none"
                />
                <path 
                  className={styles.flowPath} 
                  d="M80 240 Q400 200 450 180" 
                  stroke="url(#inputGradient)" 
                  strokeWidth="3" 
                  fill="none"
                />
                <path 
                  className={styles.flowPath} 
                  d="M80 280 Q400 220 450 180" 
                  stroke="url(#inputGradient)" 
                  strokeWidth="3" 
                  fill="none"
                />
                <path 
                  className={styles.flowPath} 
                  d="M80 320 Q400 240 450 180" 
                  stroke="url(#inputGradient)" 
                  strokeWidth="3" 
                  fill="none"
                />
                <path 
                  className={styles.flowPath} 
                  d="M80 360 Q400 260 450 180" 
                  stroke="url(#inputGradient)" 
                  strokeWidth="3" 
                  fill="none"
                />
                
                {/* Central to Output - Multiple diverging lines */}
                <path 
                  className={styles.flowPath} 
                  d="M550 180 Q600 120 920 80" 
                  stroke="url(#outputGradient)" 
                  strokeWidth="3" 
                  fill="none"
                />
                <path 
                  className={styles.flowPath} 
                  d="M550 180 Q600 140 920 120" 
                  stroke="url(#outputGradient)" 
                  strokeWidth="3" 
                  fill="none"
                />
                <path 
                  className={styles.flowPath} 
                  d="M550 180 Q600 160 920 160" 
                  stroke="url(#outputGradient)" 
                  strokeWidth="3" 
                  fill="none"
                />
                <path 
                  className={styles.flowPath} 
                  d="M550 180 Q600 180 920 200" 
                  stroke="url(#outputGradient)" 
                  strokeWidth="3" 
                  fill="none"
                />
                <path 
                  className={styles.flowPath} 
                  d="M550 180 Q600 200 920 240" 
                  stroke="url(#outputGradient)" 
                  strokeWidth="3" 
                  fill="none"
                />
                <path 
                  className={styles.flowPath} 
                  d="M550 180 Q600 220 920 280" 
                  stroke="url(#outputGradient)" 
                  strokeWidth="3" 
                  fill="none"
                />
                <path 
                  className={styles.flowPath} 
                  d="M550 180 Q600 240 920 320" 
                  stroke="url(#outputGradient)" 
                  strokeWidth="3" 
                  fill="none"
                />
                <path 
                  className={styles.flowPath} 
                  d="M550 180 Q600 260 920 360" 
                  stroke="url(#outputGradient)" 
                  strokeWidth="3" 
                  fill="none"
                />
                
                {/* Gradients */}
                <defs>
                  <linearGradient id="inputGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#5da8ff" stopOpacity="0.4"/>
                    <stop offset="50%" stopColor="#a66bff" stopOpacity="0.6"/>
                    <stop offset="100%" stopColor="#5da8ff" stopOpacity="0.8"/>
                  </linearGradient>
                  <linearGradient id="outputGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#a66bff" stopOpacity="0.8"/>
                    <stop offset="50%" stopColor="#5da8ff" stopOpacity="0.6"/>
                    <stop offset="100%" stopColor="#a66bff" stopOpacity="0.4"/>
                  </linearGradient>
                </defs>
              </svg>
            </div>

            {/* Input Nodes */}
            <div className={styles.inputNodes}>
              <div className={styles.flowNode} data-type="input">
                <div className={styles.nodeIcon}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                    <path d="M8 4H6C4.89543 4 4 4.89543 4 6V18C4 19.1046 4.89543 20 6 20H18C19.1046 20 20 19.1046 20 18V16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M16 8L20 4L16 0" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M20 4H8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
              </div>
              
              <div className={styles.flowNode} data-type="input">
                <div className={styles.nodeIcon}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                    <path d="M4 4H20C21.1 4 22 4.9 22 6V18C22 19.1 21.1 20 20 20H4C2.9 20 2 19.1 2 18V6C2 4.9 2.9 4 4 4Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <polyline points="22,6 12,13 2,6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
              </div>
              
              <div className={styles.flowNode} data-type="input">
                <div className={styles.nodeIcon}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                    <path d="M9 12L11 14L15 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
              </div>
            </div>

            {/* Central Processing Node */}
            <div className={styles.centralNode}>
              <div className={styles.processingIcon}>
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none">
                  <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M12 1V3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M12 21V23" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M4.22 4.22L5.64 5.64" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M18.36 18.36L19.78 19.78" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M1 12H3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M21 12H23" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M4.22 19.78L5.64 18.36" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M18.36 5.64L19.78 4.22" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <div className={styles.n8nBranding}>
                <div className={styles.lightningIcon}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                    <path d="M13 2L3 14H12L11 22L21 10H12L13 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <div className={styles.brandText}>
                  <div className={styles.brandName}>n8n</div>
                  <div className={styles.brandSubtext}>
                    <div>Automation</div>
                    <div>anything</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Output Nodes */}
            <div className={styles.outputNodes}>
              <div className={styles.flowNode} data-type="output">
                <div className={styles.nodeIcon}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                    <path d="M21 16V8C20.9996 7.64927 20.9071 7.30481 20.7315 7.00116C20.556 6.69751 20.3037 6.44536 20 6.27L13 2.27C12.696 2.09446 12.3511 2.00205 12 2.00205C11.6489 2.00205 11.304 2.09446 11 2.27L4 6.27C3.69626 6.44536 3.44398 6.69751 3.26846 7.00116C3.09294 7.30481 3.00036 7.64927 3 8V16C3.00036 16.3507 3.09294 16.6952 3.26846 16.9988C3.44398 17.3025 3.69626 17.5546 4 17.73L11 21.73C11.304 21.9055 11.6489 21.9979 12 21.9979C12.3511 21.9979 12.696 21.9055 13 21.73L20 17.73C20.3037 17.5546 20.556 17.3025 20.7315 16.9988C20.9071 16.6952 20.9996 16.3507 21 16Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <polyline points="3.27,6.96 12,12.01 20.73,6.96" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <line x1="12" y1="22.08" x2="12" y2="12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
              </div>
              
              <div className={styles.flowNode} data-type="output">
                <div className={styles.nodeIcon}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                    <circle cx="11" cy="11" r="8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M21 21L16.65 16.65" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
              </div>
              
              <div className={styles.flowNode} data-type="output">
                <div className={styles.nodeIcon}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                    <path d="M20 21V19C20 17.9391 19.5786 16.9217 18.8284 16.1716C18.0783 15.4214 17.0609 15 16 15H8C6.93913 15 5.92172 15.4214 5.17157 16.1716C4.42143 16.9217 4 17.9391 4 19V21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <circle cx="12" cy="7" r="4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default N8nFlowCTA;
