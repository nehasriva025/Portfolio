import React from "react";
import TextType from "../../animations/TextTyping";
import AnimatedGradient from "../../animations/Background";
import GravityStarsBackground from "../../animations/StarsBackground";
import './Home.css';




export default function Home() {
  return (
    <div id="home" className="home-section">
      <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: 0 }}>
        <GravityStarsBackground />
        {/* <AnimatedGradient/> */}
      </div>
      <TextType className="intro-name" text="Hi! I'm Neha" />
      <h2 className="intro-role">I'm a Software Developer based in Toronto, specializing in AI and Full-Stack Development</h2>
    </div>
  );
}