import React, { useState } from "react";

const HamburgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="">
      <div
        className={`hamburger ${isOpen ? "open" : ""}`}
        onClick={handleClick}
      >
        <div className="bar"></div>
        <div className="bar two"></div>
        <div className="bar three"></div>
      </div>
      {isOpen && (
        <nav className="menu ">
          <ul className="flex flex-col bg-white text-gray-900">
            <li>
              <a href="#home">Home</a>
            </li>
            <li>
              <a href="#about">About Me</a>
            </li>
            <li>
              <a href="#services">Skills</a>
            </li>
            <li>
              <a href="#contact">Experiences</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </nav>
      )}
    </div>
  );
};

export default HamburgerMenu;
