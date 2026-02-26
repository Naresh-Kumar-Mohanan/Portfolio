import React from 'react';
import { motion } from 'framer-motion';
import { FaJava, FaReact, FaHtml5, FaCss3Alt, FaJs, FaPython, FaGitAlt } from 'react-icons/fa';
import { SiSpringboot, SiHibernate, SiMysql, SiMongodb, SiPostman } from 'react-icons/si';
import './Skills.css';

const Skills = () => {
    const skills = [
        { name: 'Java', icon: <FaJava />, color: '#f89820', rating: 90 },
        { name: 'Spring Boot', icon: <SiSpringboot />, color: '#6db33f', rating: 85 },
        { name: 'React', icon: <FaReact />, color: '#61dafb', rating: 82 },
        { name: 'MySQL', icon: <SiMysql />, color: '#00758f', rating: 88 },
        { name: 'JavaScript', icon: <FaJs />, color: '#f7df1e', rating: 85 },
        { name: 'HTML5', icon: <FaHtml5 />, color: '#e34f26', rating: 95 },
        { name: 'CSS3', icon: <FaCss3Alt />, color: '#1572b6', rating: 92 },
        { name: 'Python', icon: <FaPython />, color: '#3776ab', rating: 75 },
        { name: 'MongoDB', icon: <SiMongodb />, color: '#47a248', rating: 70 },
        { name: 'Git', icon: <FaGitAlt />, color: '#f05032', rating: 80 },
        { name: 'Postman', icon: <SiPostman />, color: '#ff6c37', rating: 85 },
        { name: 'Hibernate', icon: <SiHibernate />, color: '#59666c', rating: 82 },
    ];

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
        <section id="skills" className="container" style={{ padding: '100px 20px', maxWidth: '1200px', margin: '0 auto' }}>
            <h2 className="section-title">Skills</h2>
            <motion.div
                className="skills-grid"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.1 }}
            >
                {skills.map((skill) => (
                    <motion.div
                        key={skill.name}
                        className="skill-card-container"
                        variants={itemVariants}
                    >
                        <div className="skill-card-inner">
                            {/* Front Side */}
                            <div className="skill-card-front">
                                <div className="skill-icon" style={{ color: skill.color }}>
                                    {skill.icon}
                                </div>
                                <h3 className="skill-name">{skill.name}</h3>
                            </div>

                            {/* Back Side */}
                            <div className="skill-card-back">
                                <span className="expertise-label">Expertise</span>
                                <div className="expertise-value">{skill.rating}%</div>
                                <div className="rating-bar-container">
                                    <div
                                        className="rating-bar-fill"
                                        style={{
                                            '--target-width': `${skill.rating}%`,
                                            background: skill.color,
                                            boxShadow: `0 0 10px ${skill.color}80`
                                        }}
                                    />
                                </div>
                                <p style={{ fontSize: '0.7rem', color: 'var(--text-secondary)', marginTop: '10px' }}>Advanced Proficiency</p>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </motion.div>
        </section>
    );
};

export default Skills;
