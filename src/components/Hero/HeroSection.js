import React from 'react';
import '../../App.css';
import { Button } from '../Button/Button';
import './HeroSection.css';





function HeroSection() {
  
  return (
    <div className='hero-container'>
      <video src='/videos/video.mp4' type="video/mp4" autoPlay loop muted playsInline/>
      <h1>Machine Learning Enthusiast with a Sporting Soul</h1>
      <p>Trying to decipher the cryptic languages of data. Let's decode AI, discuss sports, or strum some tunes together.</p>
      <div className='hero-btns'>
        <Button
          className='btns'
          buttonStyle='btn--primary'
          buttonSize='btn--large' 
        >
          Sounds Interesting? Let's Connect!
        </Button>
        
      </div>
    </div>
  );
}

export default HeroSection;
