import React from 'react'
import Logo from "./Logo";
import todo from "../images/todo.png";
import Contact from "./Contact";
import Footer from "./Footer";

export default function ToDo() {
  return (
    <div>
      <div className="dynamic-header">
        <Logo />
        <div className="dynamic-text">
          <h1>To-Do App</h1>
          <p>Frontend Developer</p>
        </div>
      </div>
      <div className="whisper-body">
        <h4>To-Do App</h4>
        <img className="experience-image" src={todo} alt="whisper app" />
        <p className="whisper-details">
          This is a To-Do App, which takes in user inputs (tasks), and stores
          them up using local storage. Displayed tasks can as well be deleted or
          edited. It is also part of the Learnable Internship task, 2024.
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
