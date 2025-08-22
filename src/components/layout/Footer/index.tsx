import Link from "next/link";
import Image from "next/image";
import styles from "./Footer.module.scss";
import Logo from "../../../../image/main-logo.png";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className={styles.footer}>
      <span className={styles.orb} />
      <span className={styles.orb2} />
      <span className={styles.orb3} />
      <div className={`container ${styles.inner}`}>
        {/* Top footer */}
        <div className="row g-4">
          <div className="col-12 col-md-4">
            <div className={styles.brandBlock}>
              <Image src={Logo} alt="RAG Studio logo" className={styles.brandLogo} />
              <p className={styles.description}>
                We create digital experiences for forward‑thinking teams using retrieval‑augmented
                AI and modern engineering.
              </p>
            </div>
          </div>

          <div className="col-6 col-md-4">
            <nav className={`${styles.navBlock} ps-md-5`} aria-label="Quick Links">
              <h4 className={styles.sectionTitle}>Quick Links</h4>
              <ul className={styles.listReset}>
                <li>
                  <Link className={styles.link} href="#privacy">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link className={styles.link} href="#terms">
                    Terms of Service
                  </Link>
                </li>
                <li>
                  <Link className={styles.link} href="/contact">
                    Contact
                  </Link>
                </li>
              </ul>
            </nav>
          </div>

          <div className="col-12 col-md-4">
            {/* Newsletter + Socials */}
            <div className={styles.newsletterBlock}>
              <h4 className={styles.sectionTitle}>Stay Updated</h4>
              <form className={styles.subscribeForm}>
                <input
                  className={styles.emailInput}
                  type="email"
                  placeholder="Enter your email"
                  aria-label="Email address"
                  required
                />
                <button className={styles.submitBtn} aria-label="Subscribe" type="button">
                  →
                </button>
              </form>

              <div className={styles.followWrap}>
                <div className={styles.socials}>
                  <a className={styles.socialBtn} href="#" aria-label="LinkedIn">
                    <i className="bi bi-linkedin" />
                  </a>
                  <a className={styles.socialBtn} href="#" aria-label="X">
                    <i className="bi bi-twitter-x" />
                  </a>
                  <a className={styles.socialBtn} href="#" aria-label="YouTube">
                    <i className="bi bi-youtube" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom footer */}
        <div className="row mt-3">
          <div className="col-12">
            <div className={styles.divider} />
          </div>
          <div className="col-12 d-flex mt-2">
            <div className={`${styles.bottomRow} justify-content-center text-center w-100`}>
              <span>Copyright ©{year} RAG Studio. All rights reserved.</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
