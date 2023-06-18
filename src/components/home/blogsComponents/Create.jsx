import React from "react";
import Navbar from "./NavReuse";

function Create (){
    return(
        <div className="create-main">
            <div className="login-image">
        <Navbar></Navbar>

        <div className="login-form">
            <form action="">
          <div className="form-center">
            
              <h1>Create Account</h1>
              <input className="login-input" type="text" placeholder="username" name="username" />
              <input class="login-input" type="text" placeholder="Email Address" name="email" />
              <input type="text" placeholder="Password" className="login-input" />
              <button>Continue</button>

              <small>Or</small>

              <button>Continue with google</button>
              <button>Continue with Apple</button>

              <a href="/blogs/login"> <p>Already Have an account? Login</p> </a>
            
          </div>
          </form>
        </div>
      </div>
        </div>
    )
}

export default Create;