"use client";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import styles from "./hero.module.scss";

const HeroSection = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isFocused, setIsFocused] = useState(false);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    // Particle system
    const particles: Array<{
      x: number;
      y: number;
      vx: number;
      vy: number;
      size: number;
      opacity: number;
      color: string;
    }> = [];

    // Create particles
    for (let i = 0; i < 150; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
        size: Math.random() * 2 + 1,
        opacity: Math.random() * 0.5 + 0.1,
        color: Math.random() > 0.7 ? "#5da8ff" : Math.random() > 0.4 ? "#a66bff" : "#ffffff",
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

        // Draw particle
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fillStyle = particle.color;
        ctx.globalAlpha = particle.opacity;
        ctx.fill();

        // Connect nearby particles
        particles.forEach((otherParticle, otherIndex) => {
          if (index === otherIndex) return;
          const dx = particle.x - otherParticle.x;
          const dy = particle.y - otherParticle.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 100) {
            ctx.beginPath();
            ctx.moveTo(particle.x, particle.y);
            ctx.lineTo(otherParticle.x, otherParticle.y);
            ctx.strokeStyle = particle.color;
            ctx.globalAlpha = ((100 - distance) / 100) * 0.1;
            ctx.lineWidth = 1;
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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || isLoading) return;

    setIsLoading(true);

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000));

    setIsSubmitted(true);
    setIsLoading(false);
    setEmail("");

    // Reset after 3 seconds
    setTimeout(() => setIsSubmitted(false), 3000);
  };

  return (
    <section className={styles.hero}>
      <canvas ref={canvasRef} className={styles.particleCanvas} />

      {/* Animated background elements */}
      <div className={styles.floatingElements}>
        <div className={styles.floatingCard} data-speed="0.5">
          <div className={styles.cardContent}>
            <div className={styles.cardIcon}>🚀</div>
            <span>Fast Integration</span>
          </div>
        </div>
        <div className={styles.floatingCard} data-speed="0.3">
          <div className={styles.cardContent}>
            <div className={styles.cardIcon}>⚡</div>
            <span>Real-time</span>
          </div>
        </div>
        <div className={styles.floatingCard} data-speed="0.7">
          <div className={styles.cardContent}>
            <div className={styles.cardIcon}>🔒</div>
            <span>Secure</span>
          </div>
        </div>
      </div>

      {/* Main content */}
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.badge}>
            <span className={styles.badgeText}>✨ Now in Beta</span>
          </div>

          <h1 className={styles.title}>
            <span className={styles.titleLine}>
              <span className={styles.gradientText}>Revolutionary</span>
            </span>
            <span className={styles.titleLine}>
              <span className={styles.typingText}>RAG Platform</span>
            </span>
          </h1>

          <p className={styles.subtitle}>
            Transform your applications with AI-powered retrieval.
            <br />
            <span className={styles.highlight}>Deploy in minutes, scale infinitely.</span>
          </p>

          <div className={styles.actions}>
            <Link href={{ pathname: "/", hash: "get-started" }} className={styles.primaryButton}>
              <span>Start Building</span>
              <div className={styles.buttonGlow} />
            </Link>
            <Link href={{ pathname: "/", hash: "demo" }} className={styles.secondaryButton}>
              <span>Watch Demo</span>
              <div className={styles.playIcon}>▶</div>
            </Link>
          </div>

          <div className={styles.trustBadges}>
            <div className={styles.trustItem}>
              <div className={styles.trustIcon}>🔐</div>
              <span>Enterprise Ready</span>
            </div>
            <div className={styles.trustItem}>
              <div className={styles.trustIcon}>⚡</div>
              <span>Lightning Fast</span>
            </div>
            <div className={styles.trustItem}>
              <div className={styles.trustIcon}>🌐</div>
              <span>Global CDN</span>
            </div>
          </div>

          {/* New Modern Join Waitlist Card */}
          <div className={styles.wishlistCard}>
            <div className={styles.wishlistGlow} />
            <div className={styles.wishlistContent}>
              <div className={styles.wishlistHeader}>
                <div className={styles.wishlistIconContainer}>
                  <div className={styles.wishlistIcon}>🎯</div>
                  <div className={styles.iconRing} />
                  <div className={styles.iconRing2} />
                </div>
                <h3 className={styles.wishlistTitle}>
                  <span className={styles.titleGradient}>Join the Waitlist</span>
                </h3>
                <p className={styles.wishlistSubtitle}>
                  Be the first to experience the future of AI-powered applications
                </p>
                {/* <div className={styles.benefitsList}>
                  <div className={styles.benefitItem}>
                    <span className={styles.benefitIcon}>🚀</span>
                    <span>Early Access</span>
                  </div>
                  <div className={styles.benefitItem}>
                    <span className={styles.benefitIcon}>💎</span>
                    <span>Exclusive Updates</span>
                  </div>
                  <div className={styles.benefitItem}>
                    <span className={styles.benefitIcon}>🎁</span>
                    <span>Special Perks</span>
                  </div>
                </div> */}
              </div>

              {!isSubmitted ? (
                <form onSubmit={handleSubmit} className={styles.wishlistForm}>
                  <div className={`${styles.inputGroup} ${isFocused ? styles.focused : ""}`}>
                    <div className={styles.inputIcon}>📧</div>
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      onFocus={() => setIsFocused(true)}
                      onBlur={() => setIsFocused(false)}
                      placeholder="Enter your email address"
                      className={styles.emailInput}
                      required
                      disabled={isLoading}
                    />
                    <button
                      type="submit"
                      className={`${styles.submitButton} ${email ? styles.active : ""}`}
                      disabled={isLoading || !email}
                    >
                      {isLoading ? (
                        <div className={styles.loadingSpinner} />
                      ) : (
                        <>
                          <span>Join Waitlist</span>
                          <div className={styles.buttonArrow}>→</div>
                        </>
                      )}
                    </button>
                  </div>
                  <div className={styles.wishlistNote}>
                    <div className={styles.privacyIcon}>🔒</div>
                    <span>We respect your privacy. No spam, ever.</span>
                  </div>
                </form>
              ) : (
                <div className={styles.successMessage}>
                  <div className={styles.successIconContainer}>
                    <div className={styles.successIcon}>✅</div>
                    <div className={styles.successRing} />
                  </div>
                  <h4>You're on the list!</h4>
                  <p>
                    Welcome to the future! We'll notify you as soon as we launch with exclusive
                    early access.
                  </p>
                  <div className={styles.successBadge}>
                    <span>🎉 Early Access Granted</span>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Animated grid background */}
      <div className={styles.gridBackground}>
        <div className={styles.gridLines} />
      </div>
    </section>
  );
};

export default HeroSection;
