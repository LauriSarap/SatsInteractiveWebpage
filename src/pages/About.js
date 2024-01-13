import React from 'react';
import './About.css';

const teamMembers = [
    { name: 'Lauri Sarap', role: 'Technical vision', image: 'src/assets/images/lauri_face.jpg' },
    { name: 'Ats Kaup', role: 'The entire art department', image: 'src/assets/images/ats_face.jpg' },
    { name: 'Kaur Vadi', role: 'Technical implementation', image: 'src/assets/images/kaur_face.jpg' },
    { name: 'Laur Saks', role: 'Technical solution', image: 'src/assets/images/laur_face.jpg' }
];

const About = () => {
    return (
        <div className="team-container">
            <h2>Meet our team!</h2>
            <div className="team-grid">
                {teamMembers.map(member => (
                    <div className="team-member" key={member.name}>
                        <img src={member.image} alt={member.name} />
                        <h3>{member.name}</h3>
                        <p>{member.role}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default About;
