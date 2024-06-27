import React from 'react'
import Logo from "./Logo";
import todo from "../images/todo.png";
import Contact from "./Contact";
import Footer from "./Footer";

export default function ToDo() {
  return (
    <div className="flex flex-col gap-0">
      <div className="bg-gray-900">
        <Logo />
        <div className="text-gray-900 mt-[4rem] pl-8">
          <h1 className="text-xl text-green-800 font-semibold font-mono">
            To-Do App
          </h1>
          <p className="text-xl text-green-800 font-semibold font-mono">
            Frontend Developer
          </p>
        </div>
      </div>
      <div className="flex flex-col justify-center items-center gap-4 mt-[2rem]">
        <h4 className="text-[coral] text-2xl font-bold">To-Do App</h4>
        <img className="w-[600px]" src={todo} alt="whisper app" />
        <div className="bg-gray-900 py-4">
          <p className="text-white text-center w-[100%] m-0 py-4 px-6">
            This is a To-Do App, which takes in user inputs (tasks), and stores
            them up using local storage. Displayed tasks can as well be deleted
            or edited. It is also part of the Learnable Internship task, 2024.
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
