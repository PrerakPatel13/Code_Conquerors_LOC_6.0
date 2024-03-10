import React from "react"
import { blog } from "../../../dummydata"
import "./footer.css"
// import { Link } from "react-router-dom"
import { useState } from "react"
import Contact from "../../contact/Contact"
import { useNavigate } from "react-router-dom"

const Footer = () => {
  const [click, setClick] = useState(false);
  const navigate=useNavigate()

  return (
    <>
    <br />
      <section className="newletter">
        <div className="container flexSB">
          <div className="left row">
            <h1>Newsletter - Stay tuned and get the latest update!</h1>
            <span>Far far away, behind the word mountains</span>
          </div>
          <div className="right row">
            <input type="text" placeholder="Enter email address" />
            <i className="fa fa-paper-plane"></i>
          </div>
        </div>
      </section>
      <footer>
        <div className="container padding">
          <div className="box logo">
            <h1>FlexiLearn</h1>
            <span>Online Education & Learning Platform</span>
            <br />
            <br />

            <i className="fab fa-facebook-f icon"></i>
            <i className="fab fa-twitter icon"></i>
            <i className="fab fa-instagram icon"></i>
          </div>
          <div className="box link">
            <h3>Quick Links</h3>
            <ul>
              <a href="http://localhost:3000/contact">Contact Us</a>
              <br />
              <br />
              <a href="http://localhost:3000/pricing">Pricing</a>
              <br />
              <br />
              <a href="http://localhost:3000/courses">Our Courses</a>
              <br />
              <br />
              <a href="http://localhost:3000/team">Our Team</a>
              <br />
              <br />
              <a href="http://localhost:3000/">Feedback</a>
              </ul>
          </div>
          
          <div className="box last">
            <h3>Have a Question?</h3>
            <ul>
              <li>
                <i className="fa fa-map"></i>
                203 Fake St. Mountain View, San Francisco, California, USA
              </li>
              <li>
                <i className="fa fa-phone-alt"></i>
                +2 392 3929 210
              </li>
              <li>
                <i className="fa fa-paper-plane"></i>
                info@yourdomain.com
              </li>
            </ul>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer
