// Header.js

import React, { useState } from "react";
import { Link } from "react-router-dom";
import Head from "./Head";
import "./header.css";
import SignInForm from "../../login/SignInForm";
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
            { <span>Online Education & Learning Platform</span> }
            {/* <img src='./images/logo.webp' alt="error"></img> */}
            {/* <h1>FlexiLearn</h1> */}
            {/* <span>Online Education & Learning Platform</span> */}
          </div>
          {/* <li className="abc">
            FlexiLearn
          </li> */}
              <li className="xyz">
                <Link to="/">Home</Link>
              </li>
              <li className="xyz1">
                <Link to="/courses">All Courses</Link>
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

              <button className="login-button">
                <Link to="/signedin">Sign In</Link>
              </button>
            </div>
          </ul>
          <div className="start">
            {/* <div className='button'>GET CERTIFICATE</div> */}
          </div>
          <button className="toggle" onClick={() => setClick(!click)}>
            {click ? <i className="fa fa-times"> </i> : <i className="fa fa-bars"></i>}
          </button>
        </nav>
      </header>
    </>
  );
};

export default Header;
