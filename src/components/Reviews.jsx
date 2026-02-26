import React from 'react';
import { FaStar } from 'react-icons/fa';
import './Reviews.css';

const Reviews = () => {
    const reviewsData = [
        { name: 'Divya', review: 'Exceptional Java knowledge and very helpful! Highly skilled in Spring Boot.', role: 'Senior Developer' },
        { name: 'Anisha', review: 'Great frontend skills. Love the new portfolio design and the attention to aesthetics.', role: 'UI Designer' },
        { name: 'Shakthivel', review: 'Very hardworking and a natural problem solver. Always delivers on time.', role: 'Project Head' },
        { name: 'Ajay', review: 'Creative and always willing to learn more. A fantastic team player.', role: 'Software Engineer' },
        { name: 'Priya', review: 'Impressive full stack projects! Your backend architecture is very solid.', role: 'Technical Lead' },
        { name: 'Rahul', review: 'A reliable teammate with a bright future in tech. Very smart work ethic.', role: 'Full Stack Dev' },
        { name: 'Sneha', review: 'Love your dedication to coding and perfection. Every detail is well thought out.', role: 'Product Manager' },
        { name: 'Amit', review: 'High quality code and great UI/UX sense. A rare combination of skills.', role: 'Lead Architect' },
        { name: 'Kavita', review: 'Excellent communication and technical skills. Very professional approach.', role: 'QA Engineer' },
        { name: 'Vikram', review: 'Hardworking individual with amazing potential. Great learning curve.', role: 'DevOps Lead' },
        { name: 'Anjali', review: 'Your React implementations are top-notch! Very clean and efficient code.', role: 'Frontend Architect' },
        { name: 'Sandeep', review: 'Fantastic energy and great work ethic. A pleasure to collaborate with.', role: 'Backend Lead' },
        { name: 'Meera', review: 'Professional and very talented developer. Highly impressed with your work.', role: 'HR Manager' },
        { name: 'Arjun', review: 'Strong foundation in Java and Spring Boot. Very reliable in complex tasks.', role: 'Manager' },
        { name: 'Pooja', review: 'Incredible attention to detail in every project. Visually stunning work.', role: 'Design Lead' },
        { name: 'Karthik', review: 'Great mentor and a skilled professional. Always helpful to peers.', role: 'Senior Consultant' },
        { name: 'Lakshmi', review: 'Exceptional speed and precision in development. Very efficient.', role: 'Automation Engineer' },
        { name: 'Naveen', review: 'Your technical depth is really impressive! A true tech enthusiast.', role: 'Solution Architect' },
        { name: 'Swati', review: 'Always brings fresh ideas to the table. Very innovative thinker.', role: 'Analyst' },
        { name: 'Vishal', review: 'Highly motivated and results-oriented. Great problem solving skills.', role: 'Stack Developer' },
        { name: 'Deepa', review: 'Wonderful to work with on complex modules. Very patient and detailed.', role: 'System Analyst' },
        { name: 'Manoj', review: 'Reliable, efficient, and always curious. A true asset to any project.', role: 'Cloud Expert' },
        { name: 'Neha', review: 'Superb styling and modern web aesthetics! Your portfolio is evidence.', role: 'Web Designer' },
        { name: 'Suresh', review: 'Solid backend architectural knowledge and great database optimization.', role: 'DB Admin' },
        { name: 'Ishani', review: 'Your projects showcase real creative talent and deep logic.', role: 'Creative Director' }
    ];

    // List of professional colors for avatars
    const avatarColors = ['#f89820', '#6db33f', '#61dafb', '#00758f', '#f7df1e', '#e34f26', '#1572b6', '#ff0055', '#00f2ff'];

    const getAvatarColor = (name) => {
        const index = name.length % avatarColors.length;
        return avatarColors[index];
    };

    // Double the array for seamless marquee
    const marqueeReviews = [...reviewsData, ...reviewsData];

    return (
        <section id="reviews" className="reviews-section container">
            <h2 className="section-title">Client Reviews</h2>

            <div className="reviews-marquee-wrapper">
                <div className="reviews-marquee-inner">
                    {marqueeReviews.map((item, index) => (
                        <div key={index} className="review-card glass">
                            <div className="reviewer-header">
                                <div
                                    className="reviewer-avatar"
                                    style={{ backgroundColor: getAvatarColor(item.name) }}
                                >
                                    {item.name.charAt(0)}
                                </div>
                                <div className="reviewer-info">
                                    <h4>{item.name}</h4>
                                    <span>{item.role}</span>
                                </div>
                            </div>
                            <div className="stars">
                                <FaStar /> <FaStar /> <FaStar /> <FaStar /> <FaStar />
                            </div>
                            <p className="review-text">&quot;{item.review}&quot;</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Reviews;
