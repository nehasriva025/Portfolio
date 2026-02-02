import React from "react";
import TextType from "../../animations/TextTyping";
import Background from "../../animations/Background";
import './Home.css';




export default function Home() {
  return (
    <div id="home" className="home-section">
        <div style={{ width: '100%', height: '100vh', position: "relative" }}>
  <Background
  hueShift={0}
  noiseIntensity={0}
  scanlineIntensity={0}
  speed={0.5}
  scanlineFrequency={0}
  warpAmount={0}
  // resolutionScale={1.25}
/>
</div>
      <TextType className="intro-name" text="Hi! I'm Neha" />
      <h2 className="intro-role">I'm a Software Developer based in Toronto, specializing in AI and Full-Stack Development</h2>
    </div>

  );
}