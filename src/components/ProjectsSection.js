import React, { useState, useEffect } from 'react';
import { Element } from 'react-scroll';
import axios from 'axios';
import '../styles/ProjectsSection.css';

function ProjectsSection() {
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        const fetchProjects = async () => {
            try {
                const response = await axios.get('https://api.github.com/users/KeenanS04/repos');
                const filteredProjects = response.data.filter(repo => repo.topics.includes('project'));
                setProjects(filteredProjects);
                console.log(filteredProjects)
            } catch (error) {
                console.error('Error fetching projects:', error);
            }
        };

        fetchProjects();
    }, []);

    return (
    <Element name='projects'>
      <div className='projects-section' data-aos="fade-up">
        <h1>Projects</h1>
        <div className='projects-container'> {/* This div will contain all project cards */}
          {projects.map(project => (
            <div key={project.id} className='project-card-container'>
              <a href={project.html_url} target="_blank" rel="noopener noreferrer" className='project-card-link'>
                <div className='project-card'>
                  <h3>{project.name}</h3>
                  <p>{project.description}</p>
                </div>
              </a>
            </div>
          ))}
        </div>
      </div>
    </Element>
  );
}

export default ProjectsSection;
