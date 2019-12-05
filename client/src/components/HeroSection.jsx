import React from 'react';
import Horse from '../images/horse.png'

export default function HeroSection() {
  return (
    <React.Fragment>
      <section id="hero-section">
        <div id="hero-horse">
          <img src={Horse} alt="hero-image" />
        </div>
        <div id="hero-text">
          <h1>Parent recommended toys</h1>
          <h2 id="hero-text-h2">Helping you choose the perfect gift for your little one</h2>
        </div>
        <div>
          <img id="hero-pic" src="https://images.unsplash.com/flagged/photo-1572495453848-7675e0ca762f" />
        </div>
      </section >
      <div id="green-border"></div>
    </React.Fragment>
  )
}