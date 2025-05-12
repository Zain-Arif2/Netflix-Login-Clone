import React from "react";
import "./Login.css";
import Netflix from "../../Assests/Image/Netflix.png";
import Form from "../form/Form";

const Login = () => {
  return (
    <>
      <div className="main-page">
        <div className="overlay" />
        <div className="logo">
          <img src={Netflix} alt="Netflix Logo" />
        </div>
        <Form />
      </div>

      <footer className="footer">
        <div className="main-footer">
          <div className="heading1">Questions? Contact us.</div>

          <div className="main-container">
            <div className="link"><a href="#">FAQ</a></div>
            <div className="link"><a href="#">Help Centre</a></div>
            <div className="link"><a href="#">Terms of Use</a></div>
            <div className="link"><a href="#">Privacy</a></div>
          </div>

          <div className="main-cont">
            <div className="link"><a href="#">Cookie Preferences</a></div>
            <div className="link"><a href="#">Corporate Information</a></div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Login;
