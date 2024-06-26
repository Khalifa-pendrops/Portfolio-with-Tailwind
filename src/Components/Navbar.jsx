import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import HamburgerMenu from "./HamburgerMenu";



export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    const handleClick = () => {
      setIsOpen(!isOpen);
    };

  return (
    <div>
      <section id="home" className=" ">
        <nav className="text-white flex justify-between px-[4rem] py-[10px] bg-gray-900">
          <a className="name-logo-linked" href="/">
            <h2 className="text-2xl w-10 max-sm:text-2xl max-sm:w-10">
              khali<span className="text-green-700 animate-pulse">Fa</span>.
            </h2>
          </a>
          <HamburgerMenu />
          <div className="">
            <div
              className={`flex flex-col gap-1 hamburger ${
                isOpen ? "open" : ""
              }`}
              onClick={handleClick}
            >
              <div className="bar max-sm:w-6 max-sm:h-1 bg-white"></div>
              <div className="bar max-sm:w-5 max-sm:h-1 bg-white"></div>
              <div className="bar max-sm:w-4 max-sm:h-1 bg-white"></div>
            </div>
            {isOpen && (
              <nav className="menu  ">
                <ul className=" flex flex-col text-gray-900 bg-white px-10 mt-2 py-2">
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

          <div className="max-sm:hidden">
            <ul className="flex flex-row gap-5 -ml-96">
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
            </ul>
          </div>
          <button className="hover:bg-gray-800 hover:text-white border-none bg-red-500 flex flex-row justify-center items-center gap-1 p-1 rounded-md text-white max-sm:hidden">
            <FontAwesomeIcon className="font-icon" icon={faPhone} />
            <a className="contact-link-btn" href="#contact">
              Contact Me
            </a>
          </button>
        </nav>
        <div className="text-white border bg-[coral] mt-[rem] pt-5 pb-5 text-3xl flex flex-col items-center gap-5 font-bold">
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
