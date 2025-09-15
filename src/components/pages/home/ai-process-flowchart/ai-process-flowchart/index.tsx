"use client";
import { useEffect, useRef, useState } from "react";
import styles from "./ai-process-flowchart.module.scss";

const AIProcessFlowchart = () => {
  const svgRef = useRef<SVGSVGElement>(null);
  const [visibleSteps, setVisibleSteps] = useState<number[]>([]);
  const [visibleConnections, setVisibleConnections] = useState<number[]>([]);

  const processSteps = [
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
      position: { x: 50, y: 50 }
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
      position: { x: 200, y: 120 }
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
      position: { x: 350, y: 190 }
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
      position: { x: 500, y: 260 }
    },
    {
      id: "enterprise-security",
      title: "Enterprise Security",
      description: "Role-based access, audit trails, encryption, and SSO for enterprise needs.",
      icon: (
        <g>
          {/* Building with shield icon */}
          <rect x="6" y="10" width="12" height="8" fill="none" stroke="currentColor" strokeWidth="1.5"/>
          <rect x="8" y="12" width="2" height="2" fill="currentColor"/>
          <rect x="11" y="12" width="2" height="2" fill="currentColor"/>
          <rect x="14" y="12" width="2" height="2" fill="currentColor"/>
          <rect x="8" y="15" width="2" height="2" fill="currentColor"/>
          <rect x="11" y="15" width="2" height="2" fill="currentColor"/>
          <rect x="14" y="15" width="2" height="2" fill="currentColor"/>
          <path d="M12 4 L10 6 L12 8 L14 6 Z" fill="none" stroke="currentColor" strokeWidth="1.5"/>
        </g>
      ),
      position: { x: 350, y: 380 }
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
      position: { x: 650, y: 380 }
    }
  ];

  // Animation effect
  useEffect(() => {
    const animateSteps = () => {
      // Reset animation
      setVisibleSteps([]);
      setVisibleConnections([]);
      
      // Animate each step with 2-second delay
      processSteps.forEach((_, index) => {
        setTimeout(() => {
          setVisibleSteps(prev => [...prev, index]);
          
          // Show connection line after step appears (except for first step)
          if (index > 0) {
            setTimeout(() => {
              setVisibleConnections(prev => [...prev, index - 1]);
            }, 500); // Small delay after step appears
          }
        }, index * 2000); // 2-second delay between steps
      });
    };

    // Start animation after component mounts
    const timer = setTimeout(animateSteps, 500);
    
    return () => clearTimeout(timer);
  }, []);

  // Function to restart animation
  const restartAnimation = () => {
    setVisibleSteps([]);
    setVisibleConnections([]);
    
    setTimeout(() => {
      processSteps.forEach((_, index) => {
        setTimeout(() => {
          setVisibleSteps(prev => [...prev, index]);
          
          if (index > 0) {
            setTimeout(() => {
              setVisibleConnections(prev => [...prev, index - 1]);
            }, 500);
          }
        }, index * 2000);
      });
    }, 100);
  };

  const generatePath = (from: { x: number; y: number }, to: { x: number; y: number }, isBranch = false) => {
    const midX = (from.x + to.x) / 2;
    const midY = (from.y + to.y) / 2;
    
    if (isBranch) {
      // Create curved branch paths
      const controlOffset = 50;
      return `M ${from.x} ${from.y} Q ${midX} ${from.y + controlOffset} ${to.x} ${to.y}`;
    }
    
    // Create smooth curved path for main flow
    const controlOffset = 30;
    return `M ${from.x} ${from.y} Q ${midX + controlOffset} ${midY} ${to.x} ${to.y}`;
  };

  return (
    <section className={styles.aiProcessSection}>
      <div className={styles.container}>
        {/* Header */}
        <div className={styles.header}>
          <h2 className={styles.title}>
            AI Development Process
          </h2>
          <p className={styles.subtitle}>
            From data to deployment, our streamlined process gets you to production faster
          </p>
          <button 
            className={styles.restartButton}
            onClick={restartAnimation}
            aria-label="Restart animation"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8"/>
              <path d="M21 3v5h-5"/>
              <path d="M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16"/>
              <path d="M3 21v-5h5"/>
            </svg>
            Replay Animation
          </button>
        </div>

        {/* Flowchart */}
        <div className={styles.flowchartContainer}>
          <svg
            ref={svgRef}
            className={styles.flowchartSvg}
            viewBox="0 0 800 500"
            preserveAspectRatio="xMidYMid meet"
          >
            {/* Main flow connections */}
            {visibleConnections.includes(0) && (
              <path
                d={generatePath(processSteps[0].position, processSteps[1].position)}
                className={`${styles.connectionLine} ${styles.animateIn}`}
              />
            )}
            {visibleConnections.includes(1) && (
              <path
                d={generatePath(processSteps[1].position, processSteps[2].position)}
                className={`${styles.connectionLine} ${styles.animateIn}`}
              />
            )}
            {visibleConnections.includes(2) && (
              <path
                d={generatePath(processSteps[2].position, processSteps[3].position)}
                className={`${styles.connectionLine} ${styles.animateIn}`}
              />
            )}
            
            {/* Branch connections */}
            {visibleConnections.includes(3) && (
              <path
                d={generatePath(processSteps[3].position, processSteps[4].position, true)}
                className={`${styles.branchLine} ${styles.animateIn}`}
              />
            )}
            {visibleConnections.includes(4) && (
              <path
                d={generatePath(processSteps[3].position, processSteps[5].position, true)}
                className={`${styles.branchLine} ${styles.animateIn}`}
              />
            )}

            {/* Process steps */}
            {processSteps.map((step, index) => (
              <g 
                key={step.id} 
                className={`${styles.stepGroup} ${visibleSteps.includes(index) ? styles.stepVisible : styles.stepHidden}`}
              >
                {/* Step circle */}
                <circle
                  cx={step.position.x}
                  cy={step.position.y}
                  r="20"
                  className={styles.stepCircle}
                />
                
                {/* Step icon */}
                <g
                  transform={`translate(${step.position.x - 12}, ${step.position.y - 12})`}
                  className={styles.stepIcon}
                >
                  {step.icon}
                </g>
              </g>
            ))}
          </svg>

          {/* Step descriptions */}
          <div className={styles.stepDescriptions}>
            {processSteps.map((step, index) => (
              <div
                key={step.id}
                className={`${styles.stepDescription} ${visibleSteps.includes(index) ? styles.stepVisible : styles.stepHidden}`}
                style={{
                  left: `${(step.position.x / 800) * 100}%`,
                  top: `${(step.position.y / 500) * 100 + 5}%`,
                }}
              >
                <h3 className={styles.stepTitle}>{step.title}</h3>
                <p className={styles.stepText}>{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AIProcessFlowchart;
