import React from 'react';
import Hero from './components/Hero';
import Education from './components/Education';
import Projects from './components/Projects';
import Technical from './components/Technical.tsx';
import Gallery from './components/Gallery.tsx';
import About from './components/About.tsx';


function App() {
  return (
    <div>
      <Hero />
      <Education />
      <Projects />
      <Technical />
      <Gallery />
      <About />
    </div>
  );
}

export default App;