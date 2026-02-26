import React from 'react';
import { motion } from 'framer-motion';
import { FaJava, FaReact, FaHtml5, FaCss3Alt, FaJs, FaPython, FaGitAlt, FaDatabase } from 'react-icons/fa';
import { SiSpring, SiSpringboot, SiHibernate, SiMysql, SiMongodb, SiPostman } from 'react-icons/si';

const Skills = () => {
    const skills = [
        { name: 'Java', icon: <FaJava />, color: '#f89820' },
        { name: 'Spring Boot', icon: <SiSpringboot />, color: '#6db33f' },
        { name: 'React', icon: <FaReact />, color: '#61dafb' },
        { name: 'MySQL', icon: <SiMysql />, color: '#00758f' },
        { name: 'JavaScript', icon: <FaJs />, color: '#f7df1e' },
        { name: 'HTML5', icon: <FaHtml5 />, color: '#e34f26' },
        { name: 'CSS3', icon: <FaCss3Alt />, color: '#1572b6' },
        { name: 'Python', icon: <FaPython />, color: '#3776ab' },
        { name: 'MongoDB', icon: <SiMongodb />, color: '#47a248' },
        { name: 'Git', icon: <FaGitAlt />, color: '#f05032' },
        { name: 'Postman', icon: <SiPostman />, color: '#ff6c37' },
        { name: 'Hibernate', icon: <SiHibernate />, color: '#59666c' },
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
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1
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
                viewport={{ once: true }}
                style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))',
                    gap: '30px'
                }}
            >
                {skills.map((skill) => (
                    <motion.div
                        key={skill.name}
                        variants={itemVariants}
                        className="glass"
                        whileHover={{ scale: 1.05, borderColor: skill.color }}
                        style={{
                            padding: '30px',
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            justifyContent: 'center',
                            gap: '15px',
                            cursor: 'pointer',
                            transition: 'all 0.3s ease'
                        }}
                    >
                        <div style={{ fontSize: '3rem', color: skill.color }}>
                            {skill.icon}
                        </div>
                        <h3 style={{ fontSize: '1.1rem', fontWeight: '500' }}>{skill.name}</h3>
                    </motion.div>
                ))}
            </motion.div>
        </section>
    );
};

export default Skills;
