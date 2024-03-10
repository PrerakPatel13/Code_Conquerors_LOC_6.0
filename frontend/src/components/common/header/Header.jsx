// Header.js

import React, { useState } from "react";
import { Link } from "react-router-dom";
import Head from "./Head";
import "./header.css";
const Header = () => {
  const [click, setClick] = useState(false);

  return (
    <>
      <Head />
      <header>
        <nav>
          <ul className={click ? "mobile-nav" : ""} onClick={() => setClick(false)}>
            <div className="outer-container">
            <div className="logos">
            <h1 className="title">FlexiLearn</h1> 
            { <span className="education">Online Education & Learning Platform</span> }
          </div>
              <li className="xyz">
                <Link to="/">Home</Link>
              </li>
              <li className="xyz2">
                <Link to="/courses">Courses</Link>
              </li>
              <li className="xyz1">
                <Link to="/about">About</Link>
              </li>
              <li className="xyz1">
                <Link to="/team">Team</Link>
              </li>
              <li className="xyz1">
                <Link to="/pricing">Pricing</Link>
              </li>
              <li className="xyz1">
                <Link to="/journal">Journal</Link>
              </li>
              <li className="xyz1">
                <Link to="/contact">Contact</Link>
              </li>
              <li className="xyz1">
                <Link to="/meeting">Meeting</Link>
              </li>

              <Link to="/signedin">
              <button className="login-button">
                Sign In
              </button>
              </Link>
            </div>
          </ul>
          <button className="toggle" onClick={() => setClick(!click)}>
            {click ? <i className="fa fa-times"> </i> : <i className="fa fa-bars"></i>}
          </button>
        </nav>
      </header>
    </>
  );
};

export default Header;
