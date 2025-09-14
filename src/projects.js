import React from 'react';

function Project({ project }) {
  return (
    <div className="project-card">
      <h3 className="project-title">{project.title}</h3>
      <p className="project-description">{project.description}</p>
      <div className="tech-tags">
        {project.technologies.map((tech, index) => (
          <span key={index} className="tech-tag">{tech}</span>
        ))}
      </div>
      <a href={project.link} target="_blank" rel="noopener noreferrer" className="view-project-btn">
        View Project
      </a>
    </div>
  );
}

export default Project;