import React from "react";
// import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import display from "../images/display.jpg";
import whatsapp from "../images/whatsapp.svg";


export default function AboutMe() {
  return (
    <div>
      <section id="about">
        <div className="flex flex-row items-center justify-center gap-20 pt-10 max-sm:flex max-sm:flex-col-reverse max-sm:gap-1">
          <div className="flex flex-col justify-center items-center text-center border-none w-1/2 max-sm:w-[90%] py-10 gap-6 max-sm:items-center">
            <div className="flex flex-col gap-8 max-sm:place-items-center">
              <h2 className="text-gray-900 text-3xl font-bold max-sm:text-center ">
                About Me
              </h2>
              <div className="flex flex-row items-center gap-10 max-sm:flex-col max-sm:items-start max-sm:gap-2">
                <div className="flex flex-row justify-center items-center gap-2 border px-3">
                  <img src={whatsapp} alt="whatsapp" width="16px" />
                  <a className="social-linked" href="www.whatsapp.com/">
                    +2348139308197
                  </a>
                </div>
                <div className="flex justify-center items-center gap-2  px-1 border">
                  <FontAwesomeIcon icon={faEnvelope} />
                  <a className="social-linked" href="www.mail.google.com/">
                    dikee5200@gmail.com
                  </a>
                </div>
              </div>
            </div>

            <p className="max-sm:w-[100%] leading-loose font-mono max-sm:text-center ">
              I am a results-driven and enthusiastic{" "}
              <b className="text-[coral]">Frontend Developer </b>
              with current expertise in <i>React.JS</i>. I am Proficient in
              <i className="text-[coral]"> HTML, CSS and JavaScript,</i> I have
              a proven track record of delivering high-quality, scalable
              solutions. My commitment to staying current with industry trends
              and my passion for learning, as well as an eye for creating
              innovative solutions drive my continuous learning and professional
              growth.
            </p>
          </div>
          <img
            className="profile-image"
            src={display}
            alt="profile"
            width="350px"
          />
        </div>
      </section>
    </div>
  );
}
