"use client";
import Link from "next/link";
import styles from "./hero.module.scss";

const HeroSection = () => {
  return (
    <section className={styles.hero}>
      <div className="container">
        <div className={styles.content}>
          <h1 className={styles.title}>
            <span className={styles.gradientText}>Build RAG Apps</span>
            <br />
            Without the Complexity
          </h1>
          <p className={styles.subtitle}>
            The fastest way to integrate retrieval-augmented generation into your applications.
            Connect your data, choose your model, and deploy in minutes.
          </p>

          <div className={styles.actions}>
            <Link
              href={{ pathname: "/", hash: "get-started" }}
              className={"btn btn-gradient-primary rounded-pill"}
            >
              Start building free
            </Link>
            <Link href={{ pathname: "/", hash: "demo" }} className={"btn btn-ghost rounded-pill"}>
              <svg
                className={styles.playIcon}
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="currentColor"
                aria-hidden="true"
              >
                <path d="M8 5v14l11-7z"></path>
              </svg>
              Join waitlist
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
