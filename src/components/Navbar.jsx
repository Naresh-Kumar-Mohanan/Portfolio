import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { motion, AnimatePresence } from 'framer-motion';
import { FaBars, FaTimes, FaSun, FaMoon } from 'react-icons/fa';
import './Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'dark');
  const [animatingTheme, setAnimatingTheme] = useState(false);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleTheme = () => {
    setAnimatingTheme(true);
    setTimeout(() => {
      setTheme(theme === 'dark' ? 'light' : 'dark');
    }, 400); // Toggle theme halfway through travel

    setTimeout(() => {
      setAnimatingTheme(false);
    }, 1200);
  };

  const navLinks = [
    { name: 'Home', to: 'home' },
    { name: 'About', to: 'about' },
    { name: 'Experience', to: 'experience' },
    { name: 'Projects', to: 'projects' },
    { name: 'Skills', to: 'skills' },
    { name: 'Contact', to: 'contact' },
  ];

  return (
    <>
      <AnimatePresence>
        {animatingTheme && (
          <motion.div
            initial={{ x: '-10vw', opacity: 0, y: '50vh' }}
            animate={{
              x: '110vw',
              opacity: [0, 1, 1, 0],
              y: ['60vh', '30vh', '60vh']
            }}
            transition={{ duration: 1.2, ease: "easeInOut" }}
            style={{
              position: 'fixed',
              zIndex: 9999,
              fontSize: '6rem',
              color: theme === 'dark' ? '#ffcc00' : '#e2e8f0',
              filter: `drop-shadow(0 0 30px ${theme === 'dark' ? 'rgba(255, 204, 0, 0.6)' : 'rgba(226, 232, 240, 0.4)'})`,
              pointerEvents: 'none'
            }}
          >
            {theme === 'dark' ? <FaSun /> : <FaMoon />}
          </motion.div>
        )}
      </AnimatePresence>

      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 1000,
          padding: scrolled ? '10px 0' : '20px 0',
          background: scrolled ? 'var(--bg-color)' : 'transparent',
          opacity: scrolled ? 0.95 : 1,
          backdropFilter: scrolled ? 'blur(10px)' : 'none',
          borderBottom: scrolled ? '1px solid var(--glass-border)' : 'none',
          transition: 'all 0.3s ease'
        }}
      >
        <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <Link to="home" smooth={true} duration={500} style={{ cursor: 'pointer' }} aria-label="Go to top of page">
            <h1 style={{ fontSize: '2rem', fontWeight: 'bold', background: 'var(--accent-gradient)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>NK</h1>
          </Link>

          {/* Desktop Menu */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '30px' }}>
            <ul className="desktop-menu" style={{ gap: '30px', display: 'flex', alignItems: 'center' }}>
              {navLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.to}
                    smooth={true}
                    duration={500}
                    offset={-70}
                    style={{ cursor: 'pointer', fontSize: '1rem', fontWeight: '500', transition: 'color 0.3s', color: 'var(--text-color)' }}
                    onMouseEnter={(e) => e.target.style.color = 'var(--primary-color)'}
                    onMouseLeave={(e) => e.target.style.color = 'var(--text-color)'}
                    aria-label={`Navigate to ${link.name} section`}
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>

            {/* Theme Toggle Button */}
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={toggleTheme}
              style={{
                background: 'var(--glass-bg)',
                border: '1px solid var(--glass-border)',
                color: 'var(--text-color)',
                width: '40px',
                height: '40px',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '1.2rem',
                cursor: 'pointer'
              }}
              aria-label="Toggle Theme"
            >
              {theme === 'dark' ? <FaSun /> : <FaMoon />}
            </motion.button>

            {/* Mobile Menu Icon */}
            <div className="mobile-icon" onClick={() => setIsOpen(!isOpen)} style={{ cursor: 'pointer', fontSize: '1.5rem', color: 'var(--text-color)' }} aria-label="Toggle navigation menu">
              {isOpen ? <FaTimes /> : <FaBars />}
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              className="mobile-menu active"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              style={{ background: 'var(--surface-color)', overflow: 'hidden' }}
            >
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.to}
                  smooth={true}
                  duration={500}
                  offset={-70}
                  onClick={() => setIsOpen(false)}
                  style={{ cursor: 'pointer', fontSize: '1.2rem', fontWeight: '500', color: 'var(--text-color)', margin: '15px 0', display: 'block' }}
                  aria-label={`Navigate to ${link.name} section`}
                >
                  {link.name}
                </Link>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>
    </>
  );
};

export default Navbar;
