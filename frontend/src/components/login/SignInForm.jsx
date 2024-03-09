// App.js
import React, { useState } from "react";
import "./styles.css";

function SignInForm({ onSignIn, resetSignInState }) {
  const [state, setState] = useState({
    email: "",
    password: ""
  });

  const handleChange = (evt) => {
    const value = evt.target.value;
    setState({
      ...state,
      [evt.target.name]: value
    });
  };

  const handleOnSubmit = (evt) => {
    evt.preventDefault();

    const { email, password } = state;
    onSignIn(email, password);

    for (const key in state) {
      setState({
        ...state,
        [key]: ""
      });
    }
  };

  return (
    <div className="custom-form-container custom-sign-in-container custom-form">
      <form onSubmit={handleOnSubmit}>
        <h1>Sign in</h1>
        <input
          type="email"
          placeholder="Email"
          name="email"
          value={state.email}
          onChange={handleChange}
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={state.password}
          onChange={handleChange}
        />
        <a href="#">Forgot your password?</a>
        <br/>
        <button classname="custom-button1">Sign In</button>
      </form>
    </div>
  );
}

function SignUpForm({ onSignUp, resetSignUpState }) {
  const [state, setState] = useState({
    name: "",
    email: "",
    password: "",
    mobile: "",
    username: ""
  });

  const handleChange = (evt) => {
    const value = evt.target.value;
    setState({
      ...state,
      [evt.target.name]: value
    });
  };

  const handleOnSubmit = (evt) => {
    evt.preventDefault();

    const { name, email, password, mobile, username } = state;
    onSignUp(name, email, password, mobile, username);

    for (const key in state) {
      setState({
        ...state,
        [key]: ""
      });
    }
  };

  return (
    <section className="heros">
    <div className="custom-form-container custom-sign-up-container custom-form">
      <form onSubmit={handleOnSubmit}>
        <h1>Create Account</h1>
        <input
          type="text"
          name="name"
          value={state.name}
          onChange={handleChange}
          placeholder="Name"
        />
        <input
          type="email"
          name="email"
          value={state.email}
          onChange={handleChange}
          placeholder="Email"
        />
        <input
          type="password"
          name="password"
          value={state.password}
          onChange={handleChange}
          placeholder="Password"
        />
        <input
          type="text"
          name="mobile"
          value={state.mobile}
          onChange={handleChange}
          placeholder="Mobile"
        />
        <input
          type="text"
          name="username"
          value={state.username}
          onChange={handleChange}
          placeholder="Username"
        />
        <button classname="custom-button2">Sign Up</button>
      </form>
    </div>
    </section>
  );
}

export default function App() {
  const [type, setType] = useState("signIn");

  const handleSignIn = (email, password) => {
    alert(`You have logged in with email: ${email} and password: ${password}`);
  };

  const handleSignUp = (name, email, password, mobile, username) => {
    alert(
      `You have signed up with name: ${name}, email: ${email}, password: ${password}, mobile: ${mobile}, and username: ${username}`
    );
  };

  const handleSwitchForm = (newType) => {
    setType(newType);
  };

  return (
    <div className="custom-App">
      <div className={`custom-container ${type === "signUp" ? "custom-right-panel-active" : ""}`} id="custom-container">
        <SignUpForm onSignUp={handleSignUp} />
        <SignInForm onSignIn={handleSignIn} />
        <div className="custom-overlay-container">
          <div className="custom-overlay">
            <div className="custom-overlay-panel custom-overlay-left">
              <h1>Welcome Back!</h1>
              <p>To keep connected with us, please login with your personal info</p>
              <button className="custom-ghost" id="custom-signIn" onClick={() => handleSwitchForm("signIn")}>
                Sign In
              </button>
            </div>
            <div className="custom-overlay-panel custom-overlay-right">
              <h1>Hello, Friend!</h1>
              <p>Enter your personal details and start the journey with us</p>
              <button className="custom-ghost" id="custom-signUp" onClick={() => handleSwitchForm("signUp")}>
                Sign Up
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
