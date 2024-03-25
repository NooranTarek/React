import React from 'react';
import './hero.css';
import heroCover from '../../assets/images/nour.PNG';
import CustomButton from '../../reusable_components/button/button';

export default function Hero() {
  return (
    <div className="hero-section"> 
      <div className="hero-content">
        <h1 className='header1'>Nouran Tarek</h1>
        <p className='paragrapgh1'>Hello, I am a software engineer from Egypt</p>
        <CustomButton /> 
      </div>
      <div>
        <img className='img1' src={heroCover} alt='not found' />
      </div>
    </div>
  );
}
