"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import styles from "./hero.module.scss";

const HeroSection = () => {
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isFocused, setIsFocused] = useState(false);
  
  // Demo animation state
  const [currentStep, setCurrentStep] = useState(0);
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const [isAnimating, setIsAnimating] = useState(false);

  // Demo animation sequence
  useEffect(() => {
    const demoSequence = async () => {
      setIsAnimating(true);
      
      // Step 1: Connect Your Data
      setCurrentStep(0);
      await new Promise(resolve => setTimeout(resolve, 5000)); // Increased from 4000ms
      
      // Step 2: Choose Your AI Model
      setCurrentStep(1);
      await new Promise(resolve => setTimeout(resolve, 5000)); // Increased from 4000ms
      
      // Step 3: Deploy & Scale
      setCurrentStep(2);
      await new Promise(resolve => setTimeout(resolve, 5000)); // Increased from 4000ms
      
      // Reset and repeat
      setCurrentStep(0);
      setIsAnimating(false);
    };

    const interval = setInterval(demoSequence, 15000); // Increased from 12000ms
    return () => clearInterval(interval);
  }, []);

  // Cursor animation for each step
  useEffect(() => {
    if (!isAnimating) return;

    const cursorAnimations = [
      // Step 1 cursor positions
      [
        { x: 20, y: 30 }, // Start position
        { x: 60, y: 30 }, // Click on "Connect Your Data"
        { x: 40, y: 50 }, // Hover over data sources
        { x: 80, y: 70 }, // Hover over features
        { x: 50, y: 80 }, // Data flow animation
      ],
      // Step 2 cursor positions
      [
        { x: 20, y: 30 }, // Start position
        { x: 60, y: 30 }, // Click on "Choose Your AI Model"
        { x: 40, y: 50 }, // Hover over model gallery
        { x: 70, y: 60 }, // Click on model switcher
        { x: 50, y: 80 }, // Hover over features
      ],
      // Step 3 cursor positions
      [
        { x: 20, y: 30 }, // Start position
        { x: 60, y: 30 }, // Click on "Deploy & Scale"
        { x: 40, y: 50 }, // Click "Deploy Now"
        { x: 50, y: 70 }, // Progress bar
        { x: 50, y: 80 }, // Success status
      ]
    ];

    const animateCursor = async () => {
      const positions = cursorAnimations[currentStep];
      for (let i = 0; i < positions.length; i++) {
        setCursorPosition(positions[i]);
        await new Promise(resolve => setTimeout(resolve, 1500)); // Increased from 1200ms
      }
    };

    animateCursor();
  }, [currentStep, isAnimating]);



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
    <section className={styles.hero} id="waitlist-sec">
      {/* Enhanced Background Elements */}
      <div className={styles.backgroundElements}>
        {/* Floating orbs */}
        <div className={styles.floatingOrb} />
        <div className={styles.floatingOrb} />
        <div className={styles.floatingOrb} />
        <div className={styles.floatingOrb} />

        {/* Geometric shapes */}
        <div className={styles.geometricShape} />
        <div className={styles.geometricShape} />
        <div className={styles.geometricShape} />

        {/* Animated grid pattern */}
        <div className={styles.gridPattern} />
      </div>



      {/* Main content with left-right layout */}
      <div className={styles.container}>
        <div className={styles.heroGrid}>
          {/* Left Side - Title and Early Access */}
          <div className={styles.leftContent}>
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

          {/* Right Side - Animated Product Visualization */}
          <div className={styles.rightContent}>
            <div className={styles.productVisualization}>
              {/* Desktop Frame */}
              <div className={styles.desktopFrame}>
                <div className={styles.desktopHeader}>
                  <div className={styles.desktopButtons}>
                    <div className={styles.desktopButton}></div>
                    <div className={styles.desktopButton}></div>
                    <div className={styles.desktopButton}></div>
                  </div>
                  <div className={styles.desktopTitle}>AI Platform Demo</div>
                </div>
                
                <div className={styles.desktopContent}>
                  {/* Step 1: Connect Your Data */}
                  <div className={`${styles.demoStep} ${styles.step1} ${currentStep === 0 ? styles.active : ''}`}>
                    <div className={styles.stepHeader}>
                      <div className={styles.stepIcon}>🔗</div>
                      <h3>Connect Your Data</h3>
                    </div>
                    
                    <div className={styles.dataSources}>
                      <div className={styles.dataSource}>
                        <div className={styles.sourceIcon}>📁</div>
                        <span>Upload Files</span>
                      </div>
                      <div className={styles.dataSource}>
                        <div className={styles.sourceIcon}>🗄️</div>
                        <span>Database</span>
                      </div>
                      <div className={styles.dataSource}>
                        <div className={styles.sourceIcon}>🌐</div>
                        <span>Web Content</span>
                      </div>
                    </div>
                    
                    <div className={styles.dataFeatures}>
                      <div className={styles.feature}>Multiple formats supported</div>
                      <div className={styles.feature}>Real-time processing</div>
                      <div className={styles.feature}>Secure data handling</div>
                    </div>
                    
                    <div className={styles.dataFlow}>
                      <div className={styles.flowPoint}>📊</div>
                      <div className={styles.flowLine}></div>
                      <div className={styles.flowPoint}>⚡</div>
                      <div className={styles.flowLine}></div>
                      <div className={styles.flowPoint}>🔒</div>
                    </div>
                  </div>

                  {/* Step 2: Choose Your AI Model */}
                  <div className={`${styles.demoStep} ${styles.step2} ${currentStep === 1 ? styles.active : ''}`}>
                    <div className={styles.stepHeader}>
                      <div className={styles.stepIcon}>🧠</div>
                      <h3>Choose Your AI Model</h3>
                    </div>
                    
                    <div className={styles.modelGallery}>
                      <div className={styles.modelCard}>
                        <div className={styles.modelIcon}>📈</div>
                        <span>Predictive Analytics</span>
                      </div>
                      <div className={styles.modelCard}>
                        <div className={styles.modelIcon}>💬</div>
                        <span>Natural Language</span>
                      </div>
                      <div className={styles.modelCard}>
                        <div className={styles.modelIcon}>🖼️</div>
                        <span>Image Recognition</span>
                      </div>
                    </div>
                    
                    <div className={styles.modelFeatures}>
                      <div className={styles.feature}>Multiple AI models</div>
                      <div className={styles.feature}>Performance-optimization</div>
                      <div className={styles.feature}>Easy model switching</div>
                    </div>
                    
                    <div className={styles.modelSwitcher}>
                      <div className={styles.switchButton}>←</div>
                      <div className={styles.currentModel}>GPT-4</div>
                      <div className={styles.switchButton}>→</div>
                    </div>
                  </div>

                  {/* Step 3: Deploy & Scale */}
                  <div className={`${styles.demoStep} ${styles.step3} ${currentStep === 2 ? styles.active : ''}`}>
                    <div className={styles.stepHeader}>
                      <div className={styles.stepIcon}>🚀</div>
                      <h3>Deploy & Scale</h3>
                    </div>
                    
                    <div className={styles.deploymentOptions}>
                      <div className={styles.deployButton}>Deploy Now</div>
                      <div className={styles.deployButton}>Configure</div>
                    </div>
                    
                    <div className={styles.deploymentFeatures}>
                      <div className={styles.feature}>Instant deployment</div>
                      <div className={styles.feature}>Auto-scaling</div>
                      <div className={styles.feature}>Enterprise security</div>
                    </div>
                    
                    <div className={styles.deploymentProgress}>
                      <div className={styles.progressBar}>
                        <div className={styles.progressFill}></div>
                      </div>
                      <div className={styles.progressText}>Deploying...</div>
                    </div>
                    
                    <div className={styles.deploymentStatus}>
                      <div className={styles.statusIcon}>✅</div>
                      <span>Deployed Successfully</span>
                    </div>
                  </div>

                  {/* Cursor Animation */}
                  <div 
                    className={styles.demoCursor}
                    style={{
                      left: `${cursorPosition.x}%`,
                      top: `${cursorPosition.y}%`
                    }}
                  ></div>
                  
                  {/* Progress Indicator */}
                  <div className={styles.progressIndicator}>
                    <div className={`${styles.progressDot} ${currentStep === 0 ? styles.active : ''}`}></div>
                    <div className={`${styles.progressDot} ${currentStep === 1 ? styles.active : ''}`}></div>
                    <div className={`${styles.progressDot} ${currentStep === 2 ? styles.active : ''}`}></div>
                  </div>
                </div>
              </div>

              {/* Floating Elements have been removed as requested */}
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
