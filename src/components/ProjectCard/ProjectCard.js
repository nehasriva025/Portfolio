import { useRef, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'motion/react';
import { FaReact } from 'react-icons/fa'; // Example icon

import './ProjectCard.css';
import me from "../../me.png";

const springValues = {
  damping: 50,
  stiffness: 150,
  mass: 0.5
};

export default function ProjectCard({
  icon = <FaReact />, // static image for now 
  projectTitle,
  projectSkills,
  projectDesc,
  containerHeight = '45vh',
  containerWidth = '100%',
  imageHeight = '100px',
  imageWidth = '100px',
  scaleOnHover = 1.03,
  rotateAmplitude = 4,
  showMobileWarning = true,

}) {
  const ref = useRef(null);

  const x = useMotionValue();
  const y = useMotionValue();
  const rotateX = useSpring(useMotionValue(0), springValues);
  const rotateY = useSpring(useMotionValue(0), springValues);
  const scale = useSpring(1, springValues);
  const opacity = useSpring(0);
  // const rotateFigcaption = useSpring(0, {
  //   stiffness: 350,
  //   damping: 30,
  //   mass: 1
  // });

  const [lastY, setLastY] = useState(0);

  function handleMouse(e) {
    if (!ref.current) return;

    const rect = ref.current.getBoundingClientRect();
    const offsetX = e.clientX - rect.left - rect.width / 2;
    const offsetY = e.clientY - rect.top - rect.height / 2;

    const rotationX = Math.max(-rotateAmplitude, Math.min(rotateAmplitude, (offsetY / (rect.height / 2)) * -rotateAmplitude));
    const rotationY = Math.max(-rotateAmplitude, Math.min(rotateAmplitude, (offsetX / (rect.width / 2)) * rotateAmplitude));

    rotateX.set(rotationX);
    rotateY.set(rotationY);

    x.set(e.clientX - rect.left);
    y.set(e.clientY - rect.top);

    const velocityY = offsetY - lastY;
    // rotateFigcaption.set(-velocityY * 0.6);
    setLastY(offsetY);
  }

  function handleMouseEnter() {
    scale.set(scaleOnHover);
    opacity.set(1);
  }

  function handleMouseLeave() {
    opacity.set(0);
    scale.set(1);
    rotateX.set(0);
    rotateY.set(0);
    // rotateFigcaption.set(0);
  }

  return (
    <figure
      ref={ref}
      className="tilted-card-figure"
      style={{
        height: containerHeight,
        width: containerWidth,
        
      }}
      onMouseMove={handleMouse}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {showMobileWarning && (
        <div className="tilted-card-mobile-alert">This effect is not optimized for mobile. Check on desktop.</div>
      )}

      <motion.div
        className="tilted-card-inner"
        style={{
          width: "100%",
          height: "100%",
          rotateX,
          rotateY,
          scale
        }}
      >
        <motion.div
          className="tilted-card-img"

          style={{

            width: "100%",
            height: "25%",
          }}
        >
          {icon && <motion.div className="project-card-icon">{icon}</motion.div>}
          </motion.div>

        {/* {displayOverlayContent && overlayContent && (
          <motion.div className="tilted-card-overlay">{overlayContent}</motion.div>
        )} */}

        <motion.div className="tilted-card-content">
          <motion.h1>{projectTitle}</motion.h1>
          <motion.h3>{projectDesc}</motion.h3>
          <motion.p>{projectSkills}</motion.p>
        </motion.div>
      </motion.div>
    </figure>
  );
}
