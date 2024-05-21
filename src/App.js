//import logo from './logo.svg';
import './App.css';
import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import EducationSkills from './components/EducationSkills';
import Experience from './components/Experience';
import Extracurricular from './components/Extracurricular';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <About />
      <EducationSkills />
      <Experience />
      <Extracurricular />
      <Footer />
    </div>
  );
}

export default App;