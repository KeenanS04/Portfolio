import React from 'react';
import '../styles/Navbar.css'
import { Link } from 'react-scroll';

function Navbar({ className }) {
    return (
        <nav className={className}>
            <ul>
                <li><Link to="about" smooth={true} duration={350}>About</Link></li>
                <li><Link to="projects" smooth={true} duration={350}>Projects</Link></li>
                <li><Link to="contact" smooth={true} duration={350}>Contact</Link></li>
            </ul>
        </nav>
    );
}

export default Navbar;