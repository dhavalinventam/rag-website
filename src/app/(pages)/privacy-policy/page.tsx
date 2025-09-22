import styles from "./page.module.scss";
import { Container } from "react-bootstrap";

export default function PrivacyPolicy() {
  return (
    <div className={styles.privacyPolicy}>
      <Container>
        <div className={styles.header}>
          <h1 className={styles.title}> Privacy Policy </h1>
          <p className={styles.lastUpdated}>Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</p>
        </div>

        <div className={styles.content}>
          <section className={styles.section}>
            <div className={styles.sectionCard}>
              <h2 className={styles.sectionTitle}>1. Introduction</h2>
            <p className={styles.paragraph}>
              Welcome to RAG Studio ("we," "our," or "us"). We are committed to protecting your privacy and ensuring the security of your personal information. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our RAG (Retrieval-Augmented Generation) AI platform and related services.
            </p>
            <p className={styles.paragraph}>
              Our platform enables businesses to build AI-powered solutions by connecting their data sources, selecting AI models, and deploying scalable AI applications with enterprise-grade security.
            </p>
            </div>
          </section>

          <section className={styles.section}>
            <div className={styles.sectionCard}>
              <h2 className={styles.sectionTitle}>2. Information We Collect</h2>
            
            <h3 className={styles.subsectionTitle}>2.1 Personal Information</h3>
            <p className={styles.paragraph}>
              We may collect the following types of personal information:
            </p>
            <ul className={styles.list}>
              <li><strong>Account Information:</strong> Name, email address, company name, job title, and contact information</li>
              <li><strong>Authentication Data:</strong> Login credentials, security questions, and two-factor authentication details</li>
              <li><strong>Billing Information:</strong> Payment card details, billing address, and transaction history</li>
              <li><strong>Communication Data:</strong> Messages, support tickets, and feedback you provide to us</li>
            </ul>

            <h3 className={styles.subsectionTitle}>2.2 Technical Information</h3>
            <ul className={styles.list}>
              <li><strong>Usage Data:</strong> How you interact with our platform, features used, and performance metrics</li>
              <li><strong>Device Information:</strong> IP address, browser type, operating system, and device identifiers</li>
              <li><strong>Log Data:</strong> Server logs, error reports, and system performance data</li>
              <li><strong>Cookies and Tracking:</strong> Session cookies, analytics cookies, and preference settings</li>
            </ul>

            <h3 className={styles.subsectionTitle}>2.3 Data You Process</h3>
            <p className={styles.paragraph}>
              When you use our RAG platform, you may upload, connect, or process various types of data including:
            </p>
            <ul className={styles.list}>
              <li>Documents, files, and databases you connect to our platform</li>
              <li>Web content and external data sources you integrate</li>
              <li>AI model training data and custom configurations</li>
              <li>Generated content and AI responses from your applications</li>
            </ul>
            </div>
          </section>

          <section className={styles.section}>
            <div className={styles.sectionCard}>
              <h2 className={styles.sectionTitle}>3. How We Use Your Information</h2>
            
            <h3 className={styles.subsectionTitle}>3.1 Service Provision</h3>
            <ul className={styles.list}>
              <li>Provide, maintain, and improve our RAG AI platform</li>
              <li>Process and analyze your data to generate AI responses</li>
              <li>Enable data source connections and AI model deployments</li>
              <li>Provide customer support and technical assistance</li>
            </ul>

            <h3 className={styles.subsectionTitle}>3.2 Business Operations</h3>
            <ul className={styles.list}>
              <li>Process payments and manage billing</li>
              <li>Send important service updates and notifications</li>
              <li>Conduct security monitoring and fraud prevention</li>
              <li>Comply with legal obligations and regulatory requirements</li>
            </ul>

            <h3 className={styles.subsectionTitle}>3.3 Product Improvement</h3>
            <ul className={styles.list}>
              <li>Analyze usage patterns to improve platform performance</li>
              <li>Develop new features and AI capabilities</li>
              <li>Conduct research and development for enhanced AI models</li>
              <li>Provide personalized recommendations and insights</li>
            </ul>
            </div>
          </section>

          <section className={styles.section}>
            <div className={styles.sectionCard}>
              <h2 className={styles.sectionTitle}>4. Data Security and Protection</h2>
            
            <h3 className={styles.subsectionTitle}>4.1 Security Measures</h3>
            <p className={styles.paragraph}>
              We implement enterprise-grade security measures to protect your data:
            </p>
            <ul className={styles.list}>
              <li><strong>Encryption:</strong> End-to-end encryption for data in transit and at rest</li>
              <li><strong>Access Controls:</strong> Role-based access controls and multi-factor authentication</li>
              <li><strong>Infrastructure Security:</strong> Secure cloud infrastructure with regular security audits</li>
              <li><strong>Data Isolation:</strong> Strict data segregation between different customers</li>
              <li><strong>Monitoring:</strong> 24/7 security monitoring and incident response</li>
            </ul>

            <h3 className={styles.subsectionTitle}>4.2 Data Processing</h3>
            <p className={styles.paragraph}>
              Your data is processed securely within our platform:
            </p>
            <ul className={styles.list}>
              <li>Data is processed only for the purposes you've authorized</li>
              <li>We do not use your data to train our general AI models without explicit consent</li>
              <li>Data is retained only as long as necessary for service provision</li>
              <li>You maintain full control over your data and can delete it at any time</li>
            </ul>
            </div>
          </section>

          <section className={styles.section}>
            <div className={styles.sectionCard}>
              <h2 className={styles.sectionTitle}>5. Information Sharing and Disclosure</h2>
            
            <p className={styles.paragraph}>
              We do not sell, trade, or rent your personal information to third parties. We may share your information only in the following circumstances:
            </p>

            <h3 className={styles.subsectionTitle}>5.1 Service Providers</h3>
            <p className={styles.paragraph}>
              We may share information with trusted third-party service providers who assist us in:
            </p>
            <ul className={styles.list}>
              <li>Cloud infrastructure and hosting services</li>
              <li>Payment processing and billing management</li>
              <li>Customer support and communication tools</li>
              <li>Analytics and performance monitoring</li>
            </ul>

            <h3 className={styles.subsectionTitle}>5.2 Legal Requirements</h3>
            <p className={styles.paragraph}>
              We may disclose information when required by law or to:
            </p>
            <ul className={styles.list}>
              <li>Comply with legal processes or government requests</li>
              <li>Protect our rights, property, or safety</li>
              <li>Prevent fraud or security threats</li>
              <li>Enforce our terms of service</li>
            </ul>

            <h3 className={styles.subsectionTitle}>5.3 Business Transfers</h3>
            <p className={styles.paragraph}>
              In the event of a merger, acquisition, or sale of assets, your information may be transferred as part of the transaction, subject to the same privacy protections.
            </p>
            </div>
          </section>

          <section className={styles.section}>
            <div className={styles.sectionCard}>
              <h2 className={styles.sectionTitle}>6. Your Rights and Choices</h2>
            
            <h3 className={styles.subsectionTitle}>6.1 Data Access and Control</h3>
            <p className={styles.paragraph}>
              You have the following rights regarding your personal information:
            </p>
            <ul className={styles.list}>
              <li><strong>Access:</strong> Request a copy of your personal information</li>
              <li><strong>Correction:</strong> Update or correct inaccurate information</li>
              <li><strong>Deletion:</strong> Request deletion of your personal information</li>
              <li><strong>Portability:</strong> Export your data in a machine-readable format</li>
              <li><strong>Restriction:</strong> Limit how we process your information</li>
            </ul>

            <h3 className={styles.subsectionTitle}>6.2 Communication Preferences</h3>
            <ul className={styles.list}>
              <li>Opt out of marketing communications at any time</li>
              <li>Choose your preferred communication channels</li>
              <li>Manage notification settings in your account</li>
            </ul>

            <h3 className={styles.subsectionTitle}>6.3 Data Processing Controls</h3>
            <ul className={styles.list}>
              <li>Control which data sources are connected to your AI applications</li>
              <li>Manage AI model configurations and processing parameters</li>
              <li>Set data retention policies for your processed information</li>
            </ul>
            </div>
          </section>

          <section className={styles.section}>
            <div className={styles.sectionCard}>
              <h2 className={styles.sectionTitle}>7. International Data Transfers</h2>
            <p className={styles.paragraph}>
              Our services may involve transferring your information to countries outside your residence. We ensure appropriate safeguards are in place for international transfers, including:
            </p>
            <ul className={styles.list}>
              <li>Standard contractual clauses approved by relevant authorities</li>
              <li>Adequacy decisions for countries with equivalent data protection laws</li>
              <li>Certification under recognized privacy frameworks</li>
            </ul>
            </div>
          </section>

          <section className={styles.section}>
            <div className={styles.sectionCard}>
              <h2 className={styles.sectionTitle}>8. Children's Privacy</h2>
            <p className={styles.paragraph}>
              Our services are not intended for children under 13 years of age. We do not knowingly collect personal information from children under 13. If we become aware that we have collected personal information from a child under 13, we will take steps to delete such information.
            </p>
            </div>
          </section>

          <section className={styles.section}>
            <div className={styles.sectionCard}>
              <h2 className={styles.sectionTitle}>9. Changes to This Privacy Policy</h2>
            <p className={styles.paragraph}>
              We may update this Privacy Policy from time to time to reflect changes in our practices or applicable laws. We will notify you of any material changes by:
            </p>
            <ul className={styles.list}>
              <li>Posting the updated policy on our website</li>
              <li>Sending email notifications to registered users</li>
              <li>Displaying prominent notices in our platform</li>
            </ul>
            <p className={styles.paragraph}>
              Your continued use of our services after the effective date of any changes constitutes acceptance of the updated Privacy Policy.
            </p>
            </div>
          </section>

          <section className={styles.section}>
            <div className={styles.sectionCard}>
              <h2 className={styles.sectionTitle}>10. Contact Information</h2>
            <p className={styles.paragraph}>
              If you have any questions, concerns, or requests regarding this Privacy Policy or our data practices, please contact us:
            </p>
            <div className={styles.contactInfo}>
              <p><strong>RAG Studio</strong></p>
              <p>Email: privacy@ragstudio.com</p>
              <p>Website: <a href="/contact" className={styles.contactLink}>Contact Us</a></p>
            </div>
            <p className={styles.paragraph}>
              For data protection inquiries, you may also contact our Data Protection Officer at dpo@ragstudio.com.
            </p>
            </div>
          </section>
        </div>
      </Container>
    </div>
  );
}
