import React from 'react'
import { Link } from "react-router-dom";
import whisper from '../images/whisper.png'
import bandage from "../images/bandage.png";
import todo from "../images/todo.png";
import netflix from "../images/netflix.png";
import weather from "../images/weather.png";
import notepad from "../images/notepad.png";

export default function Experince() {
  return (
    <div>
      <section id="experience">
        <div className="experience-container flex flex-col justify-center items-center mb-10">
          <h2 className="font-bold text-3xl">Professional Experience</h2>
          <div className="row flex flex-row justify-center items-center gap-4 my-10 max-sm:flex-col">
            <div className="whisper flex flex-col justify-center items-center gap-4 transform transition hover:scale-90">
              <img
                className="experience-image w-96"
                src={whisper}
                alt="whisper app"
              />
              <Link
                className="linked-apps  text-[1.4rem] text-[coral] font-bold"
                to="/whisper"
              >
                Whisper App
              </Link>
              <p>Frontend Developer</p>
            </div>
            <div className="whisper flex flex-col justify-center items-center gap-4 transform transition hover:scale-90">
              <img
                className="experience-image w-[400px] h-[200px]"
                src={bandage}
                alt="bandage app"
              />
              <Link
                className="linked-apps  text-[1.4rem] text-[coral] font-bold"
                to="/bandage"
              >
                Bandage App
              </Link>
              <p>Frontend Developer</p>
            </div>
            <div className="whisper flex flex-col justify-center items-center gap-4 transform transition hover:scale-90">
              <img
                className="experience-image w-96"
                src={netflix}
                alt="netflix clone app"
              />
              <Link
                className="linked-apps  text-[1.4rem] text-[coral] font-bold"
                to="/netflix"
              >
                Netflix Clone App
              </Link>
              <p>Frontend Developer</p>
            </div>
          </div>

          <div className="row flex flex-row justify-center items-center gap-4 max-sm:flex-col">
            <div className="whisper flex flex-col justify-center items-center gap-4 transform transition hover:scale-90">
              <img
                className="experience-image w-96"
                src={todo}
                alt="to-do app"
              />
              <Link
                className="linked-apps  text-[1.4rem] text-[coral] font-bold"
                to="/todo"
              >
                To-Do App
              </Link>
              <p>Frontend Developer</p>
            </div>

            <div className="whisper flex flex-col justify-center items-center gap-4 transform transition hover:scale-90">
              <img
                className="experience-image w-96"
                src={weather}
                alt="weather app"
              />
              <Link
                className="linked-apps  text-[1.4rem] text-[coral] font-bold"
                to="/weather"
              >
                Weather App
              </Link>
              <p>Frontend Developer</p>
            </div>

            <div className="whisper flex flex-col justify-center items-center gap-4 transform transition hover:scale-90">
              <img
                className="experience-image w-96"
                src={notepad}
                alt="notepad app"
              />
              <Link
                className="linked-apps  text-[1.4rem] text-[coral] font-bold"
                to="/notepad"
              >
                Notepad App
              </Link>
              <p>Frontend Developer</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
