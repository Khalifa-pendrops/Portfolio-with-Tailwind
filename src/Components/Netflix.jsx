import React from 'react'
import Logo from "./Logo";
import netflix from "../images/netflix.png";
import Contact from "./Contact";
import Footer from "./Footer";

export default function Netflix() {
  return (
    <div>
      <div className="dynamic-header">
        <Logo />
        <div className="dynamic-text">
          <h1>Netflix Clone App</h1>
          <p>Frontend Developer</p>
        </div>
      </div>
      <div className="whisper-body">
        <h4>Netflix Clone App</h4>
        <img className="experience-image" src={netflix} alt="whisper app" />
        <p className="whisper-details">
          This is a part of the Learnable Internship task, 2024. The task was meant to test our understanding and use of basic HTML,
          CSS and JavaScript, taking into account Flexbox model in CSS.
        </p>
        <div className="languages">
          <p>HMTL</p>
          <p>CSS</p>
          <p>Javascript</p>
        </div>
      </div>
      <Contact />
      <Footer />
    </div>
  );
}
