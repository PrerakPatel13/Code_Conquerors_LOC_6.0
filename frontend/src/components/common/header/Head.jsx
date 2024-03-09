import React from "react";
// import { Link } from "react-router-dom";

const Head = () => {
  return (
    <>
      <section className="head">
        <div className="container flexSB">
          <div className="logo">
            {/* <img src='./images/logo.webp' alt="error"></img> */}
            {/* { <h1>FlexiLearn</h1> }
            { <span>Online Education & Learning Platform</span> } */}
          </div>

          <div className="social">
            <div className="button-container">
              {/* <button className="login-button">
                <Link to="/login">Login</Link>
              </button>
              <button className="signup-button">
                <Link to="/signup">Sign Up</Link>
              </button> */}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Head;
