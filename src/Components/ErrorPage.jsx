import { Link } from "react-router-dom"
import React  from 'react'

function ErrorPage() {
  return (
    <div className="bg-gray-900 p-4 flex flex-col items-center justify-center h-[100vh] gap-10">
      <hi className="font-mono text-white text-center text-xl">
        Well sorry &#128542;, this is the wrong page. Hit the button below to
        return to Home page.
      </hi>
      <Link to="/">
        <button className="border text-gray-900 bg-white px-4 py-2 rounded-md font-bold">
          Take Me Home
        </button>
      </Link>
    </div>
  );
}

export default ErrorPage
