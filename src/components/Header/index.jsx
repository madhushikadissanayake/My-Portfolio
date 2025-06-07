import React from 'react';
import "./Header.css";
import { homebg } from "../../images";
import { FaGithub, FaLinkedin, FaInstagram, FaFacebook } from 'react-icons/fa'; 
import { TypeAnimation } from 'react-type-animation'; 
import { Link } from 'react-scroll';

const Header = () => {
    return(
        <header id='home' className='blur-effect'>
            <div className="section_wrapper header_container">
                <div className="column intro_container blur-effect">
                    <div className="header_info">
                        <div className="header_info_top">
                            Hello! It's <span className='color_primary'>Madhushika Dissanayake</span>
                        </div>                           
                         <div className="header_info_middle">
                              <h1 className='primary_title header_title'>
                                  I'm a <TypeAnimation
                                      sequence={['Web Developer', 1000, 'Web Designer', 1000]} 
                                      wrapper="span"
                                      speed={50}
                                      repeat={Infinity}
                                  />
                              </h1>
                        </div>
                        <div className="social-icons">
                                <a href="https://github.com/madhushikadissanayake" target="_blank" rel="noopener noreferrer">
                                    <FaGithub size={30} />
                                </a>
                                <a href="http://www.linkedin.com/in/madhushika-dissanayake" target="_blank" rel="noopener noreferrer">
                                    <FaLinkedin size={30} />
                                </a>
                                <a href="https://www.instagram.com/madhushika_dissanayake_?igsh=MXA2amJvNzFhcjZ1Zw==" target="_blank" rel="noopener noreferrer">
                                    <FaInstagram size={30} />
                                </a>
                                <a href="https://www.facebook.com/share/1FVfgMsRwP/" target="_blank" rel="noopener noreferrer">
                                    <FaFacebook size={30} />
                                </a>
                            </div>
                        <div className="header_info_bottom">
                            <a href="/Madhushika_Dissanayake_Internship_Resume.pdf" download className='btn'>Download CV</a>
                            <Link to="contact" spy={true} smooth={true} offset={-70} duration={500} className='btn'>
                            Contact Me
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="column profile_wrapper">
                     <div className="profile_photo_container">
                        <img src={homebg} className='profile_photo' alt="" />
                    </div>
                </div>
             </div>
        </header>
    )
}

export default Header;