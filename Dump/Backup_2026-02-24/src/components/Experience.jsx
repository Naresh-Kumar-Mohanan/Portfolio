import React from 'react';
import { motion } from 'framer-motion';

const Experience = () => {
    return (
        <section id="experience" className="container" style={{ padding: '100px 20px' }}>
            <h2 className="section-title">Experience</h2>
            <motion.div
                className="glass"
                style={{ padding: '40px', position: 'relative' }}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
            >
                <div style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', marginBottom: '20px', borderBottom: '1px solid rgba(255,255,255,0.1)', paddingBottom: '20px' }}>
                    <div>
                        <h3 style={{ fontSize: '1.5rem', fontWeight: 'bold', color: 'var(--text-color)' }}>ZINNOV MANAGEMENT CONSULTING PRIVATE LIMITED</h3>
                        <h4 style={{ fontSize: '1.2rem', color: 'var(--primary-color)', marginTop: '5px' }}>Associate Research Executive</h4>
                    </div>
                    <div style={{ textAlign: 'right' }}>
                        <span style={{ display: 'block', color: 'var(--text-secondary)' }}>Feb 2024 - Mar 2025</span>
                        <span style={{ display: 'block', color: 'var(--text-secondary)' }}>Nemili</span>
                    </div>
                </div>

                <ul style={{ listStyle: 'none', paddingLeft: '0' }}>
                    {[
                        "Conducted market research and collected industry and executive-level data to support client strategies.",
                        "Managed and analyzed large datasets using Excel, providing actionable insights for business decisions.",
                        "Leveraged LinkedIn Sales Navigator and Recruiter to identify potential opportunities and enhance research quality."
                    ].map((item, i) => (
                        <li key={i} style={{ marginBottom: '15px', display: 'flex', alignItems: 'start', gap: '10px', color: 'var(--text-secondary)' }}>
                            <span style={{ color: 'var(--secondary-color)', fontSize: '1.2rem', lineHeight: '1' }}>•</span>
                            {item}
                        </li>
                    ))}
                </ul>
            </motion.div>
        </section>
    );
};

export default Experience;
