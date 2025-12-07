"use client";
import { useRef, useMemo } from "react";
import { motion } from "framer-motion";
import styles from "./ai-process-flowchart.module.scss";

const AIProcessFlowchart = () => {
  const svgRef = useRef<SVGSVGElement>(null);

  const processSteps = useMemo(() => [
    {
      id: "connect-data",
      title: "Connect Any Data Source",
      description: "Bring files, URLs, databases, and more. We handle chunking, embeddings, and storage.",
      icon: (
        <g>
          {/* Database server icon */}
          <rect x="8" y="12" width="8" height="6" rx="1" fill="none" stroke="currentColor" strokeWidth="1.5"/>
          <rect x="9" y="10" width="6" height="2" rx="0.5" fill="none" stroke="currentColor" strokeWidth="1.5"/>
          <rect x="10" y="8" width="4" height="2" rx="0.5" fill="none" stroke="currentColor" strokeWidth="1.5"/>
          <circle cx="12" cy="6" r="1" fill="currentColor"/>
          <path d="M10 6 L14 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
        </g>
      ),
      position: { x: 50, y: 80 }
    },
    {
      id: "ai-flexibility",
      title: "AI Model Flexibility",
      description: "Works with popular LLM providers and lets you switch anytime without vendor lock-in.",
      icon: (
        <g>
          {/* CPU/Microchip icon */}
          <rect x="6" y="6" width="12" height="12" rx="2" fill="none" stroke="currentColor" strokeWidth="1.5"/>
          <circle cx="12" cy="12" r="2" fill="none" stroke="currentColor" strokeWidth="1.5"/>
          <circle cx="12" cy="12" r="0.5" fill="currentColor"/>
          <circle cx="8" cy="8" r="0.5" fill="currentColor"/>
          <circle cx="16" cy="8" r="0.5" fill="currentColor"/>
          <circle cx="8" cy="16" r="0.5" fill="currentColor"/>
          <circle cx="16" cy="16" r="0.5" fill="currentColor"/>
        </g>
      ),
      position: { x: 335, y: 120 }
    },
    {
      id: "clean-apis",
      title: "Clean SDKs and APIs",
      description: "Clean SDKs and APIs to integrate quickly with your stack and CI/CD workflows.",
      icon: (
        <g>
          {/* Code/API icon */}
          <rect x="6" y="8" width="12" height="8" rx="1" fill="none" stroke="currentColor" strokeWidth="1.5"/>
          <path d="M8 10 L10 10 M8 12 L12 12 M8 14 L10 14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
          <circle cx="14" cy="10" r="1" fill="none" stroke="currentColor" strokeWidth="1.5"/>
          <path d="M13 10 L15 10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
        </g>
      ),
      position: { x: 615, y: 160 }
    },
    {
      id: "deploy-minutes",
      title: "Deploy in Minutes",
      description: "From prototype to production fast with prebuilt flows and infra-friendly defaults.",
      icon: (
        <g>
          {/* Rocket icon */}
          <path d="M12 4 L8 8 L12 12 L16 8 Z" fill="none" stroke="currentColor" strokeWidth="1.5"/>
          <path d="M10 8 L14 8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
          <path d="M12 12 L12 16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
          <path d="M8 16 L16 16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
          <path d="M9 18 L15 18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
        </g>
      ),
      position: { x: 900, y: 200 }
    },
    {
      id: "enterprise-security",
      title: "Enterprise Security",
      description: "Role-based access, encryption, and SSO for enterprise needs.",
      icon: (
        <g>
          {/* Shield icon */}
          <path d="M12 2 L8 4 L8 8 C8 12 12 16 12 16 C12 16 16 12 16 8 L16 4 Z" fill="none" stroke="currentColor" strokeWidth="1.5"/>
          <path d="M10 8 L12 10 L14 8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </g>
      ),
      position: { x: 615, y: 400 }
    },
    {
      id: "analytics-monitoring",
      title: "Analytics & Monitoring",
      description: "Insights and observability to track usage, performance, and quality.",
      icon: (
        <g>
          {/* Bar chart icon */}
          <rect x="8" y="14" width="2" height="4" fill="currentColor"/>
          <rect x="11" y="10" width="2" height="8" fill="currentColor"/>
          <rect x="14" y="12" width="2" height="6" fill="currentColor"/>
          <path d="M7 8 L17 8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
          <path d="M7 8 L7 18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
        </g>
      ),
      position: { x: 900, y: 400 }
    }
  ], []);

  // Framer Motion variants for step cards
  const cardVariants: any = {
    hidden: { 
      opacity: 0, 
      scale: 0.8,
      y: 20
    },
    visible: (index: number) => ({
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        delay: index * 0.2,
        duration: 0.5,
      },
    }),
  };

  // Container animation
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };



  return (
    <section className={styles.aiProcessSection}>
      <div className={styles.container}>
        {/* Header */}
        <motion.div 
          className={styles.header}
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <motion.h2 
            className={styles.title}
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Everything you need to
            <span className={styles.highlight}> build RAG applications</span>
          </motion.h2>
          <motion.p 
            className={styles.subtitle}
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            From data ingestion to model deployment, we've got you covered with enterprise-grade tools that scale with your needs.
          </motion.p>
        </motion.div>

        {/* Flowchart */}
        <div className={styles.flowchartContainer}>
          <svg
            ref={svgRef}
            className={styles.flowchartSvg}
            viewBox="0 0 1000 320"
            preserveAspectRatio="xMidYMid meet"
          >
            {/* Process steps - removed white circles and icons */}
          </svg>

          {/* Step descriptions as cards - positioned to replace white circles */}
          <motion.div 
            className={styles.stepDescriptions}
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
          >
            {processSteps.map((step, index) => (
              <motion.div
                key={step.id}
                className={styles.stepCard}
                custom={index}
                variants={cardVariants}
                style={{
                  left: `${(step.position.x / 1000) * 100}%`,
                  top: `${(step.position.y / 400) * 100}%`,
                }}
                whileHover={{ 
                  scale: 1.05,
                  transition: { duration: 0.2 }
                }}
              >
                <motion.div 
                  className={styles.cardIcon}
                  initial={{ rotate: -180, opacity: 0 }}
                  whileInView={{ rotate: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ 
                    delay: index * 0.2 + 0.3,
                    duration: 0.5,
                    type: "spring",
                    stiffness: 200
                  }}
                >
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    {step.icon}
                  </svg>
                </motion.div>
                <div className={styles.cardContent}>
                  <motion.h3 
                    className={styles.cardTitle}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.2 + 0.4, duration: 0.4 }}
                  >
                    {step.title}
                  </motion.h3>
                  <motion.p 
                    className={styles.cardDescription}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.2 + 0.5, duration: 0.4 }}
                  >
                    {step.description}
                  </motion.p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AIProcessFlowchart;
