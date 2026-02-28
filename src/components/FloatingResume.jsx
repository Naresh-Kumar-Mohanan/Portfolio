import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaDownload, FaTimes, FaFilePdf } from 'react-icons/fa';
import './FloatingResume.css';

const FloatingResume = () => {
    const [isOpen, setIsOpen] = useState(false);
    const resumeUrl = "/Portfolio/NareshKumar Resume.pdf"; // Use full path for GitHub Pages compatibility

    const toggleModal = () => setIsOpen(!isOpen);

    return (
        <>
            <div className="floating-resume-container">
                <motion.button
                    className="floating-resume-btn"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={toggleModal}
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ type: 'spring', stiffness: 260, damping: 20 }}
                    aria-label="View Resume"
                >
                    <span className="nk-logo-text">CV</span>
                </motion.button>
            </div>

            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        className="resume-modal-overlay"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={toggleModal}
                    >
                        <motion.div
                            className="resume-modal-content"
                            initial={{ scale: 0.8, opacity: 0, y: 50 }}
                            animate={{ scale: 1, opacity: 1, y: 0 }}
                            exit={{ scale: 0.8, opacity: 0, y: 50 }}
                            onClick={(e) => e.stopPropagation()}
                        >
                            <div className="resume-modal-header">
                                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                                    <FaFilePdf style={{ color: '#ff4444', fontSize: '1.5rem' }} />
                                    <h3>NareshKumar_Resume.pdf</h3>
                                </div>
                                <button className="close-icon-btn" onClick={toggleModal} style={{ background: 'transparent', border: 'none', color: 'var(--text-color)', fontSize: '1.5rem', cursor: 'pointer' }}>
                                    <FaTimes />
                                </button>
                            </div>

                            <div className="resume-modal-body">
                                <iframe
                                    src={`${resumeUrl}#toolbar=0`}
                                    title="Resume PDF"
                                    className="resume-iframe"
                                >
                                    <p>Your browser does not support iframes.
                                        <a href={resumeUrl}>Download the PDF</a>
                                    </p>
                                </iframe>
                            </div>

                            <div className="resume-modal-footer">
                                <button className="close-modal-btn" onClick={toggleModal}>
                                    Close
                                </button>
                                <a
                                    href={resumeUrl}
                                    download="NareshKumar_Resume.pdf"
                                    className="download-resume-btn"
                                >
                                    <FaDownload /> Download Resume
                                </a>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};

export default FloatingResume;
