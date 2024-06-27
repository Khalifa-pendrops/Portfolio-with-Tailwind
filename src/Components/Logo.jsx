import React, { Component } from 'react';
// import { Link } from "react-router-dom";
import HamburgerMenu from './HamburgerMenu';

export class Logo extends Component {

  render() {
    return (
      <div>
        <div className="text-white flex justify-between px-[2rem] py-[10px] bg-gray-900 fixed top-0 left-0 right-0 z-10">
          <a className="name-logo-linked" href="/">
            <h2 className="text-2xl w-10 max-sm:text-2xl max-sm:w-10">
              Khali<span className="text-green-700 animate-pulse">Fa.</span>
            </h2>
          </a>
          <HamburgerMenu />
        </div>
      </div>
    );
  }
}

export default Logo
