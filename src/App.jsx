import { useState } from 'react'
import {Route, Routes} from 'react-router-dom'
import './App.css'
import React from "react";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import AboutMe from "./Components/AboutMe";
import Skills from "./Components/Skills";
import Experience from "./Components/Experience";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";
import LandingPage from './LandingPage'
import Test from './Components/Test';

// import Whisper from "./Components/Whisper";
// import Netflix from "./Components/Netflix";
// import ToDo from "./Components/ToDo";
// import Bandage from "./Components/Bandage";
// import Notepad from "./Components/NotePad";
// import Weather from "./Components/Weather";



function App() {

  return (
    <>
      <Navbar />
      <AboutMe />
      <Skills />
      <Experience />
      <Contact />
      <Footer />
      {/* <Test /> */}
    </>
  );
}

export default App
