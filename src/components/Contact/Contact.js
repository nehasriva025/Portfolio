import React from 'react';
import './Contact.css';
import FadeIn from '../../animations/FadeIn';
 import { PiCircuitryFill } from "react-icons/pi";
import { TbBrandLinkedinFilled } from "react-icons/tb";
import { ImGithub } from "react-icons/im";
import { MdOutlineMailOutline } from "react-icons/md";


 import SkillsCard from '../SkillsCard/SkillsCard';

import me from '../../me.png';
import { link } from 'motion/react-client';






const contactItems = [
  
  { label: "LinkedIn", icon: TbBrandLinkedinFilled, link: "https://www.linkedin.com/in/nehasrivastava25/" },
  { label: "Github", icon: ImGithub, link: "https://github.com/nehasriva025" },
  { label: "Email", icon: MdOutlineMailOutline, link: "mailto:nsrivastava2020@gmail.com" },
];




export default function Contact() {
  return (
    <div id="contact" className="contact-base-section">
        <FadeIn blur={true} duration={1000} easing="ease-out" initialOpacity={0}>
          <div className="contact-content">
             <div className="section-title">
               <h1>Get in Touch</h1>
               <div className="title-line"></div>
             </div>
              
              <div className="contact-body">
              <p className="contact-text">I'd love to connect and chat over projects, job opportunities, or new ideas!</p>

             <div className='links-container'>

             {contactItems.map((item, index) => (
                <SkillsCard
                    className='contact-item'
                    key={index}
                    skill={item.label}
                    icon={<item.icon />}
                    onClick={() => window.open(item.link, '_blank')}
                />
             ))}
              </div>



             
             
          </div>
          </div>
         
        </FadeIn>
    </div>

  );
}