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
        

            
        </FadeIn>

    </div>
  );
}