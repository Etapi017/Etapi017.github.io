import React from 'react';
import { ParallaxProvider } from 'react-scroll-parallax';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import EducationSkills from './components/EducationSkills';
import Experience from './components/Experience';
import Extracurricular from './components/Extracurricular';
import Footer from './components/Footer';

function App() {
  return (
    <ParallaxProvider>
      <div className="App">
        <Navbar />
        <Hero />
        <About />
        <EducationSkills />
        <Experience />
        <Extracurricular />
        <Footer />
      </div>
    </ParallaxProvider>
  );
}

export default App;
