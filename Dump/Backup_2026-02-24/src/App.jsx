import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <About />
      <Experience />
      <Projects />
      <Skills />
      <Contact />

      <footer style={{ textAlign: 'center', padding: '20px', color: 'var(--text-secondary)', borderTop: '1px solid var(--glass-border)' }}>
        <p>&copy; {new Date().getFullYear()} NareshKumar M. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
