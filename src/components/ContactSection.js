import React from 'react';
import { Element } from 'react-scroll';
import '../styles/ContactSection.css';

function ContactSection() {
    return (
        <Element name='contact'>
            <div className='contact-section' data-aos="fade-up">
                <h1>Contact Me</h1>
                <form action="https://formspree.io/f/mqkrkrkn" method="POST">
                    <input type="text" name="name" placeholder="Your Name" required />
                    <input type="email" name="_replyto" placeholder="Your Email" required />
                    <textarea name="message" placeholder="Your Message" required></textarea>
                    <button type="submit">Send Message</button>
                </form>
            </div>
        </Element>
    );
}

export default ContactSection;
