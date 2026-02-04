import React from 'react';
import './About.css';
import FadeIn from '../../animations/FadeIn';
 import { PiCircuitryFill } from "react-icons/pi";
 import { BsStack } from "react-icons/bs";
 import { RiRobot2Fill } from "react-icons/ri";
 import { FaHeadSideVirus } from "react-icons/fa6";
 import { RiArrowDropRightLine } from "react-icons/ri";

 import SkillsCard from '../SkillsCard/SkillsCard';

import me from '../../me.png';






const areasItems = [
  { label: "AI Development", icon: FaHeadSideVirus },
  { label: "Full-Stack Development", icon: BsStack },
  { label: "Embedded Software", icon: PiCircuitryFill },
  { label: "Robotics Software", icon: RiRobot2Fill },
];

const techItems = [
  "Python",
  "JavaScript",
  "C/C++",
  "React.js",
  "FastAPI",
  "SQLAlchemy",
  "Scikit-learn",
  "TensorFlow",
  "OpenCV",
];


export default function About() {
  return (
    <div id="about" className="section">
        <FadeIn blur={true} duration={1000} easing="ease-out" initialOpacity={0}>
          <div className='about-section'>
          <div className="about-content">
             <div className="section-title">
               <h1>About Me</h1>
               <div className="title-line"></div>
             </div>
              
              <div className="about-body">
              <p className="about-text">I'm a Software Developer from the University of Waterloo and currently based in Toronto. 
                My current interests are AI/ML and robotics development within the healthcare industry. Outside of tech, I have a deep passion for space and art</p>

             <h2>Some of the areas I've previously worked in:</h2>
             <div className='areas-container'>

             {areasItems.map((item, index) => (
                <SkillsCard
                    key={index}
                    skill={item.label}
                    icon={<item.icon />}
                />
             ))}
              </div>



             <h2>Here's some of the current tech I've been working with:</h2>

             <div className="tech-container">
             {techItems.map((tech, index) => (
              <FadeIn blur={true} duration={500 + index * 100} easing="ease-out" initialOpacity={0}>
                <div key={index} className="tech-item">
                  <RiArrowDropRightLine className="tech-icon"  />
                  <span>{tech}</span>
                </div>
              </FadeIn>
             ))}
                
             </div>
             
          </div>
          </div>
          <div className='about-image'>
              <img src={me} alt="profile"></img>
          </div>
          </div>
        </FadeIn>
    </div>

  );
}