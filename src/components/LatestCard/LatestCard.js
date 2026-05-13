import React from 'react';
import './LatestCard.css';

export default function LatestCard({ title, description, skills, image, demoLink, githubLink }) {
  return (
    <div className="pc-card">
      <div className="pc-image-wrap">
        <img src={image} alt={title} className="pc-image" />
      </div>

      <div className="pc-body">
        <h3 className="pc-title">{title}</h3>
        <p className="pc-desc">{description}</p>
        <p className="latest-project-card-skills">{skills}</p>

        {/* <div className="pc-skills">
          {skills.slice(0, 3).map((skill, i) => (
            <span className="pc-skill-tag" key={i}>{skill}</span>
          ))}
          {skills.length > 3 && (
            <span className="pc-skill-tag pc-skill-more">+{skills.length - 3} more</span>
          )}
        </div> */}

        {/* <div className="pc-actions">
          {demoLink && (
            <a href={demoLink} className="pc-btn-demo" target="_blank" rel="noreferrer">
              Live Demo
            </a>
          )}
          {githubLink && (
            <a href={githubLink} className="pc-btn-github" target="_blank" rel="noreferrer">
              GitHub
            </a>
          )}
        </div> */}
      </div>
    </div>
  );
}