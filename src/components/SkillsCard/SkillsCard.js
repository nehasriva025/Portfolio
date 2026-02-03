import {useRef } from "react";
import './SkillsCard.css';

const SkillsCard = ({ skill, icon, className = '', spotlightColor = 'rgba(255, 255, 255, 0.25)' }) => {

    const cardRef = useRef(null);
    const handleMouseMove = (e) => {

        // const card = e.currentTarget;
        const rect = cardRef.current.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        cardRef.current.style.setProperty('--mouse-x', `${x}px`);
        cardRef.current.style.setProperty('--mouse-y', `${y}px`);
        cardRef.current.style.setProperty('--spotlight-color', spotlightColor);

    };

    const handleMouseLeave = () => {
        cardRef.current.style.setProperty('--mouse-x', `-100%`);
        cardRef.current.style.setProperty('--mouse-y', `-100%`);
    };

    return (
        <div
            ref={cardRef}   
            className={`skills-card ${className}`}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
        >   

            <div className="skills-card-content">
                {icon && <div className="skills-card-icon">{icon}</div>}
                <div className="skills-card-skill">{skill}</div>
            </div>

        </div>
    );
}   
export default SkillsCard;