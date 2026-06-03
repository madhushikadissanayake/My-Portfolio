import React from 'react';
import './Card.css';
import { FaGithub, FaExternalLinkAlt, FaBehance } from 'react-icons/fa';

const Card = (props) => {
    return (
        <div className="card">
            <div className="picture">
                <img src={props.image} alt={props.title} />
            </div>
            <div className="card_details">
                <div className="card_details_top">
                    <h2 className='title'>{props.title}</h2>
                </div>
                <div className="card_details_middle">
                    <div className="tech_stack">
                        {props.stack.map((tech, techIndex) => (
                            <span key={techIndex} className="tech_button">{tech.name}</span>
                        ))}
                    </div>
                    <p className="description">
                        {props.data.description}
                    </p>
                </div>
                <div className="card_details_bottom">
                    <div className="project_links">
                        {props.data.github && (
                            <a href={props.data.github} target="_blank" rel="noopener noreferrer">
                                <FaGithub size={20} />
                            </a>
                        )}
                        {props.data.website && (
                            <a href={props.data.website} target="_blank" rel="noopener noreferrer">
                                <FaExternalLinkAlt size={20} />
                            </a>
                        )}
                        {props.data.behance && (
                            <a href={props.data.behance} target="_blank" rel="noopener noreferrer">
                                <FaBehance size={24} />
                            </a>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Card;
