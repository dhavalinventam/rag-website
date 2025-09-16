"use client";
import { useEffect, useState } from "react";
import styles from "./description-overview.module.scss";

const DescriptionOverview = () => {
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isFocused, setIsFocused] = useState(false);

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
    <section className={styles.overview}>
      <div className={styles.container}>
        <div className={styles.content}>
          <h1 className={styles.title}>
            <span className={styles.titleLine}>
              <span className={styles.typingText}>Stop Guesswork.</span>
            </span>
            <span className={styles.titleLine}>
              <span className={styles.gradientText}>Build AI That Knows.</span>
            </span>
          </h1>

          <p className={styles.subtitle}>
            Join the waitlist for instant access to the next-gen RAG platform
            <br />
            no more hallucinations, full data control, and enterprise-grade security.
          </p>

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

          {/* Early Access Card */}
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
                  <span className={styles.titleGradient}>Get Early Access</span>
                </h3>
                <p className={styles.wishlistSubtitle}>
                  Early access. Limited founder slots. Exclusive community.
                </p>
              </div>

              {!isSubmitted ? (
                <form onSubmit={handleSubmit} className={styles.wishlistForm}>
                  <div className={`${styles.inputGroup} ${isFocused ? styles.focused : ""}`}>
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
                  <h4>You&apos;re on the list!</h4>
                  <p>
                    Welcome to the future! We&apos;ll notify you as soon as we launch with exclusive
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
    </section>
  );
};

export default DescriptionOverview;
