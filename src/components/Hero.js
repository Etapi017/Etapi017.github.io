import React from 'react';
import './Hero.css';
import { Parallax } from 'react-scroll-parallax';

const Hero = () => {
  return (
    <section className="hero" id="hero">
      <Parallax className="custom-class" y={[-20, 20]}>
        <h1>Edgar Tapia Maldonado</h1>
      </Parallax>
      <Parallax className="custom-class" y={[10, -10]}>
        <p>ITS Media Technician (Current Position)</p>
      </Parallax>
    </section>
  );
}

export default Hero;
