import React from "react";
import Logo from "./Logo";
import whisper from "../images/whisper.png";
import Contact from "./Contact";
import Footer from "./Footer";

export default function Whisper() {
  return (
    <div>
      <div className="dynamic-header">
        <Logo />
        <div className="dynamic-text">
          <h1>Whisper App</h1>
          <p>Frontend Developer</p>
        </div>
      </div>
      <div className="whisper-body">
        <h4>Whisper App</h4>
        <img className="experience-image" src={whisper} alt="whisper app" />
        <p className="whisper-details">
          Whisper App, an idea of graduates of the Upskill 2023 Internship
          program, is a community where you practically whisper - anonymously.
          So no one knows who is behind whatever texts sent across the platform
          and yes, it was a cool project by a group of us. I contributed to the
          UI/UX, and I am glad to have been part of this.
        </p>
        <div className="languages">
          <p>HMTL</p>
          <p>CSS</p>
          <p>Javascript</p>
          <p>Node.js</p>
          <p>Express.js</p>
          <p>MongoDB</p>
        </div>
      </div>
      <Contact />
      <Footer />
    </div>
  );
}
