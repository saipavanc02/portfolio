import React from 'react';
import './ProjectList.css';

const ProjectsList = ({ projects }) => {
  return (
    <section id="projects" className='main'>
      <h2>Projects</h2>
      <div>
        {projects.map((project, index) => (
          <div key={index} className="project-container shadow">
            <div className="project-info-container">
              <h1>{project.projectName}</h1>
              <p>{project.description}</p>
            </div>
            <div className="project-link-container">
              <img className="project-link" src={project.projectLink} alt={project.projectName} />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default ProjectsList;
