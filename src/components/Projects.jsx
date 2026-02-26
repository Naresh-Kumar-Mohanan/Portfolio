import React from 'react';
import { FaExternalLinkAlt, FaTools } from 'react-icons/fa';
import './Projects.css';

const Projects = () => {
    const projects = [
        {
            title: 'Organization Management System',
            category: 'Full Stack Web App',
            description: 'A comprehensive system to manage employees, departments, and tasks. Built with Java Spring Boot, React, and MySQL.',
            tech: ['Java', 'Spring Boot', 'React', 'MySQL'],
            link: null,
            status: 'Coming Soon...'
        },
        {
            title: 'Mini E-commerce Web App',
            category: 'Frontend',
            description: 'A responsive e-commerce interface allowing users to browse products, add to cart, and manage orders.',
            tech: ['HTML', 'CSS', 'JavaScript'],
            link: 'https://shopbynk.netlify.app/',
            status: 'Live Demo'
        },
        {
            title: 'Todo List Application',
            category: 'Web Applications',
            description: 'Advanced task management application features a clean UI and persistent data handling.',
            tech: ['JavaScript', 'HTML', 'CSS'],
            link: 'https://todobynk.netlify.app/',
            status: 'Live Demo'
        },
        {
            title: 'Interactive Calculator',
            category: 'Web Applications',
            description: 'A powerful calculator application with complex arithmetic capabilities and a sleek design.',
            tech: ['JavaScript', 'CSS', 'HTML'],
            link: 'https://calcbynk.netlify.app/',
            status: 'Live Demo'
        },
        {
            title: 'GPS Based Tracking System',
            category: 'IoT / Physical Project',
            description: 'Mobile notification system for protecting wildlife animals using GPS tracking hardware.',
            tech: ['IoT', 'Embedded Systems', 'GSM'],
            link: null,
            status: 'Physical Project'
        },
        {
            title: 'Railway Monitoring System',
            category: 'Embedded Systems',
            description: 'Wireless monitoring and safety system for railway tracks using Zigbee technology.',
            tech: ['Zigbee', 'Sensors', 'Microcontroller'],
            link: null,
            status: 'Physical Project'
        }
    ];

    // Duplicate projects for seamless marquee
    const marqueeProjects = [...projects, ...projects];

    return (
        <section id="projects" className="container" style={{ padding: '100px 0', maxWidth: '100vw', overflowX: 'hidden' }}>
            <h2 className="section-title">Projects</h2>

            <div className="project-marquee-wrapper">
                <div className="project-marquee-inner">
                    {marqueeProjects.map((project, index) => (
                        <div
                            key={index}
                            className="projects-container"
                        >
                            <div className="projects-card-inner">
                                {/* Front Side */}
                                <div className="projects-card-front glass">
                                    <span style={{
                                        fontSize: '0.8rem',
                                        color: 'var(--primary-color)',
                                        textTransform: 'uppercase',
                                        letterSpacing: '1px',
                                        fontWeight: '600'
                                    }}>
                                        {project.category}
                                    </span>

                                    <h3 style={{ fontSize: '1.5rem', margin: '15px 0', fontWeight: '700' }}>{project.title}</h3>

                                    <p style={{ color: 'var(--text-secondary)', marginBottom: '25px', lineHeight: '1.6', fontSize: '0.95rem' }}>
                                        {project.description}
                                    </p>

                                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginTop: 'auto' }}>
                                        {project.tech.map((t, i) => (
                                            <span key={i} style={{
                                                background: 'var(--glass-bg)',
                                                padding: '4px 10px',
                                                borderRadius: '20px',
                                                fontSize: '0.75rem',
                                                color: 'var(--text-color)',
                                                border: '1px solid var(--glass-border)'
                                            }}>
                                                {t}
                                            </span>
                                        ))}
                                    </div>
                                </div>

                                {/* Back Side */}
                                <div className="projects-card-back glass">
                                    <h3 style={{ marginBottom: '20px' }}>Explore Project</h3>
                                    {project.link ? (
                                        <a href={project.link} target="_blank" rel="noopener noreferrer" className="project-link-btn">
                                            <FaExternalLinkAlt /> View Live Site
                                        </a>
                                    ) : (
                                        <div className="coming-soon-badge">
                                            {project.status === 'Coming Soon...' ? (
                                                <><FaTools style={{ marginRight: '8px' }} /> Development in Progress</>
                                            ) : (
                                                <>{project.status}</>
                                            )}
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;

