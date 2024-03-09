import React from "react";

function SignUpForm() {
  const [state, setState] = React.useState({
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
    alert(
      `You are sign up with name: ${name}, email: ${email}, password: ${password}, mobile: ${mobile}, and username: ${username}`
    );

    // Reset form fields
    for (const key in state) {
      setState({
        ...state,
        [key]: ""
      });
    }
  };

  return (
    <div className="form-container sign-up-container">
      <form onSubmit={handleOnSubmit}>
        <h1>Create Account</h1>
        <span>or use your email for registration</span>
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
        <button>Sign Up</button>
      </form>
    </div>
  );
}

export default SignUpForm;
