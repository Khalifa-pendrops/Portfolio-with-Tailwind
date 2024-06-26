import React, { Component } from 'react';
// import { Link } from "react-router-dom";
import HamburgerMenu from './HamburgerMenu';

export class Logo extends Component {

  render() {
    return (
      <div>
        <div className="logo-header">
          <a className="name-logo-linked" href="/#home">
            <h2 className="name-logo">
              Kha<span>lifa.</span>
            </h2>
          </a>
          <HamburgerMenu />
        </div>
      </div>
    );
  }
}

export default Logo
