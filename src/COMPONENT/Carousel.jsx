import React from 'react';
import styles from './Carousel.module.css';
import Pic from './img/Modern-Luxury-Interior-Design-by-Elicyon.jpg';
import Pic1 from './img/9f8d43b7-0faa-4782-9d38-6776b2833bb7.jpg';
import Pic2 from './img/Modern Living VillaF42.jpg';

function Carousel(){
  
    return(
        <section>
        <div id="carouselExampleCaptions" className={`carousel slide ${styles.customCarousel}`} data-bs-ride="carousel">
          <div className="carousel-indicators">
            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
          </div>
          <div className={`carousel-inner ${styles.carouselInner}`}>
            <div className="carousel-item active">
              <img src={Pic} className={`d-block w-100 ${styles.customImage}`} alt="First Slide" />
              <div className="carousel-caption d-none d-md-block">
                <h5>First slide label</h5>
                <p>Some representative placeholder content for the first slide.</p>
              </div>
            </div>
            <div className="carousel-item">
              <img src={Pic1} className={`d-block w-100 ${styles.customImage}`} alt="Second Slide" />
              <div className="carousel-caption d-none d-md-block">
                <h5>Second slide label</h5>
                <p>Some representative placeholder content for the second slide.</p>
              </div>
            </div>
            <div className="carousel-item">
              <img src={Pic2} className={`d-block w-100 ${styles.customImage}`} alt="Third Slide" />
              <div className="carousel-caption d-none d-md-block">
                <h5>Third slide label</h5>
                <p>Some representative placeholder content for the third slide.</p>
              </div>
            </div>
          </div>
          <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </section>
      

);
}


export default Carousel;