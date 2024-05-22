import React from 'react';
import './Hero.css';
import { Parallax } from 'react-scroll-parallax';

const Hero = () => {
  return (
    <section className="hero" id="hero">
      <Parallax className="custom-class" y={[-20, 20]}>
        <h1>Your Name</h1>
      </Parallax>
      <Parallax className="custom-class" y={[10, -10]}>
        <p>Professional Title or Short Description</p>
      </Parallax>
    </section>
  );
}

export default Hero;
