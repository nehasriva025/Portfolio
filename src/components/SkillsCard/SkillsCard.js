import { useRef } from "react";
import './SkillsCard.css';
import { motion, useMotionValue, useTransform } from 'framer-motion';

const SkillsCard = ({ skill, icon, className = '', spotlightColor = 'rgba(168, 85, 247, 0.8)' }) => {
    const cardRef = useRef(null);
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);
    
    const x = useTransform(mouseX, (value) => `${value}px`);
    const y = useTransform(mouseY, (value) => `${value}px`);

    const handleMouseMove = (e) => {
        const rect = cardRef.current.getBoundingClientRect();
        const posX = e.clientX - rect.left;
        const posY = e.clientY - rect.top;

        mouseX.set(posX);
        mouseY.set(posY);
    };

    const handleMouseLeave = () => {
        mouseX.set(0);
        mouseY.set(0);
    };

    return (
        // <div className="skills-card">
        <motion.div
            ref={cardRef}   
            className={`skills-card ${className}`}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{
                '--mouse-x': x,
                '--mouse-y': y,
                '--spotlight-color': spotlightColor
            }}
        >   
                    <div className="skills-card-glow"></div>

            <div className="skills-card-content">
                {icon && <div className="skills-card-icon">{icon}</div>}
                <div className="skills-card-skill">{skill}</div>
            </div>
         </motion.div> 
        // </div>
    );
}   

export default SkillsCard;