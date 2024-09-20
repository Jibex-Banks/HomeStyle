import React from 'react';
import styles from './Contact.module.css';
import contactImage from './img/c3.jpg'

function Contact () {
  const phoneNumber="08087400168";
  const phoneNumber2="08155512886";
    return(
        <section className={styles.Container}>
    <img src={contactImage} alt="Contact us " className={styles.ContactImage} />
    <div className={styles.contactDetails}>
    <p><span className={styles.highlight}>Email:</span>{' '}<a href="mailto:contact@homeStylers.com">contact@homeStylers.com</a></p>      
  <p><span className={styles.highlight}>Address:</span><a 
    href="https://www.google.com/maps/search/?api=1&query=22+Lagos+road+behind+brt+terminal+ikorodu+Lagos" 
    target="_blank" 
    rel="noopener noreferrer"
  > 22 Lagos road behind BRT terminal, Ikorodu, Lagos</a></p>
            <p><span className={styles.highlight}>Phone:</span> <a href={`tel:${phoneNumber}`}>+2348 0874 00168</a> | <a href={`tel:${phoneNumber2}`}>+2348 1555 12886</a></p>
          </div>   
        </section>
);
};

export default Contact;