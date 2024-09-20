import React from 'react';
import styles from './Footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
        <div className={styles.footerLinks}>
          <a href="#about">About Us</a>
          <a href="#contact">Contact</a>
          <a href="#privacy">Privacy Policy</a>
        </div>
       
      
      </div>
      <div className={styles.footerCopyright}>
        <p>&copy; 2024 HomeStyler. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
