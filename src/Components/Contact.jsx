import React from "react";
// import { Link } from "react-router-dom";
import whatsapp from "../images/whatsapp.svg";
import twitter from "../images/twitter.svg";
import envelop from "../images/envelop.png";

export default function Contact() {
  const phoneNumber = "+2348139308197";
  const emailAddress = "dikee5200@gmail.com";
  // const tweeterLink = "https://x.com/P3ndrops?t=2vZEhefyiX3WOeo6kW37wQ&s=09";

  return (
    <div>
      <section id="contact">
        <div className="contact-container flex flex-col justify-center items-center gap-10 mt-20 bg-[coral] py-8 text-white">
          <div className="contact-text text-center flex flex-col items-center gap-6">
            <h2 className="font-bold text-3xl">Get In Touch</h2>
            <p>
              Have a project in mind?{" "}
              <span className="text-green-800 font-bold">Send me a DM.</span>
            </p>
          </div>
          <div className="contact-social flex flex-row justify-center items-center gap-10">
            <a
              href={`https://wa.me/${phoneNumber}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                className="max-sm:w-[50px]"
                src={whatsapp}
                alt="whatsapp"
                width="100px"
              />
            </a>
            <a
              href={`mailto:${emailAddress}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                className="max-sm:w-[50px]"
                src={envelop}
                alt="email"
                width="100px"
              />
            </a>
            <a href="https://x.com/P3ndrops?t=2vZEhefyiX3WOeo6kW37wQ&s=09">
              <img
                className="max-sm:w-[50px]"
                src={twitter}
                alt="twitter"
                width="100px"
              />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
