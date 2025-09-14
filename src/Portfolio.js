import React, { useState } from 'react';
// Import the component for a single project
import Project from './projects';
// Import the projects data array with a unique name
import projectsData from './projectsData';

function Portfolio() {
  const [activeFilter, setActiveFilter] = useState('All');

  // Use the new variable name here
  const filteredProjects = activeFilter === 'All' ? projectsData : projectsData.filter(project => project.category === activeFilter);

  return (
    <div className="portfolio-container">
      <h1 className="portfolio-heading">My Projects</h1>

      <div className="filter-tabs">
        <button
          className={`filter-tab ${activeFilter === 'All' ? 'active' : ''}`}
          onClick={() => setActiveFilter('All')}
        >
          All
        </button>
        <button
          className={`filter-tab ${activeFilter === 'Full Stack' ? 'active' : ''}`}
          onClick={() => setActiveFilter('Full Stack')}
        >
          Full Stack
        </button>
        <button
          className={`filter-tab ${activeFilter === 'Personal' ? 'active' : ''}`}
          onClick={() => setActiveFilter('Personal')}
        >
          Personal
        </button>
        <button
          className={`filter-tab ${activeFilter === 'Portfolio' ? 'active' : ''}`}
          onClick={() => setActiveFilter('Portfolio')}
        >
          Portfolio
        </button>
      </div>

      <div className="projects-grid">
        {filteredProjects.map(project => (
          <Project key={project.id} project={project} />
        ))}
      </div>
    </div>
  );
}

export default Portfolio;