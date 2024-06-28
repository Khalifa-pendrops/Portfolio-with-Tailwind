import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import HamburgerMenu from "./HamburgerMenu";
import { Link } from "react-router-dom";
import ResumeRedirect from "./ResumeRedirect";



export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    const handleClick = () => {
      setIsOpen(!isOpen);
    };

  return (
    <div>
      <section id="home" className=" ">
        <nav className="text-white flex justify-between px-[2rem] py-[10px] bg-gray-900 fixed top-0 left-0 right-0 z-10">
          <a className="name-logo-linked" href="/">
            <h2 className="text-2xl w-10 max-sm:text-2xl max-sm:w-10">
              khali<span className="text-green-700 animate-pulse">Fa</span>.
            </h2>
          </a>
          <div className=" flex flex-col w-[100%] sm:hidden">
            <div
              className={`flex flex-col-reverse gap-1 transform scale-[-1] hamburger ${
                isOpen ? "open" : "close"
              }`}
              onClick={handleClick}
            >
              <div className="bar max-sm:w-6 max-sm:h-1 bg-white"></div>
              <div className="bar max-sm:w-5 max-sm:h-1 bg-white"></div>
              <div className="bar max-sm:w-4 max-sm:h-1 bg-white"></div>
            </div>
            {isOpen && (
              <nav className="menu flex justify-center items-center  p-2 my-2 ">
                <ul className=" flex flex-col gap-2 font-bold text-gray-900 bg-white px-10 mt-2 py-2 w-[100%]">
                  <li>
                    <a href="#home">Home</a>
                  </li>
                  <li>
                    <a href="#about">About Me</a>
                  </li>
                  <li>
                    <a href="#skills">Skills</a>
                  </li>
                  <li>
                    <a href="#experience">Experiences</a>
                  </li>
                  <li>
                    <a href="#contact">Contact</a>
                  </li>
                  <li>
                    <Link to="/resume"> Resume</Link>
                  </li>
                </ul>
              </nav>
            )}
          </div>

          <div className="max-sm:hidden -ml-[106]">
            <ul className="flex flex-row gap-5">
              <li>
                <a href="#home">Home</a>
              </li>
              <li>
                <a href="#about">About Me</a>
              </li>
              <li>
                <a href="#skills">Skills</a>
              </li>
              <li>
                <a href="#experience">Experience</a>
              </li>
              <li>
                <a href="#contact">Contact Me</a>
              </li>
            </ul>
          </div>
          <button className="hover:bg-gray-800 hover:text-white border-none bg-red-500 flex flex-row justify-center items-center gap-1 p-1 rounded-md text-white max-sm:hidden">
            {/* <FontAwesomeIcon className="font-icon" icon={faPhone} /> */}
            <Link to="/resume"> Resume</Link>
            {/* <a className="font-bold" href="#contact">
              Resume
            </a> */}
          </button>
        </nav>
        <div className="text-white border bg-[coral] mt-[3.2rem] pt-5 pb-5 text-3xl flex flex-col items-center gap-5 font-bold">
          <h5 className="text-base">Hi, I Am</h5>
          <h1 className="animate-pulse text-gray-900 font-extrabold">
            Chikezie Ilodigwe
          </h1>
          <p className="text-lg">A Frontend Developer</p>
        </div>
      </section>
    </div>
  );
}
