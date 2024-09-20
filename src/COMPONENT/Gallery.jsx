import React, { useState } from 'react';
import { galleryData } from './Gallerydata'; // Adjust path as needed
import styles from './Gallery.module.css'; // Import CSS module

function Gallery() {
  const [selectedCategory, setSelectedCategory] = useState('all');

  // Filter images based on selected category
  const filteredImages = selectedCategory === 'all' 
    ? galleryData 
    : galleryData.filter(image => image.category === selectedCategory);

  // Filter for designers
  const designers = galleryData.filter(item => item.category === 'designers');

  return (
    <div className={styles.galleryContainer}>
      <div className={styles.filterButtons}>
        <button className={styles.filterButton} onClick={() => setSelectedCategory('all')}>All</button>
        <button className={styles.filterButton} onClick={() => setSelectedCategory('parlor')}>Living-Room</button>
        <button className={styles.filterButton} onClick={() => setSelectedCategory('bed')}>Bed</button>
        <button className={styles.filterButton} onClick={() => setSelectedCategory('kitchen')}>Kitchen</button>
        <button className={styles.filterButton} onClick={() => setSelectedCategory('lighting')}>Lighting</button>
        <button className={styles.filterButton} onClick={() => setSelectedCategory('others')}>Others</button>
        <button className={styles.filterButton} onClick={() => setSelectedCategory('designers')}>Designers</button>
      </div>
      
      <div className={styles.galleryGrid}>
        {selectedCategory === 'designers' ? (
          designers.map(designer => (
            <div key={designer.id} className={styles.galleryItem}>
              <img src={designer.profilePic} alt={designer.name} className={styles.galleryImage} />
              <div className={styles.designerInfo}>
                <h3>{designer.name}</h3>
                <p>{designer.bio}</p>
                <p><strong>Rate:</strong> {designer.rate}</p>
                <p><strong>Contact:</strong> <a href={`mailto:${designer.contact}`} className={styles.contactLink}>{designer.contact}</a></p>
                <h4>Notable Works:</h4>
                <ul>
                  {designer.notableWorks.map(work => <li key={work}>{work}</li>)}
                </ul>
                <a href={`mailto:${designer.contact}`} className={styles.contactButton}>Contact</a>
              </div>
            </div>
          ))
        ) : (
          filteredImages.map(image => (
            <div key={image.id} className={styles.galleryItem}>
              <img src={image.src} alt={image.alt} className={styles.galleryImage} />
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default Gallery;
