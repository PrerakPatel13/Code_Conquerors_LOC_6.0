import React from "react"
import Heading from "../../common/heading/Heading"
import "./Hero.css"

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
              <button className="primary-btn">
              <a href="http://localhost:3000/">GET STARTED NOW</a>
                 <i className="fa fa-long-arrow-alt-right"></i>
              </button>
              <button>
                <a href="http://localhost:3000/courses">
                VIEW COURSE 
                </a><i className="fa fa-long-arrow-alt-right"></i>
              </button>
            </div>
          </div>
        </div>
      </section>
      <div className="margin"></div>
    </>
  );
}

export default Hero
