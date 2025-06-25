import React from 'react';
import styles from './footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        {/* Column 1: About */}
        <div className={styles.column}>
          <h3>Company</h3>
          <p>
            We provide innovative tech solutions that help businesses grow and succeed in the digital era.
          </p>
        </div>

        {/* Column 2: Quick Links */}
        <div className={styles.column}>
          <h3>Quick Links</h3>
          <ul>
            <li>About Us</li>
            <li>Services</li>
            <li>Careers</li>
            <li>Contact</li>
          </ul>
        </div>

        {/* Column 3: Contact */}
        <div className={styles.column}>
          <h3>Contact</h3>
          <p>Email: info@company.com</p>
          <p>Phone: +1 234 567 8901</p>
          <p>Location: New York, USA</p>
        </div>
      </div>

      <div className={styles.bottom}>
        <p>© {new Date().getFullYear()} Your Company. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
