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
        <h1 className="projects-heading">Projects</h1>
        <div className='project-card-container'>
        {projects.map(project => (
          <a key={project.id} href={project.html_url} target="_blank" rel="noopener noreferrer" className='project-card-link'>
            <div className='project-card'>
              <h3>{project.name}</h3>
              <p>{project.description}</p>
            </div>
          </a>
        ))}
        </div>
      </div>
    </Element>
  );
}

export default ProjectsSection;
