import React from 'react';
import './Mission.css';
import back from './videos/back.mp4';

const Mission = () => {
  return (
    <div className="mission-container">
      <video autoPlay loop muted playsInline className="background-video">
        <source src={back} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="video-content">
        <h1><b>Our Mission</b></h1>
        <p>At HomeStyler, our mission is to provide a user-friendly platform that simplifies interior design, inspires creativity, and connects individuals with professional designers, making home transformations easy and enjoyable.</p>
      </div>
    </div>
  );
};

export default Mission;