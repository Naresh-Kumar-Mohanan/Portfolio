import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const Projects = () => {
    const projects = [
        {
            title: 'Organization Management System',
            category: 'Full Stack Web App',
            description: 'A comprehensive system to manage employees, departments, and tasks. Built with Java Spring Boot, React, and MySQL.',
            tech: ['Java', 'Spring Boot', 'React', 'MySQL'],
            date: 'Oct 2025'
        },
        {
            title: 'Mini E-commerce Web App',
            category: 'Frontend',
            description: 'A responsive e-commerce interface allowing users to browse products, add to cart, and manage orders.',
            tech: ['HTML', 'CSS', 'JavaScript'],
            date: 'Aug 2025'
        },
        {
            title: 'Todo List & Calculator',
            category: 'Web Applications',
            description: 'Utility applications for task management and calculations, featuring API integration for weather updates.',
            tech: ['JavaScript', 'API', 'CSS'],
            date: 'Sep 2025'
        },
        {
            title: 'GPS Based Tracking System',
            category: 'IoT',
            description: 'Mobile notification system for protecting wildlife animals using GPS tracking.',
            tech: ['IoT', 'Embedded Systems'],
            date: '2023'
        }
    ];

    return (
        <section id="projects" className="container" style={{ padding: '100px 20px' }}>
            <h2 className="section-title">Projects</h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '40px' }}>
                {projects.map((project, index) => (
                    <motion.div
                        key={index}
                        className="glass"
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 }}
                        whileHover={{ y: -10 }}
                        style={{ padding: '30px', position: 'relative', overflow: 'hidden' }}
                    >
                        <div style={{
                            position: 'absolute',
                            top: 0,
                            left: 0,
                            width: '100%',
                            height: '5px',
                            background: 'var(--accent-gradient)'
                        }}></div>

                        <span style={{
                            fontSize: '0.8rem',
                            color: 'var(--primary-color)',
                            textTransform: 'uppercase',
                            letterSpacing: '1px',
                            fontWeight: '600'
                        }}>
                            {project.category}
                        </span>

                        <h3 style={{ fontSize: '1.5rem', margin: '10px 0', fontWeight: '700' }}>{project.title}</h3>

                        <p style={{ color: 'var(--text-secondary)', marginBottom: '20px', lineHeight: '1.6' }}>
                            {project.description}
                        </p>

                        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', marginBottom: '25px' }}>
                            {project.tech.map((t, i) => (
                                <span key={i} style={{
                                    background: 'rgba(255,255,255,0.1)',
                                    padding: '5px 12px',
                                    borderRadius: '20px',
                                    fontSize: '0.85rem',
                                    color: '#fff'
                                }}>
                                    {t}
                                </span>
                            ))}
                        </div>

                        <div style={{ display: 'flex', gap: '20px' }}>
                            <button className="btn-outline" style={{ padding: '8px 20px', fontSize: '0.9rem', display: 'flex', alignItems: 'center', gap: '8px' }}>
                                <FaGithub /> Code
                            </button>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default Projects;
