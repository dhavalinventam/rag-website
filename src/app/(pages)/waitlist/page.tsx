"use client";
import { useState } from "react";
import styles from "./page.module.scss";

export default function WaitlistPage() {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isFocused, setIsFocused] = useState(false);
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || isSubmitting) return;

    setIsSubmitting(true);

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500));

    setIsSubmitted(true);
    setIsSubmitting(false);
    setEmail("");

    // Reset after 5 seconds
    setTimeout(() => setIsSubmitted(false), 5000);
  };

  const toggleFaq = (index: number) => {
    setExpandedFaq(expandedFaq === index ? null : index);
  };

  const faqData = [
    {
      question: "What is RAG?",
      answer: "RAG stands for Retrieval-Augmented Generation. It's a way to combine powerful AI language models with real-time access to your own data, reducing AI hallucinations and delivering precise, context-aware responses."
    },
    {
      question: "Why does RAG matter?",
      answer: "Because traditional AI often guesses or hallucinates answers. RAG ensures your AI applications base outputs on verified, up-to-date data crucial for accuracy, trust, and compliance in real-world use."
    },
    {
      question: "How secure is my data with your platform?",
      answer: "Security is foundational. We provide enterprise-grade protections including data encryption at rest and in transit, role-based access control, audit logs, and SSO integration. You retain full control over your data environment."
    },
    {
      question: "Which AI models do you support?",
      answer: "Our platform is model-agnostic. Use popular LLMs like OpenAI, Claude ai, or your own custom-trained models. Switch between models anytime without vendor lock-in."
    },
    {
      question: "What support do early users get?",
      answer: "Founding users receive priority access to our engineering team, direct Slack support, and influence on feature priorities and the product roadmap."
    },
    {
      question: "How fast can I get started?",
      answer: "You can connect your data and deploy a RAG application in minutes using our streamlined UI or APIs—no complex setup or lengthy onboarding required."
    }
  ];

  return (
    <div className={styles.waitlistPage}>
      {/* Animated background */}
      <div className={styles.backgroundElements}>
        <div className={styles.floatingOrb} data-speed="0.3" />
        <div className={styles.floatingOrb} data-speed="0.5" />
        <div className={styles.floatingOrb} data-speed="0.7" />
      </div>

      <div className={styles.container}>
        {/* Header Section */}
        <div className={styles.header}>
          <div className={styles.badge}>
            <span>🎉 Thank You!</span>
          </div>
                     <h1 className={styles.title}>
             <span className={styles.gradientText}>Thank you for your amazing<br />response to RAG!</span>
           </h1>
          <p className={styles.subtitle}>
            RAG is seeing unprecedented demand. Join our waitlist and we&apos;ll notify you as soon as access is available.
          </p>
        </div>

        {/* Waitlist Form Section */}
        <div className={styles.formSection}>
          {!isSubmitted ? (
            <div className={styles.formCard}>
              <div className={styles.formGlow} />
              <div className={styles.formHeader}>
                <h2>Join the Waitlist</h2>
                <p>Be among the first to experience the future of AI-powered applications</p>
              </div>

              <form onSubmit={handleSubmit} className={styles.form}>
                <div className={styles.inputGroup}>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    onFocus={() => setIsFocused(true)}
                    onBlur={() => setIsFocused(false)}
                    className={`${styles.emailInput} ${isFocused ? styles.focused : ""}`}
                    placeholder="Enter your email address"
                    required
                    disabled={isSubmitting}
                  />
                  <button
                    type="submit"
                    className={`${styles.submitButton} ${isSubmitting ? styles.loading : ""}`}
                    disabled={isSubmitting || !email}
                  >
                    {isSubmitting ? (
                      <>
                        <div className={styles.spinner} />
                        <span>Joining Waitlist...</span>
                      </>
                    ) : (
                      <>
                        <span>Join Waitlist</span>
                        <div className={styles.buttonArrow}>→</div>
                      </>
                    )}
                  </button>
                </div>
                <div className={styles.formNote}>
                  <div className={styles.privacyIcon}>🔒</div>
                  <span>We respect your privacy. No spam, ever.</span>
                </div>
              </form>
            </div>
          ) : (
            <div className={styles.successCard}>
              <div className={styles.successGlow} />
              <div className={styles.successIcon}>✅</div>
              <h2>You&apos;re on the Waitlist!</h2>
              <p>
                Thank you for joining! We&apos;ll notify you as soon as your account is ready. 
                You&apos;re now part of an exclusive group of early adopters.
              </p>
              <div className={styles.successBadge}>
                <span>🎉 Early Access Granted</span>
              </div>
            </div>
          )}
        </div>

        {/* FAQ Section */}
        <div className={styles.faqSection}>
          <h2>Common Questions</h2>
          <div className={styles.faqList}>
            {faqData.map((faq, index) => (
              <div key={index} className={styles.faqItem}>
                <button
                  className={`${styles.faqQuestion} ${expandedFaq === index ? styles.expanded : ""}`}
                  onClick={() => toggleFaq(index)}
                  aria-expanded={expandedFaq === index}
                >
                  <span>{faq.question}</span>
                  <div className={styles.faqIcon}>
                    {expandedFaq === index ? "−" : "+"}
                  </div>
                </button>
                <div className={`${styles.faqAnswer} ${expandedFaq === index ? styles.show : ""}`}>
                  <p>{faq.answer}</p>
                </div>
                <div className={styles.faqSeparator} />
              </div>
            ))}
          </div>
        </div>

        
      </div>
    </div>
  );
}
