import React from "react";
import Logo from "./Logo";
import bandage from "../images/bandage.png";
import Contact from "./Contact";
import Footer from "./Footer";

export default function Bandage() {
  return (
    <div className="flex flex-col gap-0">
      <div className="bg-gray-900">
        <Logo />
        <div className="text-gray-900 mt-[4rem] pl-8">
          <h1 className="text-xl text-green-800 font-semibold font-mono">
            Bandage App
          </h1>
          <p className="text-xl text-green-800 font-semibold font-mono">
            Frontend Developer
          </p>
        </div>
      </div>
      <div className="flex flex-col justify-center items-center gap-4 mt-[2rem]">
        <h4 className="text-[coral] text-2xl font-bold">Bandage App</h4>
        <img className="w-[600px]" src={bandage} alt="whisper app" />
        <div className="bg-gray-900 py-4">
          <p className="text-white text-center w-[100%] m-0 py-4 px-6">
            This is an e-com app. It is part of the Learnable Internship
            Standardization Test, 2024. We were tested with using RTK and RTK
            Query to communicate and fetch data from the backend via API. The
            project utilized React Vite for speed and UI fluidity. I aslo used
            React Router for navigation of the pages.
          </p>
          <div className="text-white  flex flex-col justify-center items-center gap-4 w-[100%] mt-0">
            <p className="border px-4 rounded-sm bg-white text-gray-900">
              React.js
            </p>
            <p className="border px-4 rounded-sm bg-white text-gray-900">
              React vite
            </p>
            <p className="border px-4 rounded-sm bg-white text-gray-900">
              Vanilla CSS
            </p>
            <p className="border px-4 rounded-sm bg-white text-gray-900">RTK</p>
            <p className="border px-4 rounded-sm bg-white text-gray-900">
              RTK Query
            </p>
          </div>
        </div>
      </div>
      <Contact />
      <Footer />
    </div>
  );
}
