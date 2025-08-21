import styles from "./use-cases.module.scss";

const UseCases = () => {
  return (
    <section className={styles.useCasesSection}>
      <div className="container">
        <div className="text-center mb-4 mb-md-5">
          <h2 className={`${styles.title} fw-bold`}>Reimagining Industry Workflows</h2>
          <p className={`${styles.subtitle} mt-2`}>
            Discover how AI is transforming operations across different sectors, delivering
            unprecedented efficiency and innovation
          </p>
        </div>

        <div className="row g-3 g-md-4">
          {[
            { icon: "bi-credit-card-2-front", title: "Financial Services", desc: "Transform risk assessment, fraud detection, and customer service with AI-powered insights and automation." },
            { icon: "bi-heart-pulse", title: "Healthcare", desc: "Enhance patient care and streamline operations with intelligent medical data analysis and automation." },
            { icon: "bi-gear-wide-connected", title: "Manufacturing", desc: "Optimize production processes and predict maintenance needs with advanced AI solutions." },
            { icon: "bi-bag", title: "Retail", desc: "Deliver personalized shopping experiences and optimize inventory management with AI." },
            { icon: "bi-truck", title: "Logistics", desc: "Streamline supply chain operations and optimize route planning with intelligent automation." },
            { icon: "bi-shield-check", title: "Insurance", desc: "Improve risk assessment and claims processing with AI-powered analysis and automation." },
            { icon: "bi-airplane", title: "Travel & Hospitality", desc: "Enhance guest experiences and optimize operations with intelligent service solutions." },
            { icon: "bi-briefcase", title: "Professional Services", desc: "Transform consulting and advisory services with AI-powered insights and automation." },
          ].map((c) => (
            <div className="col-12 col-md-6 col-lg-3" key={c.title}>
              <div className={styles.caseCard}>
                <i className={`bi ${c.icon} ${styles.icon}`} aria-hidden></i>
                <h3 className={`h6 mb-2 ${styles.caseTitle}`}>{c.title}</h3>
                <p className={`mb-0 ${styles.caseDesc}`}>{c.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default UseCases;


