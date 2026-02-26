import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-scroll';
import './Hero.css';

const Hero = () => {
    return (
        <section id="home" className="hero-section container">
            <div className="hero-bg-glow"></div>
            <div className="hero-bg-glow-2"></div>

            <motion.div
                className="hero-content"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
            >
                <motion.h2
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.2 }}
                    style={{ color: 'var(--primary-color)', fontSize: '1.5rem', marginBottom: '10px', fontWeight: '500' }}
                >
                    Hello, I'm
                </motion.h2>
                <h1 className="hero-name">NareshKumar M</h1>
                <h3 className="hero-role">Full Stack Java Developer</h3>
                <p className="hero-desc">
                    Passionate about creating functional web applications and eager to contribute, learn, and grow in a dynamic development environment. Specialized in Java, Spring Boot, React, and MySQL.
                </p>

                <div className="hero-buttons">
                    <Link to="contact" smooth={true} duration={500}>
                        <button className="btn btn-primary">Contact Me</button>
                    </Link>
                    <Link to="projects" smooth={true} duration={500}>
                        <button className="btn btn-outline">View Work</button>
                    </Link>
                </div>
            </motion.div>

            <motion.div
                className="hero-visual"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
            >
                {/* Abstract Tech Visual */}
                <div style={{
                    width: '350px',
                    height: '350px',
                    background: 'linear-gradient(45deg, var(--primary-color), var(--secondary-color))',
                    borderRadius: '30% 70% 70% 30% / 30% 30% 70% 70%',
                    animation: 'morph 8s ease-in-out infinite',
                    boxShadow: '0 0 60px rgba(0, 242, 255, 0.4)',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    color: 'white',
                    fontSize: '6rem',
                    fontWeight: '900',
                    textShadow: '0 2px 10px rgba(0,0,0,0.2)'
                }}>
                    NK
                </div>
                <style>{`
          @keyframes morph {
            0% { border-radius: 30% 70% 70% 30% / 30% 30% 70% 70%; }
            25% { border-radius: 58% 42% 75% 25% / 76% 46% 54% 24%; }
            50% { border-radius: 50% 50% 33% 67% / 55% 27% 73% 45%; }
            75% { border-radius: 33% 67% 58% 42% / 63% 68% 32% 37%; }
            100% { border-radius: 30% 70% 70% 30% / 30% 30% 70% 70%; }
          }
        `}</style>
            </motion.div>
        </section>
    );
};

export default Hero;
