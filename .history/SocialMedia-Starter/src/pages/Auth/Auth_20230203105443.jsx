import React from "react";
import "./Auth.css";
import Logo from "../../img/logo.png";
import { useState } from "react";

const Auth = () => {
  const [isSignUp, setisSignUp] = useState(true);
  const [data, setdata] = useState({
    firstname: "",
    lastname: "",
    password: "",
    confirmPass: "",
    usernames: "",
  });
  const handleChange = (e) => {
    setdata({ ...data, [e.target.name]: e.target.value });
  };

  const [confirmPass, setconfirmPass] = useState(true);
  const handleSubmit = (e) => {
    e.preventDefault();
    if (isSignUp) {
      if (data.password !== data.confirmPass) {
        setconfirmPass(false);
      }
    }
  };
  const resetForm = () => {
    setconfirmPass(true);
    setdata({
      firstname: "",
      lastname: "",
      password: "",
      confirmPass: "",
      usernames: "",
    });
  };

  return (
    <div className="Auth">
      <div className="a-left">
        <img src={Logo} alt="" />
        <div className="Webname">
          <h1>ZKC Media</h1>
          <h6>Explore the ideas throughout the world</h6>
        </div>
      </div>
      {/*right side*/}
      <div className="a-right">
        <form className="infoForm authForm" onSubmit={handleSubmit}>
          <h3>{isSignUp ? "Sign up" : "Login"}</h3>
          {isSignUp && (
            <div>
              <input
                type="text"
                placeholder="First Name"
                className="infoInput"
                name="firstname"
                onClick={handleChange}
                value={data.firstname}
              />
              <input
                type="text"
                placeholder="Last Name"
                className="infoInput"
                name="lastname"
                onClick={handleChange}
                value={data.lastname}
              />
            </div>
          )}

          <div>
            <input
              type="text"
              className="infoInput"
              name="username"
              placeholder="Usernames"
              onClick={handleChange}
              value={data.usernames}
            />
          </div>

          <div>
            <input
              type="password"
              className="infoInput"
              name="password"
              placeholder="Password"
              onClick={handleChange}
              value={data.password}
            />
            {isSignUp && (
              <input
                type="password"
                className="infoInput"
                name="confirmPass"
                placeholder="Confirm Password"
                onClick={handleChange}
                value={data.confirmPass}
              />
            )}
          </div>

          <span
            style={{
              display: confirmPass ? "none" : "block",
              color: "red",
              fontSize: "12px",
              alignSelf: "flex-end",
              marginRight: "5px",
            }}
          >
            * confirm password in not same
          </span>

          <div>
            <span
              style={{ fontSize: "12px", cursor: "pointer" }}
              onClick={() => {
                setisSignUp((prev) => !prev);
                resetForm();
              }}
            >
              {isSignUp
                ? "Already have an account. Login!"
                : "Don`t have an account Signin!"}
            </span>
          </div>
          <button className="button infoButton" type="submit">
            {isSignUp ? "Signup" : "Login"}
          </button>
        </form>
      </div>
    </div>
  );
};
export default Auth;
