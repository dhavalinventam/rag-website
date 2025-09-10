"use client";
import { useState } from "react";
import styles from "./faq.module.scss";

const FAQSection = () => {
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);

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
    <section className={styles.faqSection} id="faq">
      {/* Abstract background elements */}
      <div className={styles.backgroundElements}>
        <div className={styles.wireframeGrid} />
        <div className={styles.floatingOrb} data-speed="0.3" />
        <div className={styles.floatingOrb} data-speed="0.5" />
        <div className={styles.floatingOrb} data-speed="0.7" />
      </div>

      <div className={styles.container}>
        <div className={styles.faqLayout}>
          {/* Left Panel - Introduction */}
          <div className={styles.leftPanel}>
            <div className={styles.introContent}>
              <h2 className={styles.title}>
                Frequently
                <br />
                asked questions
              </h2>
              <p className={styles.subtitle}>
                Have more questions? Reach out to our sales team for assistance.
              </p>
              <button className="btn btn-gradient-primary">
                <span>Contact sales</span>
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M6 4L10 8L6 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
            </div>
          </div>

          {/* Right Panel - FAQ Items */}
          <div className={styles.rightPanel}>
            <div className={styles.faqList}>
              {faqData.map((faq, index) => (
                <div key={index} className={styles.faqItem}>
                  <button
                    className={`${styles.faqQuestion} ${expandedFaq === index ? styles.expanded : ""}`}
                    onClick={() => toggleFaq(index)}
                    aria-expanded={expandedFaq === index}
                  >
                    <span className={styles.questionText}>{faq.question}</span>
                    <div className={styles.faqIcon}>
                      <div className={`${styles.iconLine} ${expandedFaq === index ? styles.rotated : ""}`} />
                      <div className={`${styles.iconLine} ${expandedFaq === index ? styles.hidden : ""}`} />
                    </div>
                  </button>
                  <div className={`${styles.faqAnswer} ${expandedFaq === index ? styles.show : ""}`}>
                    <div className={styles.answerContent}>
                      <p>{faq.answer}</p>
                    </div>
                  </div>
                  {index < faqData.length - 1 && <div className={styles.divider} />}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
