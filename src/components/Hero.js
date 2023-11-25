import React from 'react';
// import styles from './Hero.module.css'; // Import the CSS module

function Hero() {
  return (
    // <div>
    //   <p className="section-dummy">Hero</p>
    //   <p className="section-dummy">...</p>
    // </div>

    <section className="hero" id="home">
      <div className="hero-banner">
      < h1>backroads app</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae explicabo debitis est autem dicta.</p>
        <a href="#tours" className="btn hero-btn">explore tours</a>
      </div>
    </section>
  );
}

export default Hero;
