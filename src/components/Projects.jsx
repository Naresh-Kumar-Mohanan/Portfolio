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

    // Double the array for seamless marquee
    const marqueeProjects = [...projects, ...projects];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
            }
        }
    };

    const itemVariants = {
        hidden: { y: 30, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                duration: 0.5,
                ease: 'easeOut'
            }
        }
    };

    return (
        <section id="projects" className="container" style={{ padding: '100px 0', overflowX: 'hidden' }}>
            <h2 className="section-title">Projects</h2>

            <div className="project-marquee-wrapper">
                <motion.div
                    className="project-marquee-inner"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.1 }}
                >
                    {marqueeProjects.map((project, index) => (
                        <motion.div
                            key={index}
                            className="project-card-container"
                            variants={itemVariants}
                        >
                            <div className="project-card-inner">
                                {/* Front Side */}
                                <div className="project-card-front glass">
                                    <div className="card-header">
                                        <span className="project-category">{project.category}</span>
                                        <h3 className="project-title">{project.title}</h3>
                                    </div>

                                    <p className="project-desc">{project.description}</p>

                                    <div className="project-tech-stack">
                                        {project.tech.map((t, i) => (
                                            <span key={i} className="tech-badge">{t}</span>
                                        ))}
                                    </div>
                                </div>

                                {/* Back Side */}
                                <div className="project-card-back glass">
                                    <h3 className="flip-title">Project Details</h3>
                                    <p className="flip-info">Explore more about this project</p>

                                    {project.link ? (
                                        <a href={project.link} target="_blank" rel="noopener noreferrer" className="project-link-btn">
                                            <FaExternalLinkAlt /> View Live Site
                                        </a>
                                    ) : (
                                        <div className="coming-soon-badge">
                                            {project.status === 'Coming Soon...' ? (
                                                <><FaTools style={{ marginRight: '8px' }} /> Development In Progress</>
                                            ) : (
                                                <>{project.status}</>
                                            )}
                                        </div>
                                    )}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default Projects;

