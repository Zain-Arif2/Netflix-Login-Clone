import React from "react";
import '../../Components/form/Form.css';

function Form() {
  return (
    <div className="main-form">
      <h1>Sign In</h1>

      <form action="#">
        <div className="inputbox">
          <input type="email" placeholder="Email or mobile number" required />
        </div>
        <div className="inputbox">
          <input type="password" placeholder="Password" required />
        </div>

        <div className="btn-sign">
          <button type="submit">Sign In</button>
        </div>
      </form>

      <div className="heading">
        <h2>OR</h2>
      </div>

      <div className="btn">
        <button>Use a Sign-In Code</button>
      </div>

      <div className="forget">
        <a href="#">Forgot Password?</a>
      </div>

      <div className="checkbox">
        <input type="checkbox" id="remember" />
        <label htmlFor="remember">Remember me</label>
      </div>

      <div className="sign">
        <h3>
          New to Netflix? <span id="gray">Sign up now</span>
        </h3>
      </div>

      <div className="captcha">
        <h4>
          This page is protected by Google reCAPTCHA to <br />
          ensure you're not a bot. <a href="#">Learn more</a>
        </h4>
      </div>
    </div>
  );
}

export default Form; 