import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import App from './App.jsx'
import "./fontAwesome.jsx";
import './index.css'
import Whisper from './Components/Whisper.jsx';
import Netflix from './Components/Netflix.jsx';
import ToDo from './Components/ToDo.jsx';
import Bandage from './Components/Bandage.jsx';
import NotePad from './Components/NotePad.jsx';
import Weather from './Components/Weather.jsx';
import ErrorPage from './Components/ErrorPage.jsx';
import ResumeRedirect from './Components/ResumeRedirect.jsx';


const router = createBrowserRouter([
  { path: "/", element: <App />, errorElement: <ErrorPage /> },
  { path: "/whisper", element: <Whisper /> },
  { path: "/netflix", element: <Netflix /> },
  { path: "/todo", element: <ToDo /> },
  { path: "/bandage", element: <Bandage /> },
  { path: "/notepad", element: <NotePad /> },
  { path: "/weather", element: <Weather /> },
  { path: "/resume", element: <ResumeRedirect /> },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
<RouterProvider router={router} />
  </React.StrictMode>
);
