import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Whisper from "./Components/Whisper";
import Netflix from "./Components/Netflix";
import ToDo from "./Components/ToDo";
import Bandage from "./Components/Bandage";
import Notepad from "./Components/NotePad"; 
import Weather from "./Components/Weather";

export default function LandingPage() {
  return (
    <div className="">
      <Router>
        
          <Routes>
            <Route path="/whisper" element={<Whisper />} />
            <Route path="/netflix" element={<Netflix />} />
            <Route path="/todo" element={<ToDo />} />
            <Route path="/bandage" element={<Bandage />} />
            <Route path="/notepad" element={<Notepad />} />
            <Route path="/weather" element={<Weather />} />
          </Routes>
        
      </Router>
    </div>
  );
}
