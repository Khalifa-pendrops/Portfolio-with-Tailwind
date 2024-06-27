import React from "react";
import Logo from "./Logo";
import whisper from "../images/whisper.png";
import Contact from "./Contact";
import Footer from "./Footer";

export default function Whisper() {
  return (
    <div className="flex flex-col gap-0">
      <div className="bg-gray-900">
        <Logo />
        <div className="text-gray-900 mt-[4rem] pl-8">
          <h1 className="text-xl text-green-800 font-semibold font-mono">
            Whisper App
          </h1>
          <p className="text-xl text-green-800 font-semibold font-mono">
            Frontend Developer
          </p>
        </div>
      </div>
      <div className="flex flex-col justify-center items-center gap-4 mt-[2rem]">
        <h4 className="text-[coral] text-2xl font-bold">Whisper App</h4>
        <img className="w-[600px]" src={whisper} alt="whisper app" />
        <div className="bg-gray-900 py-4">
          <p className="text-white text-center w-[100%] m-0 py-4 px-6">
            Whisper App, an idea of graduates of the Upskill 2023 Internship
            program, is a community where you practically whisper - anonymously.
            So no one knows who is behind whatever texts sent across the
            platform and yes, it was a cool project by a group of us. I
            contributed to the UI/UX, and I am glad to have been part of this.
          </p>
          <div className="text-white  flex flex-col justify-center items-center gap-4 w-[100%] mt-0">
            <p className="border px-4 rounded-sm bg-white text-gray-900">
              HMTL
            </p>
            <p className="border px-4 rounded-sm bg-white text-gray-900">CSS</p>
            <p className="border px-4 rounded-sm bg-white text-gray-900">
              Javascript
            </p>
            <p className="border px-4 rounded-sm bg-white text-gray-900">
              Node.js
            </p>
            <p className="border px-4 rounded-sm bg-white text-gray-900">
              Express.js
            </p>
            <p className="border px-4 rounded-sm bg-white text-gray-900">
              MongoDB
            </p>
          </div>
        </div>
      </div>
      <Contact />
      <Footer />
    </div>
  );
}
