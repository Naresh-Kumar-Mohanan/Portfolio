import React, { useRef, useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaExternalLinkAlt, FaTools, FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import './Projects.css';

const Projects = () => {
    const projects = [
        {
            title: 'Organization Management System',
            category: 'Full Stack Web App',
            description: 'Developed a web application to manage employees, departments, projects, and organizational operations. Built with Java Spring Boot, React, and MySQL.',
            tech: ['Java', 'Spring Boot', 'React', 'MySQL'],
            link: null,
            status: 'Coming Soon...',
            date: 'OCT - 2025'
        },
        {
            title: 'Food Ordering Web Application',
            category: 'Full Stack Web App',
            description: 'Built an online food ordering platform with menu browsing and order management features. Built with Java Spring Boot, React, and MySQL.',
            tech: ['Java', 'Spring Boot', 'React', 'MySQL'],
            link: null,
            status: 'Coming Soon...',
            date: '2025'
        },
        {
            title: 'School Management Website',
            category: 'Frontend Web App',
            description: 'Created a responsive website to display school information, courses, and announcements using React JS.',
            tech: ['React', 'JavaScript', 'HTML', 'CSS'],
            link: null,
            status: 'Coming Soon...',
            date: '2025'
        },
        {
            title: 'Web Scraping Tool Content Extraction Application',
            category: 'Utility Application',
            description: 'Developed a tool to extract and organize content from websites automatically.',
            tech: ['JavaScript', 'HTML', 'CSS'],
            link: null,
            status: 'Coming Soon...',
            date: '2025'
        },
        {
            title: 'GPS Based Tracking and Notification System',
            category: 'IoT / Physical Project',
            description: 'Built an IoT-based system to track wildlife animals and send location alerts through mobile notifications.',
            tech: ['IoT', 'Embedded Systems', 'GSM'],
            link: null,
            status: 'Physical Project',
            date: '2023'
        },
        {
            title: 'Railway Track Monitoring System',
            category: 'Embedded Systems',
            description: 'Developed a Zigbee-based monitoring system to detect and report railway track conditions.',
            tech: ['Zigbee', 'Sensors', 'Microcontroller'],
            link: null,
            status: 'Physical Project',
            date: '2020'
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
                                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
                                        <span className="project-category-v2">{project.category}</span>
                                        {project.date && <span style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', fontWeight: '500' }}>{project.date}</span>}
                                    </div>
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

