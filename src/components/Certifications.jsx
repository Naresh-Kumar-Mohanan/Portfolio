import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaCertificate, FaAward, FaExternalLinkAlt, FaTimes, FaPalette, FaBezierCurve } from 'react-icons/fa';
import './Certifications.css';

// Import certificates
import uiUXCert from '../assets/Certificates/UI UX.pdf';
import graphicDesignCert from '../assets/Certificates/Intro to Graphic Design with Photoshop.pdf';

const Certifications = () => {
    const [selectedCert, setSelectedCert] = useState(null);

    const certifications = [
        {
            title: "UI UX",
            issuer: "Great Learning",
            date: "March 2026",
            icon: <FaBezierCurve />,
            file: uiUXCert,
            link: "https://www.mygreatlearning.com/certificate/JXYXBSUC?referrer_code=GLNANBZTTOR-U"
        },
        {
            title: "Intro to Graphic Design with Photoshop",
            issuer: "Great Learning",
            date: "August 2025",
            icon: <FaPalette />,
            file: graphicDesignCert,
            link: "https://www.mygreatlearning.com/certificate/YSYSIRCA?referrer_code=GLNANBZTTOR-U"
        }
    ];

    const openModal = (cert) => {
        setSelectedCert(cert);
        document.body.style.overflow = 'hidden';
    };

    const closeModal = () => {
        setSelectedCert(null);
        document.body.style.overflow = 'unset';
    };

    return (
        <section id="certifications" className="certifications-section container">
            <motion.h2 
                className="section-title"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
            >
                Certifications
            </motion.h2>

            <div className="certs-grid">
                {certifications.map((cert, index) => (
                    <motion.div 
                        key={index}
                        className="cert-card glass"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                    >
                        <div className="cert-icon">
                            {cert.icon}
                        </div>
                        <span className="cert-date">{cert.date}</span>
                        <h3 className="cert-title">{cert.title}</h3>
                        <p className="cert-issuer">{cert.issuer}</p>
                        <div className="cert-actions">
                            <button className="cert-link btn-view" onClick={() => openModal(cert)}>
                                View Document <FaExternalLinkAlt size={12} />
                            </button>
                            <a href={cert.link} className="cert-link" target="_blank" rel="noopener noreferrer">
                                Verify Online
                            </a>
                        </div>
                    </motion.div>
                ))}
            </div>

            {/* Certificate Modal */}
            <AnimatePresence>
                {selectedCert && (
                    <motion.div 
                        className="cert-modal-overlay"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={closeModal}
                    >
                        <motion.div 
                            className="cert-modal-content glass"
                            initial={{ scale: 0.8, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.8, opacity: 0 }}
                            onClick={(e) => e.stopPropagation()}
                        >
                            <button className="modal-close" onClick={closeModal}>
                                <FaTimes />
                            </button>
                            <div className="modal-header">
                                <h3>{selectedCert.title}</h3>
                                <p>{selectedCert.issuer} - {selectedCert.date}</p>
                            </div>
                            <div className="modal-body">
                                <iframe 
                                    src={`${selectedCert.file}#toolbar=0`} 
                                    title={selectedCert.title}
                                    width="100%" 
                                    height="100%"
                                />
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
};

export default Certifications;
