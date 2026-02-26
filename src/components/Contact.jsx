import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaLinkedin, FaGithub } from 'react-icons/fa';
import emailjs from '@emailjs/browser';

import './Contact.css';

const Contact = () => {
    const form = useRef();
    const [status, setStatus] = useState('');
    const [loading, setLoading] = useState(false);

    const sendEmail = (e) => {
        e.preventDefault();
        setLoading(true);

        // Service ID: Naresh_portfolio
        // Replace 'YOUR_TEMPLATE_ID' and 'YOUR_PUBLIC_KEY' with your actual IDs
        emailjs.sendForm('Naresh_portfolio', 'Lucky_resume_temp-Id', form.current, '-Q_kcxm563vV5bpZc')
            .then((result) => {
                console.log("SUCCESS!", result.text);
                setStatus('SUCCESS');
                form.current.reset();
            }, (error) => {
                console.error("FAILED...", error);
                setStatus('FAILED');
            })
            .finally(() => {
                setLoading(false);
                setTimeout(() => setStatus(''), 5000);
            });
    };

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
                        I&apos;m currently looking for new opportunities. Whether you have a question or just want to say hi, I&apos;ll try my best to get back to you!
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
                        <a href="https://linkedin.com/in/nareshkumar-mohanan" target="_blank" rel="noopener noreferrer" className="btn-outline" style={{ borderRadius: '50%', width: '50px', height: '50px', padding: 0, display: 'flex', alignItems: 'center', justifyContent: 'center' }} aria-label="LinkedIn Profile">
                            <FaLinkedin />
                        </a>
                        <a href="https://github.com/Naresh-Kumar-Mohanan" target="_blank" rel="noopener noreferrer" className="btn-outline" style={{ borderRadius: '50%', width: '50px', height: '50px', padding: 0, display: 'flex', alignItems: 'center', justifyContent: 'center' }} aria-label="GitHub Profile">
                            <FaGithub />
                        </a>
                    </div>
                </motion.div>

                <div className="contact-card-container">
                    {/* Animated Cat */}
                    <motion.div
                        className="cat-container"
                        animate={{
                            y: [60, 0, 0, 60],
                        }}
                        transition={{
                            duration: 4,
                            repeat: Infinity,
                            repeatDelay: 3,
                            times: [0, 0.1, 0.9, 1]
                        }}
                    >
                        <motion.div
                            className="speech-bubble"
                            animate={{ opacity: [0, 0, 1, 1, 0] }}
                            transition={{
                                duration: 4,
                                repeat: Infinity,
                                repeatDelay: 3,
                                times: [0, 0.2, 0.3, 0.8, 0.9]
                            }}
                        >
                            Hey Helloo! 🐾
                        </motion.div>
                        <div className="cat">
                            <div className="cat-head">
                                <div className="cat-ear left"></div>
                                <div className="cat-ear right"></div>
                                <div className="cat-eye left"></div>
                                <div className="cat-eye right"></div>
                                <div className="cat-nose"></div>
                            </div>
                        </div>
                    </motion.div>

                    <motion.form
                        ref={form}
                        onSubmit={sendEmail}
                        className="glass"
                        style={{ padding: '40px', display: 'flex', flexDirection: 'column', gap: '20px', position: 'relative', zIndex: 2 }}
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <div>
                            <label style={{ display: 'block', marginBottom: '10px', color: 'var(--text-secondary)' }}>Name</label>
                            <input type="text" name="user_name" required style={{ width: '100%', padding: '15px', background: 'var(--glass-bg)', border: '1px solid var(--glass-border)', borderRadius: '8px', color: 'var(--text-color)', outline: 'none' }} placeholder="Your Name" aria-label="Your Name" />
                        </div>
                        <div>
                            <label style={{ display: 'block', marginBottom: '10px', color: 'var(--text-secondary)' }}>Email</label>
                            <input type="email" name="user_email" required style={{ width: '100%', padding: '15px', background: 'var(--glass-bg)', border: '1px solid var(--glass-border)', borderRadius: '8px', color: 'var(--text-color)', outline: 'none' }} placeholder="Your Email" aria-label="Your Email" />
                        </div>
                        <div>
                            <label style={{ display: 'block', marginBottom: '10px', color: 'var(--text-secondary)' }}>Message</label>
                            <textarea name="message" required rows="5" style={{ width: '100%', padding: '15px', background: 'var(--glass-bg)', border: '1px solid var(--glass-border)', borderRadius: '8px', color: 'var(--text-color)', outline: 'none', resize: 'none' }} placeholder="Your Message" aria-label="Your Message"></textarea>
                        </div>
                        <button
                            type="submit"
                            className="btn btn-primary"
                            style={{ marginTop: '10px' }}
                            disabled={loading}
                        >
                            {loading ? 'Sending...' : 'Send Message'}
                        </button>

                        {status === 'SUCCESS' && (
                            <p style={{ color: '#4caf50', textAlign: 'center', marginTop: '10px' }}>Message sent successfully! ✨</p>
                        )}
                        {status === 'FAILED' && (
                            <p style={{ color: '#f44336', textAlign: 'center', marginTop: '10px' }}>Failed to send message. Please try again or email directly. ❌</p>
                        )}
                    </motion.form>

                </div>
            </div>
        </section>
    );
};

export default Contact;
