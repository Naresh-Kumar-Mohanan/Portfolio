import React from 'react';
import { motion } from 'framer-motion';
import lookImg from '../assets/images/Look.jpeg';

const About = () => {
    return (
        <section id="about" className="container" style={{ padding: '100px 20px' }}>
            <h2 className="section-title">About Me</h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '50px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '60px', flexWrap: 'wrap-reverse' }}>
                    <motion.div
                        className="glass"
                        style={{ padding: '40px', flex: '1', minWidth: '300px' }}
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: false }}
                    >
                        <p style={{ fontSize: '1.2rem', lineHeight: '1.8', color: 'var(--text-secondary)' }}>
                            I am a <span style={{ color: 'var(--primary-color)', fontWeight: 'bold' }}>Full Stack Java Developer</span> skilled in Java, Spring Boot, MySQL, HTML, CSS, JavaScript, and React.
                            I have completed a Full Stack Java course and built projects involving REST APIs, databases, and web development.
                            I am passionate about creating functional web applications and eager to contribute, learn, and grow in a dynamic development environment.
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: false }}
                        style={{ flex: '0.8', minWidth: '300px', display: 'flex', justifyContent: 'center' }}
                    >
                        <div style={{
                            position: 'relative',
                            width: '300px',
                            height: '400px',
                            borderRadius: '20px',
                            overflow: 'hidden',
                            border: '1px solid var(--glass-border)',
                            boxShadow: '0 20px 40px rgba(0,0,0,0.4)'
                        }}>
                            <img
                                src={lookImg}
                                alt="NareshKumar Portfolio - High Quality Profile Portrait"
                                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                                loading="lazy"
                            />
                            <div style={{
                                position: 'absolute',
                                inset: 0,
                                background: 'linear-gradient(to top, rgba(0,0,0,0.5), transparent)'
                            }}></div>
                        </div>
                    </motion.div>
                </div>

                <div>
                    <h3 style={{ fontSize: '2rem', marginBottom: '30px', color: 'var(--text-color)' }}>Education</h3>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '30px' }}>

                        <motion.div
                            className="glass"
                            style={{ padding: '30px', borderLeft: '5px solid var(--secondary-color)' }}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: false }}
                        >
                            <div style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', marginBottom: '10px' }}>
                                <h4 style={{ fontSize: '1.3rem', fontWeight: 'bold' }}>GRT Institute of Engineering and Technology</h4>
                                <span style={{ color: 'var(--primary-color)' }}>Aug 2020 - May 2023</span>
                            </div>
                            <p style={{ fontSize: '1.1rem', color: 'var(--text-color)', marginBottom: '5px' }}>Bachelor of Engineering - Electronics and Communication</p>
                            <p style={{ color: 'var(--text-secondary)' }}>CGPA: 7.74</p>
                        </motion.div>

                        <motion.div
                            className="glass"
                            style={{ padding: '30px', borderLeft: '5px solid var(--primary-color)' }}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: false }}
                            transition={{ delay: 0.2 }}
                        >
                            <div style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', marginBottom: '10px' }}>
                                <h4 style={{ fontSize: '1.3rem', fontWeight: 'bold' }}>Sri Krishna Polytechnic College</h4>
                                <span style={{ color: 'var(--primary-color)' }}>Jun 2017 - Aug 2020</span>
                            </div>
                            <p style={{ fontSize: '1.1rem', color: 'var(--text-color)', marginBottom: '5px' }}>Diploma in ECE</p>
                            <p style={{ color: 'var(--text-secondary)' }}>CGPA: 8.4</p>
                        </motion.div>

                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
