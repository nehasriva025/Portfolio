import React from 'react';
import './Projects.css';
import FadeIn from '../../animations/FadeIn';


export default function Projects() {
  return (
    <div id="projects" className="section">
        <FadeIn blur={true} duration={2000} easing="ease-out" initialOpacity={0}>
            <div className="section-title">
               <h1>Projects</h1>
               <div className="title-line"></div>
             </div>

             <div className="projects-grid">
                <div className="project-card">
                    <h2>AI-Powered Health Tracker</h2>
                    <p>An application that uses machine learning to analyze user health data and provide personalized wellness recommendations.</p>
                </div>
            </div>
        

            
        </FadeIn>

    </div>
  );
}