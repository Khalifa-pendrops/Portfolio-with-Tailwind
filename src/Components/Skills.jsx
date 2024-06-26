import React from 'react'
import bs from '../images/bs.svg'
import react from "../images/react.svg";
import html from "../images/html.svg";
import tailwind from "../images/tailwind.svg";
import css from "../images/css.svg";
import js from "../images/js.svg";
import git from "../images/git.svg";
import github from "../images/github.svg";



export default function Skills() {
  return (
    <div>
      <section id="skills">
        <div className="flex flex-col justify-center items-center gap-18 my-20 bg-[coral] py-[3rem]">
          <h2 className="font-bold text-3xl mb-6 text-white">Skills</h2>
          <div className="flex flex-row justify-center  items-center gap-20 max-sm:flex-col">
            <div className="border-none flex flex-col justify-center items-center shadow-2xl rounded-md p-6">
              <img
                className="skills-icons"
                src={html}
                alt="html"
                width="200px"
              />
              <p className="text-xl">HTML</p>
            </div>
            <div className="border-none flex flex-col justify-center items-center shadow-2xl rounded-md p-6">
              <img className="skills-icons" src={css} alt="css" width="200px" />
              <p className="text-xl">CSS</p>
            </div>
            <div className="border-none flex flex-col justify-center items-center shadow-2xl rounded-md p-6">
              <img
                className="skills-icons"
                src={bs}
                alt="bootstrap"
                width="200px"
              />
              <p className="text-xl">Bootstrap</p>
            </div>
          </div>

          <div className="flex flex-row justify-center  items-center gap-20 mt-16 max-sm:flex-col">
            <div className="border-none flex flex-col justify-center items-center shadow-2xl rounded-md p-6">
              <img
                className="skills-icons"
                src={js}
                alt="javascript"
                width="200px"
              />
              <p className="text-xl">Javascript</p>
            </div>
            <div className="border-none flex flex-col justify-center items-center shadow-2xl rounded-md p-6">
              <img
                className="skills-icons"
                src={react}
                alt="react"
                width="200px"
              />
              <p className="text-xl">React</p>
            </div>
            <div className="border-none flex flex-col justify-center items-center shadow-2xl rounded-md p-6">
              <img
                className="skills-icons"
                src={tailwind}
                alt="tailwind"
                width="200px"
              />
              <p className="text-xl">Tailwind</p>
            </div>
          </div>
          <div className="flex flex-col items-center gap-10 my-14 ">
            <h4 className="text-xl font-bold">Services</h4>
            <div className="flex flex-row items-center justify-center gap-20">
              <div className="flex flex-col items-center gap-6">
                <img
                  className="skills-icons"
                  src={github}
                  alt="github"
                  width="100px"
                />
                <p className="font-bold">Github</p>
              </div>

              <div className="flex flex-col items-center gap-6">
                <img
                  className="skills-icons"
                  src={git}
                  alt="git"
                  width="100px"
                />
                <p className="font-bold">Git</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
