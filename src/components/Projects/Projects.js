import React from 'react';
import './Projects.css';
import HighlightCard from "../HighlightCard/HighlightCard" ;
import ProjectCard from '../ProjectCard/ProjectCard';
import FadeIn from '../../animations/FadeIn';
import { desc } from 'motion/react-client';
import  { BsTv, BsFillLungsFill  } from "react-icons/bs";
import { FaCar } from "react-icons/fa";
import { IoMdAnalytics } from "react-icons/io";
import { RiRobot3Fill } from "react-icons/ri";
import { MdMedication } from "react-icons/md";
import { PiPathBold } from "react-icons/pi";
import { GiCarWheel } from "react-icons/gi";






const projects = [
  {
    title: "Letterboxd‑Style TV Show Review App",
    description: "A full‑stack Letterboxd‑style app where users can rate, review, and track their favorite TV shows",
    link: "#",
    icon: <BsTv />,
    skills: "Python, Javascript, React, FastAPI, SQLAlchemy"
  },
  {
    title: "Autonomous Go Kart Capstone Project",
    description: "An autonomous collision avoidance system for go karts, providing automatic emergency braking and evasive maneuvering",
    link: "#",
    skills: "C, Python, STM32, Jatson Nano",
    icon: <FaCar />
  },
  {
    title: "Pneumonia Detection using CNN model",
    description: "A convolutional neural network to classify pneumonia in patients based on chest xray images, integrated with a Flask application for user interaction",
    link: "#",
    skills: "Python, Tensorflow, OpenCV, Flask",
    icon: <BsFillLungsFill />
  },
  {
    title: "Post-HCT Survival Prediction Model",
    description: "A hybrid XGBoost + Kaplan‑Meier survival prediction model to estimate post‑transplant survival risk in patients undergoing allogeneic Hematopoietic Cell Transplantation (HCT)",
    skills: "Python", 
    icon: <IoMdAnalytics />
  },
  {
    title: "Zenbo Companion Robot for COPD Patient", 
    description: "A companion robot that performs monitoring for COPD escalation, in addition to answering medication‑related queries, recording medication intake, and storing vitals data",
    skills: "Java, Google ML Kit, Android Studio", 
    icon: <RiRobot3Fill />
  }, 
  {
    title: "Prescription Scanner App Feature", 
    description: "An app feature that displays, stores, and interprets prescription information based on an uploaded photo", 
    skills: "Javascript, React, Tesseract OCR",
    icon: <MdMedication />
  },
  {
    title: "Localization and Path Planning Implementation on TurtleBot4", 
    description: "Implemented SLAM-based localization and path planning algorithms on TurtleBot4 using ROS2 to enable autonomous navigation in indoor environments",
    skills: "Python, ROS2",
    icon: <PiPathBold />
  },
  {
    title: "Line Following Robot", 
    description: "Implemented precise navigation using a PD controller, enabling the robot to follow and stop at various coloured lines", 
    skills: "C/C++, STM32", 
    icon: <GiCarWheel />
  }


]

export default function Projects() {
  return (
    <div id="projects" className="base-section">
        <FadeIn blur={true} duration={800} easing="ease-out" initialOpacity={0}>
           
            
            <div className="section-title">
               <h1>Projects</h1>
               <div className="title-line"></div>
             </div>
            <div className="projects-section">

             <div className="projects-grid">
                {projects.map((project, index) => (
                  // <FadeIn blur={true} duration={900 + index * 100} easing="ease-out" initialOpacity={0} style={{height: '100%', width: '100%'}} key={index}>
                  <ProjectCard
                    key={index}
                    projectTitle={project.title}
                    projectDesc={project.description}
                    projectSkills={project.skills}
                    icon={project.icon }
                  />
                  //  </FadeIn>
                ))}

                
            </div>

            <FadeIn blur={true} duration={2000} easing="ease-out" initialOpacity={0}>
            <div className="latest-project">
              <h2>Coming Soon...</h2 >
              <div className="latest-project-card">
                
              <HighlightCard 
                    enableSpotlight
                    enableBorderGlow={true}
                    spotlightRadius={400}
                    glowColor="132, 0, 255"
                    disableAnimations={false}
/>
              </div>
              </div>
              </FadeIn>
        

            </div>
        </FadeIn>


    </div>
  );
}