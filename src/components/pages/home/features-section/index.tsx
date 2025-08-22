"use client";
import { useEffect, useRef } from "react";
import styles from "./features.module.scss";

const FeaturesSection = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    // Enhanced particle system
    const particles: Array<{
      x: number;
      y: number;
      vx: number;
      vy: number;
      size: number;
      opacity: number;
      color: string;
      type: 'glow' | 'sparkle' | 'trail';
    }> = [];

    // Create particles
    for (let i = 0; i < 60; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.4,
        vy: (Math.random() - 0.5) * 0.4,
        size: Math.random() * 2 + 0.5,
        opacity: Math.random() * 0.4 + 0.05,
        color: Math.random() > 0.85 ? "#5da8ff" : Math.random() > 0.7 ? "#a66bff" : Math.random() > 0.5 ? "#ff6b9d" : "#ffffff",
        type: Math.random() > 0.8 ? 'glow' : Math.random() > 0.5 ? 'sparkle' : 'trail'
      });
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.forEach((particle, index) => {
        particle.x += particle.vx;
        particle.y += particle.vy;

        // Wrap around edges
        if (particle.x < 0) particle.x = canvas.width;
        if (particle.x > canvas.width) particle.x = 0;
        if (particle.y < 0) particle.y = canvas.height;
        if (particle.y > canvas.height) particle.y = 0;

        // Draw particle based on type
        if (particle.type === 'glow') {
          // Glow effect
          const gradient = ctx.createRadialGradient(particle.x, particle.y, 0, particle.x, particle.y, particle.size * 3);
          gradient.addColorStop(0, particle.color);
          gradient.addColorStop(1, 'transparent');
          
          ctx.beginPath();
          ctx.arc(particle.x, particle.y, particle.size * 3, 0, Math.PI * 2);
          ctx.fillStyle = gradient;
          ctx.globalAlpha = particle.opacity * 0.3;
          ctx.fill();
        } else if (particle.type === 'sparkle') {
          // Sparkle effect
          ctx.beginPath();
          ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
          ctx.fillStyle = particle.color;
          ctx.globalAlpha = particle.opacity;
          ctx.fill();
          
          // Add sparkle lines
          ctx.beginPath();
          ctx.moveTo(particle.x - particle.size * 2, particle.y);
          ctx.lineTo(particle.x + particle.size * 2, particle.y);
          ctx.moveTo(particle.x, particle.y - particle.size * 2);
          ctx.lineTo(particle.x, particle.y + particle.size * 2);
          ctx.strokeStyle = particle.color;
          ctx.globalAlpha = particle.opacity * 0.5;
          ctx.lineWidth = 1;
          ctx.stroke();
        } else {
          // Trail effect
          ctx.beginPath();
          ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
          ctx.fillStyle = particle.color;
          ctx.globalAlpha = particle.opacity;
          ctx.fill();
        }

        // Connect nearby particles
        particles.forEach((otherParticle, otherIndex) => {
          if (index === otherIndex) return;
          const dx = particle.x - otherParticle.x;
          const dy = particle.y - otherParticle.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 60) {
            ctx.beginPath();
            ctx.moveTo(particle.x, particle.y);
            ctx.lineTo(otherParticle.x, otherParticle.y);
            ctx.strokeStyle = particle.color;
            ctx.globalAlpha = ((60 - distance) / 60) * 0.03;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        });
      });

      requestAnimationFrame(animate);
    };

    animate();

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const features = [
    {
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M10 13a5 5 0 0 1 0-7l1-1a5 5 0 1 1 7 7l-1 1" />
                  <path d="M14 11a5 5 0 0 1 0 7l-1 1a5 5 0 1 1-7-7l1-1" />
                </svg>
      ),
      title: "Connect Any Data Source",
      description: "Bring files, URLs, databases, and more. We handle chunking, embeddings, and storage.",
      gradient: "linear-gradient(135deg, #5da8ff 0%, #4a9eff 100%)",
      delay: "0s"
    },
    {
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 3l8 4-8 4-8-4 8-4z" />
                  <path d="M4 12l8 4 8-4" />
                  <path d="M4 16l8 4 8-4" />
                </svg>
      ),
      title: "AI Model Flexibility",
      description: "Works with popular LLM providers and lets you switch anytime without vendor lock-in.",
      gradient: "linear-gradient(135deg, #a66bff 0%, #8f5aff 100%)",
      delay: "0.1s"
    },
    {
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M8 8l-4 4 4 4" />
                  <path d="M16 8l4 4-4 4" />
                  <path d="M12 6l-2 12" />
                </svg>
      ),
      title: "Developer-Friendly APIs",
      description: "Clean SDKs and APIs to integrate quickly with your stack and CI/CD workflows.",
      gradient: "linear-gradient(135deg, #ff6b9d 0%, #ff5a8c 100%)",
      delay: "0.2s"
    },
    {
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M7 18a4.5 4.5 0 1 1 .9-8.9 5.5 5.5 0 0 1 10.6 1.6A3.5 3.5 0 0 1 17 18H7z" />
                  <path d="M16 16v-5" />
                  <path d="M13 14l3-3 3 3" />
                </svg>
      ),
      title: "Deploy in Minutes",
      description: "From prototype to production fast with prebuilt flows and infra-friendly defaults.",
      gradient: "linear-gradient(135deg, #22c55e 0%, #16a34a 100%)",
      delay: "0.3s"
    },
    {
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 3l7 4v5c0 5-3.5 8.5-7 9-3.5-.5-7-4-7-9V7l7-4z" />
                  <path d="M9 13v-2a3 3 0 1 1 6 0v2" />
                  <rect x="7" y="13" width="10" height="7" rx="2" />
                </svg>
      ),
      title: "Enterprise Security",
      description: "Role-based access, audit trails, encryption, and SSO for enterprise needs.",
      gradient: "linear-gradient(135deg, #f59e0b 0%, #d97706 100%)",
      delay: "0.4s"
    },
    {
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4 19h16" />
                  <rect x="6" y="12" width="3" height="5" rx="1" />
                  <rect x="11" y="8" width="3" height="9" rx="1" />
                  <rect x="16" y="14" width="3" height="3" rx="1" />
                </svg>
      ),
      title: "Analytics & Monitoring",
      description: "Insights and observability to track usage, performance, and quality.",
      gradient: "linear-gradient(135deg, #8b5cf6 0%, #7c3aed 100%)",
      delay: "0.5s"
    }
  ];

  return (
    <section className={styles.featuresSection}>
      {/* Animated background canvas */}
      <canvas ref={canvasRef} className={styles.backgroundCanvas} />
      
      {/* Floating geometric shapes */}
      <div className={styles.floatingShapes}>
        <div className={styles.shape} data-speed="0.3" style={{ left: '10%', top: '20%' }}>
          <div className={styles.shapeInner} />
        </div>
        <div className={styles.shape} data-speed="0.5" style={{ right: '15%', top: '40%' }}>
          <div className={styles.shapeInner} />
        </div>
        <div className={styles.shape} data-speed="0.7" style={{ left: '20%', bottom: '30%' }}>
          <div className={styles.shapeInner} />
        </div>
        <div className={styles.shape} data-speed="0.4" style={{ right: '25%', bottom: '20%' }}>
          <div className={styles.shapeInner} />
        </div>
      </div>

      {/* Gradient orbs */}
      <div className={styles.gradientOrbs}>
        <div className={styles.orb} style={{ background: 'radial-gradient(circle, rgba(93, 168, 255, 0.1) 0%, transparent 70%)', left: '5%', top: '10%' }} />
        <div className={styles.orb} style={{ background: 'radial-gradient(circle, rgba(166, 107, 255, 0.08) 0%, transparent 70%)', right: '10%', top: '60%' }} />
        <div className={styles.orb} style={{ background: 'radial-gradient(circle, rgba(255, 107, 157, 0.06) 0%, transparent 70%)', left: '15%', bottom: '10%' }} />
      </div>

      <div className={styles.container}>
        {/* Header Section */}
        <div className={styles.header}>
          <div className={styles.badge}>
            <span className={styles.badgeDot} />
            <span className={styles.badgeText}>Powerful Features</span>
              </div>
          
          <h2 className={styles.title}>
            <span className={styles.titleGradient}>Everything you need</span>
            <br />
            <span className={styles.titleSubtext}>to build RAG applications</span>
          </h2>
          
          <p className={styles.subtitle}>
            From data ingestion to model deployment, we&apos;ve got you covered with
            <span className={styles.highlight}> enterprise-grade tools</span> that scale with your needs.
          </p>
        </div>

        {/* Features Grid */}
        <div className={styles.featuresGrid}>
          {features.map((feature, index) => (
            <div 
              key={index} 
              className={styles.featureCard}
              style={{ animationDelay: feature.delay }}
            >
              <div className={styles.cardGlow} />
              <div className={styles.cardContent}>
                <div className={styles.iconContainer} style={{ background: feature.gradient }}>
                  <div className={styles.iconWrapper}>
                    {feature.icon}
                  </div>
                  <div className={styles.iconGlow} />
                </div>
                
                <div className={styles.cardBody}>
                  <h3 className={styles.featureTitle}>{feature.title}</h3>
                  <p className={styles.featureDescription}>{feature.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className={styles.bottomCTA}>
          <div className={styles.ctaGlow} />
          <div className={styles.ctaContent}>
            <h3 className={styles.ctaTitle}>
              Ready to <span className={styles.ctaGradient}>transform</span> your applications?
            </h3>
            <p className={styles.ctaSubtitle}>
              Join thousands of developers building the future with AI-powered retrieval
            </p>
            <div className={styles.ctaButtons}>
              <button className={styles.ctaPrimary}>
                <span>Start Building</span>
                <div className={styles.buttonGlow} />
              </button>
              <button className={styles.ctaSecondary}>
                <span>View Documentation</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
