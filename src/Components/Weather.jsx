import React from 'react'
import Logo from "./Logo";
import weather from "../images/weather.png";
import Contact from "./Contact";
import Footer from "./Footer";

export default function Weather() {
  return (
    <div className="flex flex-col gap-0">
      <div className="bg-gray-900">
        <Logo />
        <div className="text-gray-900 mt-[4rem] pl-8">
          <h1 className="text-xl text-green-800 font-semibold font-mono">
            Weather App
          </h1>
          <p className="text-xl text-green-800 font-semibold font-mono">
            Frontend Developer
          </p>
        </div>
      </div>
      <div className="flex flex-col justify-center items-center gap-4 mt-[2rem]">
        <h4 className="text-[coral] text-2xl font-bold">Weather App</h4>
        <img className="w-[600px]" src={weather} alt="whisper app" />
        <div className="bg-gray-900 py-4">
          <p className="text-white text-center w-[100%] m-0 py-4 px-6">
            This is a Weather App. It was a cool project by a small group of us.
            My major contribution was in the UI. The App uses static methods to
            display weather conditions of some selected cities. No APIs was
            used!
          </p>
          <div className="text-white  flex flex-col justify-center items-center gap-4 w-[100%] mt-0">
            <p className="border px-4 rounded-sm bg-white text-gray-900">
              HMTL
            </p>
            <p className="border px-4 rounded-sm bg-white text-gray-900">CSS</p>
            <p className="border px-4 rounded-sm bg-white text-gray-900">
              Javascript
            </p>
          </div>
        </div>
      </div>
      <Contact />
      <Footer />
    </div>
  );
}
