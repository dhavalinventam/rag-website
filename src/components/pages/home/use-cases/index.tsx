import styles from "./use-cases.module.scss";

const UseCases = () => {
  const useCases = [
    {
      icon: "bi-credit-card-2-front",
      title: "Financial Services",
      desc: "Transform risk assessment, fraud detection, and customer service with AI-powered insights and automation.",
      gradient: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
      category: "Finance",
    },
    {
      icon: "bi-heart-pulse",
      title: "Healthcare",
      desc: "Enhance patient care and streamline operations with intelligent medical data analysis and automation.",
      gradient: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)",
      category: "Health",
    },
    {
      icon: "bi-gear-wide-connected",
      title: "Manufacturing",
      desc: "Optimize production processes and predict maintenance needs with advanced AI solutions.",
      gradient: "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)",
      category: "Industry",
    },
    {
      icon: "bi-bag",
      title: "Retail",
      desc: "Deliver personalized shopping experiences and optimize inventory management with AI.",
      gradient: "linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)",
      category: "Commerce",
    },
    {
      icon: "bi-truck",
      title: "Logistics",
      desc: "Streamline supply chain operations and optimize route planning with intelligent automation.",
      gradient: "linear-gradient(135deg, #fa709a 0%, #fee140 100%)",
      category: "Transport",
    },
    {
      icon: "bi-shield-check",
      title: "Insurance",
      desc: "Improve risk assessment and claims processing with AI-powered analysis and automation.",
      gradient: "linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)",
      category: "Security",
    },
    {
      icon: "bi-airplane",
      title: "Travel & Hospitality",
      desc: "Enhance guest experiences and optimize operations with intelligent service solutions.",
      gradient: "linear-gradient(135deg, #ffecd2 0%, #fcb69f 100%)",
      category: "Service",
    },
    {
      icon: "bi-briefcase",
      title: "Professional Services",
      desc: "Transform consulting and advisory services with AI-powered insights and automation.",
      gradient: "linear-gradient(135deg, #ff9a9e 0%, #fecfef 100%)",
      category: "Consulting",
    },
  ];

  return (
    <section className={styles.useCasesSection}>
      {/* Animated Background Elements */}
      <div className={styles.backgroundAnimation}>
        <div className={styles.floatingOrb}></div>
        <div className={styles.floatingOrb}></div>
        <div className={styles.floatingOrb}></div>
        <div className={styles.gridPattern}></div>
        <div className={styles.gradientOverlay}></div>
      </div>

      <div className="container">
        <div className={styles.headerSection}>
          <div className={styles.badge}>
            <span>Industry Solutions</span>
          </div>
          <h2 className={styles.title}>
            Reimagining Industry Workflows
            <span className={styles.highlight}> with AI</span>
          </h2>
          <p className={styles.subtitle}>
            Discover how AI is transforming operations across different sectors, delivering
            unprecedented efficiency and innovation
          </p>
        </div>

        <div className={styles.useCasesGrid}>
          {useCases.map((useCase, index) => (
            <div
              className={styles.useCaseCard}
              key={useCase.title}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className={styles.cardHeader}>
                <div className={styles.iconWrapper} style={{ background: useCase.gradient }}>
                  <i className={`bi ${useCase.icon}`}></i>
                </div>
                <div className={styles.categoryTag}>{useCase.category}</div>
              </div>

              <div className={styles.cardContent}>
                <h3 className={styles.cardTitle}>{useCase.title}</h3>
                <p className={styles.cardDesc}>{useCase.desc}</p>
              </div>

              <div className={styles.cardGlow} style={{ background: useCase.gradient }}></div>
            </div>
          ))}
        </div>

        <div className={styles.ctaSection}>
          <div className={styles.ctaCard}>
            <div className={styles.ctaContent}>
              <h3>Ready to Transform Your Industry?</h3>
              <p>
                Join thousands of companies already leveraging AI to revolutionize their operations
              </p>
              <button className={styles.ctaButton}>
                <span>Get Early Access</span>
                <i className="bi bi-rocket-takeoff"></i>
              </button>
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
      </div>
    </section>
  );
};

export default UseCases;
