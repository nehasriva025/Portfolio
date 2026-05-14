import React from 'react';
import './Projects.css';
import HighlightCard from "../HighlightCard/HighlightCard" ;
import ProjectCard from '../ProjectCard/ProjectCard';
import FadeIn from '../../animations/FadeIn';
import ProjectCarousel from '../ProjectCarousel/ProjectCarousel';
import { desc } from 'motion/react-client';
import  { BsTv, BsFillLungsFill, BsDiscord   } from "react-icons/bs";
import { FaCar } from "react-icons/fa";
import { IoMdAnalytics } from "react-icons/io";
import { RiRobot3Fill } from "react-icons/ri";
import { MdMedication } from "react-icons/md";
import { PiPathBold } from "react-icons/pi";
import { GiCarWheel } from "react-icons/gi";
import NewPC from '../NewPC/NewPC';
import LatestCard from '../LatestCard/LatestCard';
import sleep from '../../sleep.png';
import med from '../../med.jpg';






const projects = [
  {
    title: "NHL Analytics Discord Bot",
    description: "A Discord bot that provides real-time NHL player stats, game updates, and analytics using the NHL API and data processing techniques"
    ,link: "#",
    icon: <BsDiscord  />,
    skills: "Python, PostgreSQL"
  }, 

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
    skills: "C, Python, STM32, Jetson Nano",
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

const latestProjectData = [
  {
    color: '#000000',
    description: 'A web app for sleep tracking, sleep recommendations, and preventive analytics for heart and sleep health. Developing a hybrid AI model by combining global models and a personalized model finetuned with user logs ',
    skills: 'Python, MongoDB, React, Bayesian Learning',
    title: 'AI-Powered Health Tracker',
    image: sleep
  },
  {
    color: '#000000',
    title: 'Prescription Scanner and Tracking App',
    description: 'A mobile app for scanning and tracking prescription medications, providing reminders and dosage information. Developing custom NER model and OCR pipeline to extract and interpret prescription data from user-uploaded photos',
    skills: 'React Native, PostgreSQL, Python, OpenCV',
    image: med
  }
];

export default function Projects() {
  return (
    <div id="projects" className="base-section">


        <FadeIn blur={true} duration={800} easing="ease-out" initialOpacity={0}>
           
            
            <div className="section-title">
               <h1>Projects</h1>
               <div className="title-line"></div>
             </div>

              <FadeIn blur={true} duration={2000} easing="ease-out" initialOpacity={0}>
            <div className="latest-project">
              <h2>My Latest Projects</h2 >
              <div className="latest-project-section">

                
              {latestProjectData.map((project, index) => (
                <LatestCard
                  key={index}
                  title={project.title}
                  description={project.description}
                  skills={project.skills}
                  image={project.image}
                  />
              ))}
              </div>
              </div>
              </FadeIn>

              
            <FadeIn blur={true} duration={2000} easing="ease-out" initialOpacity={0}>
            <div className="projects-section">
                <h2>All Projects</h2>

              <ProjectCarousel projects={projects} />

    
            </div>

            </FadeIn>
        </FadeIn>


    </div>
  );
}