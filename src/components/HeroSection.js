import React, { useEffect } from 'react';
import '../styles/HeroSection.css'
import Typed from 'typed.js';

function HeroSection() {
    useEffect(() => {
        const typed = new Typed('.typing-element', {
            strings: ['Keenan Serrao', 'Data Scientist', 'Car Enthusiast', 'Photographer', 'Gym Rat'],
            typeSpeed: 50,
            showCursor: true,
            backSpeed: 50,
            backDelay: 2000,
            loop: true
        });

        return () => {
            typed.destroy();
        };
    }, []);

    return (
        <div className="hero-section">
            <span className="typing-element"></span>
        </div>
    );
}

export default HeroSection;
