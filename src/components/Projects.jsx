import React, { useRef, useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaExternalLinkAlt, FaTools, FaChevronLeft, FaChevronRight } from 'react-icons/fa';
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

    const scrollRef = useRef(null);
    const [scrollProgress, setScrollProgress] = useState(0);
    const [canScrollLeft, setCanScrollLeft] = useState(false);
    const [canScrollRight, setCanScrollRight] = useState(true);

    const handleScroll = () => {
        const el = scrollRef.current;
        if (!el) return;
        const scrollLeft = el.scrollLeft;
        const maxScroll = el.scrollWidth - el.clientWidth;
        const progress = maxScroll > 0 ? (scrollLeft / maxScroll) * 100 : 0;
        setScrollProgress(progress);
        setCanScrollLeft(scrollLeft > 10);
        setCanScrollRight(scrollLeft < maxScroll - 10);
    };

    useEffect(() => {
        const el = scrollRef.current;
        if (el) {
            el.addEventListener('scroll', handleScroll);
            handleScroll(); // Initial check
            return () => el.removeEventListener('scroll', handleScroll);
        }
    }, []);

    const scrollBy = (direction) => {
        const el = scrollRef.current;
        if (el) {
            el.scrollBy({ left: direction * 400, behavior: 'smooth' });
        }
    };

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
        <section id="projects" className="container" style={{ padding: '100px 0' }}>
            <div className="projects-header">
                <h2 className="section-title">Projects</h2>
                <div className="scroll-controls">
                    <button
                        className={`scroll-arrow ${!canScrollLeft ? 'disabled' : ''}`}
                        onClick={() => scrollBy(-1)}
                        aria-label="Scroll left"
                    >
                        <FaChevronLeft />
                    </button>
                    <button
                        className={`scroll-arrow ${!canScrollRight ? 'disabled' : ''}`}
                        onClick={() => scrollBy(1)}
                        aria-label="Scroll right"
                    >
                        <FaChevronRight />
                    </button>
                </div>
            </div>

            <div className="project-marquee-wrapper" ref={scrollRef}>
                <motion.div
                    className="project-marquee-inner"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.1 }}
                >
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            className="project-card-v2 glass"
                            variants={itemVariants}
                        >
                            <div className="project-main-content">
                                <div className="card-top">
                                    <span className="project-category-v2">{project.category}</span>
                                    <h3 className="project-title-v2">{project.title}</h3>
                                </div>

                                <div className="project-details-v2">
                                    <p className="project-desc-v2">{project.description}</p>
                                    <div className="project-tech-v2">
                                        {project.tech.map((t, i) => (
                                            <span key={i} className="tech-tag-v2">{t}</span>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            <div className="project-action-panel">
                                <div className="action-wrapper">
                                    <span className="project-status-text">{project.status}</span>
                                    {project.link ? (
                                        <a href={project.link} target="_blank" rel="noopener noreferrer" className="project-action-btn">
                                            <FaExternalLinkAlt /> Open Project
                                        </a>
                                    ) : (
                                        <div className="project-action-placeholder">
                                            <FaTools /> Coming Soon
                                        </div>
                                    )}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>

            {/* Scroll Progress Bar */}
            <div className="scroll-progress-track">
                <div
                    className="scroll-progress-fill"
                    style={{ width: `${scrollProgress}%` }}
                ></div>
            </div>
        </section>
    );
};

export default Projects;

