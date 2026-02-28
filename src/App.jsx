import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import Navbar from './components/Navbar';

import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Reviews from './components/Reviews';
import Contact from './components/Contact';
import FloatingResume from './components/FloatingResume';

function App() {
  useEffect(() => {
    // Add a slight delay to ensure everything is rendered
    const timer = setTimeout(() => {
      document.body.classList.add('loaded');
    }, 500);
    return () => clearTimeout(timer);
  }, []);


  return (

    <div className="App" style={{ position: 'relative', overflow: 'hidden' }}>
      {/* Background Decorative Blobs */}
      <div className="bg-blobs">
        <motion.div
          className="blob blob-1"
          animate={{
            x: [0, 100, -50, 0],
            y: [0, -100, 50, 0],
            scale: [1, 1.2, 0.8, 1]
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        />
        <motion.div
          className="blob blob-2"
          animate={{
            x: [0, -120, 80, 0],
            y: [0, 150, -100, 0],
            scale: [1, 0.9, 1.1, 1]
          }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
        />
      </div>

      <Navbar />
      <Hero />
      <About />
      <Experience />
      <Projects />
      <Skills />
      <Reviews />
      <Contact />
      <FloatingResume />

      <footer style={{ textAlign: 'center', padding: '20px', color: 'var(--text-secondary)', borderTop: '1px solid var(--glass-border)' }}>
        <p>&copy; {new Date().getFullYear()} NareshKumar M. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
