import React from 'react';
import './NewPC.css';

export default function NewPC({ projectTitle, projectDesc, projectSkills, icon }) {
  return (
    <div className="project-card">
        
      {icon && (
        <div className="project-card-img">
          {icon}
        </div>
      )}
        
      <h3 className="project-card-title">{projectTitle}</h3>
      <p className="project-card-desc">{projectDesc}</p>
      <p className="project-card-skills">{projectSkills}</p>
    </div>
  );
}