import React from "react";
import Navbar from "./NavReuse";

function Login() {
  return (
    <div className="login-main">
      <div className="login-image">
        <Navbar></Navbar>

        <div className="login-form">
            <form action="">
          <div className="form-center">
            
              <h1>Sign In</h1>
              <input class="login-input" type="text" placeholder="Email Address" name="email" />
              <input type="text" placeholder="Password" className="login-input" />
              <button>Continue</button>

              <small>Or</small>

              <button>Continue with google</button>
              <button>Continue with Apple</button>

              <a href="/blogs/create"> <p>Don't Have an account? Create account</p> </a>
            
          </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
