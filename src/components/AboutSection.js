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
                        <p>
                            Hello, I'm Keenan Serrao, a student at UC San Diego studying Data Science. I am a determined worker with a drive to 
                            succeed and a passion for learning. I am currently looking for internships and opportunities to further my skills. I
                            have experience with Python, Java, and SQL, HTML, CSS, and JavaScript, with knowledge in frameworks such as React 
                            and Bootstrap. I am also familiar with data science tools such as Pandas, NumPy, Scikit-Learn, TensorFlow, PyTorch, 
                            Matplotlib, as well as cloud computing services such as AWS. I am a quick learner and am always looking to expand 
                            my skillset. Please feel free to contact me using the links below.
                        </p>
                    </div>
                </div>
            </div>
        </Element>
    );
}

export default AboutSection