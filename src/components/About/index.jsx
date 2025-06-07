import React from 'react';
import './About.css';
import { aboutbg } from '../../images';
import { Link } from 'react-scroll';

const About = () => {
    return (
        <section id='about'>
            <div className="section_wrapper about_container">
                <div className="me_container blur-effect">
                    <div className="photo_container">
                        <img src={aboutbg} alt="Profile" />
                    </div>
                </div>
                <div className="section_header">
                    <h2 className="primary_title">About Me</h2>
                    <p className="text_muted description">
                    I am a passionate Web Developer dedicated to building scalable and user-friendly applications.
                    With expertise in both frontend and backend development, I thrive in dynamic environments and enjoy
                    solving complex challenges. My adaptability and teamwork skills make me a valuable contributor to
                    any project. I am eager to expand my knowledge and take on opportunities that drive innovation 
                    and impact.
                    </p>
                    <div className="metrics_container">
                        <div className="metric">
                            <h3>10</h3>
                            <p>Completed Projects</p>
                        </div>
                        <div className="metric">
                            <h3>5</h3>
                            <p>Achievements</p>
                        </div>
                    </div>
                    <div className="about_info_bottom">
                        <a href="/Madhushika_Dissanayake_Internship_ Resume.pdf" download className='about_btn'>Download CV</a>
                        <Link to="contact" spy={true} smooth={true} offset={-70} duration={500} className='about_btn'>
                            Contact Me
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default About;