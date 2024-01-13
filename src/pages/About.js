import React from 'react';
import './About.css';
import atsFace from '../assets/images/ats_face.jpg';
import kaurFace from '../assets/images/kaur_face.jpeg';
import laurFace from '../assets/images/laur_face.jpg';
import lauriFace from '../assets/images/lauri_face.jpg';

const teamMembers = [
    { name: 'Lauri Sarap', role: 'Technical vision', image: lauriFace },
    { name: 'Ats Kaup', role: 'The entire art department', image: atsFace },
    { name: 'Kaur Vadi', role: 'Technical implementation', image: kaurFace },
    { name: 'Laur Saks', role: 'Technical solution', image: laurFace }
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
