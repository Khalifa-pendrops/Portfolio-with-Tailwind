import React from "react";
import Logo from "./Logo";
import notepad from "../images/notepad.png";
import Contact from "./Contact";
import Footer from "./Footer";

export default function NotePad() {
  return (
    <div>
      <div className="dynamic-header">
        <Logo />
        <div className="dynamic-text">
          <h1>Notepad App</h1>
          <p>Frontend Developer</p>
        </div>
      </div>
      <div className="whisper-body">
        <h4>Notepad App</h4>
        <img className="experience-image" src={notepad} alt="whisper app" />
        <p className="whisper-details">
          This simple Notepad App was part of the Learnable Internship task,
          2024. It was used to test our understanding of React. The app takes in
          user notes and stores same in local storage. The notes are displayed
          and can be edited and deleted as well.
        </p>
        <div className="languages">
          <p>React.js</p>
          <p>Vanilla CSS</p>
        </div>
      </div>
      <Contact />
      <Footer />
    </div>
  );
}
