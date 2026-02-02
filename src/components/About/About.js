import React from 'react';
import './About.css';
import FadeIn from '../../animations/FadeIn';


export default function About() {
  return (
    <div id="about" className="section">
        <FadeIn blur={true} duration={2000} easing="ease-out" initialOpacity={0}>
             <div className="section-title">
               <h1>About Me</h1>
               <div className="title-line"></div>
             </div>
                     <p>I'm a Software Developer from the University of Waterloo and currently based in Toronto. </p>
             <p>My current passions are AI/ML in the healthcare industry</p>

             {/* <h2>Skills</h2>
             <ul>
                <li>AI Development</li>
                <li>Full-Stack Development</li>
                <li>Embedded Systems Development</li>
             </ul>


             <h2>Here's some of the current tech I've been working with:</h2>
                <ul>
                    <li>Python, JavaScript, C++</li>
                    <li>React, Node.js, Express.js</li>
                    <li>TensorFlow, PyTorch, scikit-learn</li>
                </ul> */}
            
        </FadeIn>
       

    </div>
  );
}