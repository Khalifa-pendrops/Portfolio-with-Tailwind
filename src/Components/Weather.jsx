import React from 'react'
import Logo from "./Logo";
import weather from "../images/weather.png";
import Contact from "./Contact";
import Footer from "./Footer";

export default function Weather() {
  return (
    <div>
      <div className="dynamic-header">
        <Logo />
        <div className="dynamic-text">
          <h1>Weather App</h1>
          <p>Frontend Developer</p>
        </div>
      </div>
      <div className="whisper-body">
        <h4>Weather App</h4>
        <img className="experience-image" src={weather} alt="whisper app" />
        <p className="whisper-details">
          This is a Weather App. It was a cool project by a small group of us.
          My major contribution was in the UI. The App uses static methods to
          display weather conditions of some selected cities. No APIs was used!
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
