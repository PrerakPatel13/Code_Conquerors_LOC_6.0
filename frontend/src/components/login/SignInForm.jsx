import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./styles.css";

function SignInForm({ onSignIn }) {
  const [state, setState] = useState({
    email: "",
    password: "",
  });

  const handleChange = (evt) => {
    const { name, value } = evt.target;
    setState({
      ...state,
      [name]: value,
    });
  };

  const handleOnSubmit = async (evt) => {
    evt.preventDefault();

    const { email, password } = state;

    // Frontend validation
    if (!email || !password) {
      toast.error("Email and password are required");
      return;
    }

    try {
      const response = await fetch("http://localhost:8000/api/v1/users/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();
      if (response.ok) {
        toast.success("Logged in successfully");
        onSignIn(data.user.email, data.accessToken, data.refreshToken);
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      console.error("Error signing in:", error);
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
        <br />
        <button className="custom-button1">Sign In</button>
      </form>
    </div>
  );
}

function SignUpForm({ onSignUp }) {
  const [state, setState] = useState({
    username: "",
    email: "",
    fullName: "",
    password: "",
  });

  const handleChange = (evt) => {
    const { name, value } = evt.target;
    setState({
      ...state,
      [name]: value,
    });
  };

  const handleOnSubmit = async (evt) => {
    evt.preventDefault();

    const { username, email, fullName, password } = state;

    // Frontend validation
    if (!username || !email || !fullName || !password) {
      toast.error("All fields are required");
      return;
    }

    try {
      const response = await fetch("http://localhost:8000/api/v1/users/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, email, fullName, password }),
      });

      const data = await response.json();
      if (response.ok) {
        toast.success("Signed up successfully");
        onSignUp(data.user.email, data.accessToken, data.refreshToken);
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      console.error("Error signing up:", error);
    }
  };

  return (
    <section className="heros">
    <div className="custom-form-container custom-sign-up-container custom-form">
      <form onSubmit={handleOnSubmit}>
        <h1>Create Account</h1>
        <input
          type="text"
          name="username"
          value={state.username}
          onChange={handleChange}
          placeholder="Username"
        />
        <input
          type="email"
          name="email"
          value={state.email}
          onChange={handleChange}
          placeholder="Email"
        />
        <input
          type="text"
          name="fullName"
          value={state.fullName}
          onChange={handleChange}
          placeholder="Full Name"
        />
        <input
          type="password"
          name="password"
          value={state.password}
          onChange={handleChange}
          placeholder="Password"
        />
        <button className="custom-button2">Sign Up</button>
      </form>
    </div>
    </section>
  );
}

export default function App() {
  const [type, setType] = useState("signIn");

  const handleSignIn = (email, accessToken, refreshToken) => {
    console.log("Logged in successfully:", email, accessToken, refreshToken);
  };

  const handleSignUp = (email, accessToken, refreshToken) => {
    console.log("Signed up successfully:", email, accessToken, refreshToken);
  };

  const handleSwitchForm = (newType) => {
    setType(newType);
  };

  return (
    <div className="custom-App">
      <ToastContainer />
      <div
        className={`custom-container ${
          type === "signUp" ? "custom-right-panel-active" : ""
        }`}
        id="custom-container"
      >
        {type === "signUp" ? (
          <SignUpForm onSignUp={handleSignUp} />
        ) : (
          <SignInForm onSignIn={handleSignIn} />
        )}
        <div className="custom-overlay-container">
          <div className="custom-overlay">
            <div className="custom-overlay-panel custom-overlay-left">
              <h1>Welcome Back!</h1>
              <p>To keep connected with us, please login with your personal info</p>
              <button
                className="custom-ghost"
                id="custom-signIn"
                onClick={() => handleSwitchForm("signIn")}
              >
                Sign In
              </button>
            </div>
            <div className="custom-overlay-panel custom-overlay-right">
              <h1>Hello, Friend!</h1>
              <p>Enter your personal details and start the journey with us</p>
              <button
                className="custom-ghost"
                id="custom-signUp"
                onClick={() => handleSwitchForm("signUp")}
              >
                Sign Up
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
