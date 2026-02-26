import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-scroll';
import profileImg from '../assets/images/Profile.jpeg';
import Magnetic from './Magnetic';
import './Hero.css';

const Hero = () => {
    return (
        <section id="home" className="hero-section container">
            <div className="hero-bg-glow"></div>
            <div className="hero-bg-glow-2"></div>

            <motion.div
                className="hero-content"
                initial={{ opacity: 0, x: -100 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, type: "spring", bounce: 0.4 }}
            >
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3, duration: 0.5 }}
                    style={{ color: 'var(--primary-color)', fontSize: '1.5rem', marginBottom: '10px', fontWeight: '500' }}
                >
                    Hello, I&apos;m
                </motion.h2>
                <motion.h1
                    className="hero-name"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5, duration: 0.8 }}
                >
                    NareshKumar M
                </motion.h1>
                <motion.h3
                    className="hero-role"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.7, duration: 0.8 }}
                >
                    Full Stack Java Developer
                </motion.h3>
                <motion.p
                    className="hero-desc"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.9, duration: 1 }}
                >
                    Passionate about creating functional web applications and eager to contribute, learn, and grow in a dynamic development environment. Specialized in Java, Spring Boot, React, and MySQL.
                </motion.p>

                <motion.div
                    className="hero-buttons"
                    style={{ marginTop: '40px' }}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.1, duration: 0.5 }}
                >
                    <Magnetic>
                        <Link to="contact" smooth={true} duration={500} aria-label="Scroll to Contact section">
                            <button className="btn btn-primary" style={{ minWidth: '160px' }}>Contact Me</button>
                        </Link>
                    </Magnetic>
                    <Magnetic>
                        <Link to="projects" smooth={true} duration={500} aria-label="Scroll to Projects section">
                            <button className="btn btn-outline" style={{ minWidth: '160px' }}>View Work</button>
                        </Link>
                    </Magnetic>
                </motion.div>
            </motion.div>

            <motion.div
                className="hero-visual"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
            >
                <div className="hero-img-container">
                    <motion.div
                        className="hero-img-frame"
                        animate={{
                            borderRadius: ["30% 70% 70% 30% / 30% 30% 70% 70%", "58% 42% 75% 25% / 76% 46% 54% 24%", "30% 70% 70% 30% / 30% 30% 70% 70%"]
                        }}
                        transition={{
                            duration: 8,
                            repeat: Infinity,
                            repeatDelay: 0,
                            ease: "easeInOut"
                        }}
                    >
                        <img src={profileImg} alt="NareshKumar M - Profile Portrait" className="hero-img" loading="lazy" />
                    </motion.div>
                    <div className="hero-img-outline"></div>
                </div>
            </motion.div>
        </section>
    );
};

export default Hero;
