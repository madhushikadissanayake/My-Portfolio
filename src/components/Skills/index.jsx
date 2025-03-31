import React from 'react';
import "./Skills.css";
import { FaReact, FaCss3Alt, FaJs, FaDatabase, FaHtml5 } from 'react-icons/fa';
import { SiTailwindcss, SiMongodb, SiExpress } from 'react-icons/si';

const Skills = () => {
    const skills = [
        { icon: <FaReact size={80} />, name: 'React' },
        { icon: <FaHtml5 size={80} />, name: 'HTML' },
        { icon: <SiTailwindcss size={80} />, name: 'Tailwind' },
        { icon: <FaCss3Alt size={80} />, name: 'CSS' },
        { icon: <SiExpress size={80} />, name: 'Express.js' },
        { icon: <FaJs size={80} />, name: 'JavaScript' },
        { icon: <FaDatabase size={80} />, name: 'MySQL' },
        { icon: <SiMongodb size={80} />, name: 'MongoDB' }
    ];

    return (
        <section id='skills'>
            <div className="section_header center">
                    <h2 className="primary_title">My Skills</h2>
                </div>
            <div className="section_wrapper skills_container">         
            
                <div className="skills_grid">
                    {skills.map((skill, index) => (
                        <div key={index} className="skill_card">
                            {skill.icon}
                            <p>{skill.name}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;
