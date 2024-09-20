import React from 'react';
import styles from './Philosophy.module.css';
import side1 from './img/ph3.jpg'

const Philosophy = () => {
    return (
        <section className={styles.phil}>
            <h2 className={styles.philTitle}>Our Philosophy</h2>
        <div className={styles.img}>
        <img src={side1} alt="A Work station" className={styles.img2} />
        <div className={styles.Text}>
            <h3>At HomeStyler, we believe that a well-designed space can transform the way people live, work, and feel.</h3>
            <p>Our philosophy is that interior design should be accessible, inspiring, and personal. By offering diverse styles, products, and expert guidance, we empower users to bring their dream homes to life—whether they seek timeless elegance or modern simplicity. HomeStyler is here to guide you every step of the way, bringing your dream interiors to life.</p>
          </div>
        </div>
            </section>
    );
};

export default Philosophy;