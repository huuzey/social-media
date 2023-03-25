import React from "react";
import "./Auth.css";
import Logo from "../../img/logo.png";
import { useState } from "react";

const Auth = () => {
  const { isSignUp, setisSignUp } = useState(true);
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
        <form className="infoForm authForm">
          <h3>{isSignUp ? "Sign up" : "Login"}</h3>
          {isSignUp && (
            <div>
              <input
                type="text"
                placeholder="First Name"
                className="infoInput"
                name="firstname"
              />
              <input
                type="text"
                placeholder="Last Name"
                className="infoInput"
                name="lastname"
              />
            </div>
          )}

          <div>
            <input
              type="text"
              className="infoInput"
              name="username"
              placeholder="Usernames"
            />
          </div>

          <div>
            <input
              type="text"
              className="infoInput"
              name="password"
              placeholder="Password"
            />
            {isSignUp && (
              <input
                type="text"
                className="infoInput"
                name="confirmpass"
                placeholder="Confirm Password"
              />
            )}
          </div>

          <div>
            <span style={{ fontSize: "12px" }}>
              Already have an account. Login!
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
