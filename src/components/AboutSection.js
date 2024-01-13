import React from 'react';
import { Element } from 'react-scroll';
import '../styles/AboutSection.css'
import headshot from '../assets/Headshot.jpg'

function AboutSection() {
    return (
        <Element name='about'>
            <div className='about-section' data-aos="fade-up">
                <h1>About Me</h1>
                <div className="about-content">
                    <img src={headshot} alt="Keenan Serrao" className="about-image" />
                    <div className="about-text">
                        <p>Hello, I'm Keenan Serrao, a student at UC San Diego studying Data Science.</p>
                    </div>
                </div>
            </div>
        </Element>
    );
}

export default AboutSection