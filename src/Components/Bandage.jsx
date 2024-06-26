import React from "react";
import Logo from "./Logo";
import bandage from "../images/bandage.png";
import Contact from "./Contact";
import Footer from "./Footer";

export default function Bandage() {
  return (
    <div>
      <div className="dynamic-header">
        <Logo />
        <div className="dynamic-text">
          <h1>Bandage App</h1>
          <p>Frontend Developer</p>
        </div>
      </div>
      <div className="whisper-body">
        <h4>Bandage App</h4>
        <img className="experience-image" src={bandage} alt="whisper app" />
        <p className="whisper-details">
          This is an e-com app. It is part of the Learnable Internship
          Standardization Test, 2024. We were tested with using RTK and RTK
          Query to communicate and fetch data from the backend via API. The
          project utilized React Vite for speed and UI fluidity. I aslo used
          React Router for navigation of the pages.
        </p>
        <div className="languages">
          <p>React.js</p>
          <p>React vite</p>
          <p>Vanilla CSS</p>
          <p>RTK</p>
          <p>RTK Query</p>
        </div>
      </div>
      <Contact />
      <Footer />
    </div>
  );
}
