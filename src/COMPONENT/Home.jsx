import React from 'react';
import styles from './Home.module.css';
import Pic from './img/Modern-Luxury-Interior-Design-by-Elicyon.jpg';
import Top from './Top';
import Philosophy from './Philosophy';

const Home = () => {
  return (
    <div className={styles.Container}>
      {/* Banner section */}
      <section className={styles.banner}>
        <img src={Pic} alt="Modern Luxury Interior Design" className={styles.bannerImage} />
        <div className={styles.bannerText}>
        <div className={styles.textOverlay}>
      <h1 className={styles.bannerTitle}>Bringing Your Dream Interiors to Life</h1>
      <p className={styles.bannerSubtitle}>Explore luxurious designs, expert advice, and more.</p>
      <button className={styles.Button1}>Explore</button>
         </div>
        </div>
      </section>

      {/* Top of the Week Section */}
        <Top></Top>

        {/* Philosophy section */}
          <Philosophy></Philosophy>

        
    </div>
  );
};

export default Home;
