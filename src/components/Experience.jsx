import React from 'react';
import { motion } from 'framer-motion';

const Experience = () => {
    const experiences = [
        {
            company: "Computer Age Management Service (CAMS)",
            role: "Executive",
            date: "May 2026",
            location: "Chennai",
            points: [
                "Managed large datasets and customer information with high accuracy.",
                "Used SQL and Excel for data analysis, reporting, and record management.",
                "Supported efficient business operations through workflow optimization."
            ]
        },
        {
            company: "ZINNOV MANAGEMENT CONSULTING PRIVATE LIMITED",
            role: "Associate Research Executive",
            date: "Feb 2024 - Mar 2025",
            location: "Nemili",
            points: [
                "Conducted market research and executive profiling to support business decisions.",
                "Analyzed datasets in Excel to generate business insights.",
                "Used LinkedIn Sales Navigator and Recruiter for research and opportunity mapping."
            ]
        }
    ];

    return (
        <section id="experience" className="container" style={{ padding: '100px 20px' }}>
            <h2 className="section-title">Experience</h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '30px' }}>
                {experiences.map((exp, index) => (
                    <motion.div
                        key={index}
                        className="glass"
                        style={{ padding: '40px', position: 'relative' }}
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                    >
                        <div style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', marginBottom: '20px', borderBottom: '1px solid var(--glass-border)', paddingBottom: '20px' }}>
                            <div>
                                <h3 style={{ fontSize: '1.5rem', fontWeight: 'bold', color: 'var(--text-color)' }}>{exp.company}</h3>
                                <h4 style={{ fontSize: '1.2rem', color: 'var(--primary-color)', marginTop: '5px' }}>{exp.role}</h4>
                            </div>
                            <div style={{ textAlign: 'right' }}>
                                <span style={{ display: 'block', color: 'var(--text-secondary)' }}>{exp.date}</span>
                                <span style={{ display: 'block', color: 'var(--text-secondary)' }}>{exp.location}</span>
                            </div>
                        </div>

                        <ul style={{ listStyle: 'none', paddingLeft: '0' }}>
                            {exp.points.map((item, i) => (
                                <li key={i} style={{ marginBottom: '15px', display: 'flex', alignItems: 'start', gap: '10px', color: 'var(--text-secondary)' }}>
                                    <span style={{ color: 'var(--secondary-color)', fontSize: '1.2rem', lineHeight: '1' }}>•</span>
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default Experience;
