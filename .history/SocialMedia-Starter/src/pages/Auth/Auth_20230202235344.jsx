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
   
  const [confirmPass,setconfirmPass]=useState(true)

  
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
                onClick={handleChange}
              />
              <input
                type="text"
                placeholder="Last Name"
                className="infoInput"
                name="lastname"
                onClick={handleChange}
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
            />
          </div>

          <div>
            <input
              type="password"
              className="infoInput"
              name="password"
              placeholder="Password"
              onClick={handleChange}
            />
            {isSignUp && (
              <input
                type="password"
                className="infoInput"
                name="confirmPass"
                placeholder="Confirm Password"
                onClick={handleChange}
              />
            )}
          </div>

          <span style={{display:confirmPass?"none":"block",color:'red',fontSize:12px,alignSelf:"flex-end",marginRight:"5px"}
          }>* confirm password in not same</span>

          <div>
            <span
              style={{ fontSize: "12px", cursor: "pointer" }}
              onClick={() => setisSignUp((prev) => !prev)}
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
