import React from 'react';
import './Footer.css';
import { FaGithub, FaLinkedin, FaFacebook, FaInstagram, FaEnvelope, FaPhone } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer id="footer">
            <div className="footer_content">
                <div className="contact_info">
                    <p><FaEnvelope /> madhushikadissanayake59@gmail.com</p>
                </div>
                <div className="social_links">
                    <a href="https://github.com/madhushikadissanayake" target="_blank" rel="noopener noreferrer">
                        <FaGithub size={30} /></a>
                     <a href="http://www.linkedin.com/in/madhushika-dissanayake" target="_blank" rel="noopener noreferrer">
                        <FaLinkedin size={30} /></a>
                    <a href="https://www.instagram.com/madhushika_dissanayake_?igsh=MXA2amJvNzFhcjZ1Zw==" target="_blank" rel="noopener noreferrer">
                        <FaInstagram size={30} /></a>
                    <a href="https://www.facebook.com/share/1FVfgMsRwP/" target="_blank" rel="noopener noreferrer">
                        <FaFacebook size={30} /></a>
                </div>
                <div className="copyright">
                    <p>Copyright @ 2025 Madhushika Dissanayake. All Rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
