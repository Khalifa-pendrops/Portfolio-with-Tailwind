import React from "react";
import Logo from "./Logo";
import notepad from "../images/notepad.png";
import Contact from "./Contact";
import Footer from "./Footer";

export default function NotePad() {
  return (
    <div className="flex flex-col gap-0">
      <div className="bg-gray-900">
        <Logo />
        <div className="text-gray-900 mt-[4rem] pl-8">
          <h1 className="text-xl text-green-800 font-semibold font-mono">
            Notepad App
          </h1>
          <p className="text-xl text-green-800 font-semibold font-mono">
            Frontend Developer
          </p>
        </div>
      </div>
      <div className="flex flex-col justify-center items-center gap-4 mt-[2rem]">
        <h4 className="text-[coral] text-2xl font-bold">Notepad App</h4>
        <img className="w-[600px]" src={notepad} alt="whisper app" />
        <div className="bg-gray-900 py-4">
          <p className="text-white text-center w-[100%] m-0 py-4 px-6">
            This simple Notepad App was part of the Learnable Internship task,
            2024. It was used to test our understanding of React. The app takes
            in user notes and stores same in local storage. The notes are
            displayed and can be edited and deleted as well.
          </p>
          <div className="text-white  flex flex-col justify-center items-center gap-4 w-[100%] mt-0">
            <p className="border px-4 rounded-sm bg-white text-gray-900">
              React.js
            </p>
            <p className="border px-4 rounded-sm bg-white text-gray-900">
              Vanilla CSS
            </p>
          </div>
        </div>
      </div>
      <Contact />
      <Footer />
    </div>
  );
}
