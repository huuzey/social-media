import React from "react";
import "./Auth.css";
import Logo from "../../img/logo.png";
import { useState } from "react";

const Auth = () => {
  const { isSignUp, setisSignUp } = useState(false);
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
          <h3>{isSignUp ? "Sign up" : "login"}</h3>
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
            <input
              type="text"
              className="infoInput"
              name="confirmpass"
              placeholder="Confirm Password"
            />
          </div>

          <div>
            <span style={{ fontSize: "12px" }}>
              Already have an account. Login!
            </span>
          </div>
          <button className="button infoButton" type="submit">
            Signup
          </button>
        </form>
      </div>
    </div>
  );
};
export default Auth;
