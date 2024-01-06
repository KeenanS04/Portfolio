import React from 'react';
import { Element } from 'react-scroll';
import '../styles/AboutSection.css'

function AboutSection() {
    return (
        <Element name='about'>
            <div className='about-section' data-aos="fade-up">
                <h2>About Me</h2>
                <p>Hello, I'm Keenan Serrao. [Add your introduction, background, and any other information you wish to include]</p>
            </div>
        </Element>
    );
}

export default AboutSection