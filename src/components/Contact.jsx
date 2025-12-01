import React from 'react';
import { motion } from 'framer-motion';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaLinkedin, FaGithub } from 'react-icons/fa';

const Contact = () => {
    return (
        <section id="contact" className="container" style={{ padding: '100px 20px', paddingBottom: '150px' }}>
            <h2 className="section-title">Contact Me</h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '50px' }}>

                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                >
                    <h3 style={{ fontSize: '2rem', marginBottom: '20px' }}>Get In Touch</h3>
                    <p style={{ color: 'var(--text-secondary)', marginBottom: '40px' }}>
                        I'm currently looking for new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!
                    </p>

                    <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
                            <div style={{ width: '50px', height: '50px', borderRadius: '50%', background: 'rgba(0, 242, 255, 0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--primary-color)', fontSize: '1.2rem' }}>
                                <FaPhone />
                            </div>
                            <div>
                                <h4 style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>Phone</h4>
                                <p>+91 9843718774</p>
                            </div>
                        </div>

                        <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
                            <div style={{ width: '50px', height: '50px', borderRadius: '50%', background: 'rgba(0, 242, 255, 0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--primary-color)', fontSize: '1.2rem' }}>
                                <FaEnvelope />
                            </div>
                            <div>
                                <h4 style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>Email</h4>
                                <p>nareshmohanan@gmail.com</p>
                            </div>
                        </div>

                        <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
                            <div style={{ width: '50px', height: '50px', borderRadius: '50%', background: 'rgba(0, 242, 255, 0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--primary-color)', fontSize: '1.2rem' }}>
                                <FaMapMarkerAlt />
                            </div>
                            <div>
                                <h4 style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>Location</h4>
                                <p>Arakkonam, Ranipet</p>
                            </div>
                        </div>
                    </div>

                    <div style={{ marginTop: '40px', display: 'flex', gap: '20px' }}>
                        <a href="https://linkedin.com/in/nareshkumar-mohanan" target="_blank" rel="noopener noreferrer" className="btn-outline" style={{ borderRadius: '50%', width: '50px', height: '50px', padding: 0, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                            <FaLinkedin />
                        </a>
                        <a href="https://github.com/Naresh-Kumar-Mohanan" target="_blank" rel="noopener noreferrer" className="btn-outline" style={{ borderRadius: '50%', width: '50px', height: '50px', padding: 0, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                            <FaGithub />
                        </a>
                    </div>
                </motion.div>

                <motion.form
                    className="glass"
                    style={{ padding: '40px', display: 'flex', flexDirection: 'column', gap: '20px' }}
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                >
                    <div>
                        <label style={{ display: 'block', marginBottom: '10px', color: 'var(--text-secondary)' }}>Name</label>
                        <input type="text" style={{ width: '100%', padding: '15px', background: 'rgba(255,255,255,0.05)', border: '1px solid var(--glass-border)', borderRadius: '8px', color: 'white', outline: 'none' }} placeholder="Your Name" />
                    </div>
                    <div>
                        <label style={{ display: 'block', marginBottom: '10px', color: 'var(--text-secondary)' }}>Email</label>
                        <input type="email" style={{ width: '100%', padding: '15px', background: 'rgba(255,255,255,0.05)', border: '1px solid var(--glass-border)', borderRadius: '8px', color: 'white', outline: 'none' }} placeholder="Your Email" />
                    </div>
                    <div>
                        <label style={{ display: 'block', marginBottom: '10px', color: 'var(--text-secondary)' }}>Message</label>
                        <textarea rows="5" style={{ width: '100%', padding: '15px', background: 'rgba(255,255,255,0.05)', border: '1px solid var(--glass-border)', borderRadius: '8px', color: 'white', outline: 'none', resize: 'none' }} placeholder="Your Message"></textarea>
                    </div>
                    <button type="submit" className="btn btn-primary" style={{ marginTop: '10px' }}>Send Message</button>
                </motion.form>

            </div>
        </section>
    );
};

export default Contact;
