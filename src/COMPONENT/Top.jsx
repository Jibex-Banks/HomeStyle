import React from 'react';
import styles from './Top.module.css';
import topWeek from './img/Luxury bed.jpg';
import topWeek1 from './img/White-Living-Room-in-Mid-Century-Modern-Style.jpg'
import topWeek2 from './img/k3.jpg'

const topOfTheWeekItems = [
    {
      id: 1,
      image: topWeek1,
      title: 'Trending Design: Modern Living Room',
      description: "Check out this week's most popular living room design featuring contemporary decor, stunning lighting, and elegant furniture choices.",
      buttonLabel: 'Explore More',
    },
    {
      id: 2,
      image: topWeek, // Example for another image
      title: 'Trending Design: Cozy Bedroom',
      description: "Explore the latest trends in cozy bedroom design, including warm textures, soft lighting, and minimalist decor.",
      buttonLabel: 'Discover More',
    },
    {
      id: 3,
      image: topWeek2, // Example for another image
      title: 'Modern Gourmet Kitchen',
      description: "Experience the perfect blend of style and functionality with this modern gourmet kitchen. Featuring state-of-the-art stainless steel appliances, custom cabinetry, and spacious quartz countertops, this kitchen is designed for both cooking and entertaining. The large center island offers a versatile space for meal prep and casual dining, while under-cabinet lighting and elegant pendant lights add warmth and ambiance. It's a chef's dream brought to life in a sleek, contemporary setting.",      buttonLabel: 'Learn More',
    },
    
  ];

  
const Top = () => {
    return (
        <section className={styles.topOfTheWeek}>
        <h2 className={styles.topWeekTitle}>Top of the Week</h2>
        {topOfTheWeekItems.map((item) => (
          <div key={item.id} className={styles.topWeekContent}>
            <img src={item.image} alt={item.title} className={styles.topWeekImage} />
            <div className={styles.topWeekText}>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
              <button className={styles.Button}>{item.buttonLabel}</button>
            </div>
          </div>
        ))}
      </section>
    );
};


export default Top;