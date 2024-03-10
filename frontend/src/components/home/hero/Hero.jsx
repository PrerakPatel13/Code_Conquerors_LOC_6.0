import React from "react";
import Heading from "../../common/heading/Heading";
import "./Hero.css";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <>
      <section className="hero">
        <div className="container">
          <div className="row">
            <Heading
              subtitle="WELCOME TO FlexiLearn"
              title="Best Online Education Platform."
            />
            <p>
              Empower your educational journey with FlexiLearn: Where Learning Meets Flexibility, unlocking boundless possibilities in the realm of online education.
            </p>
            <div className="button">
              <Link to="/">
                <button className="primary-btn">
                  GET STARTED NOW <i className="fa fa-long-arrow-alt-right"></i>
                </button>
              </Link>
              <Link to="/courses">
                <button>
                  VIEW COURSE <i className="fa fa-long-arrow-alt-right"></i>
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>
      <div className="margin"></div>
    </>
  );
}

export default Hero;
