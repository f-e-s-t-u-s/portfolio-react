import React, { useState } from "react";
import Navbar from "./NavReuse";
import axios from "axios";

function Login() {
  const [errormessage, setErrormessage] = useState("");

  const handleSubmit = async (e) => {
    const form = document.querySelector("form");

    e.preventDefault();
    const formdata = new FormData(form);

    const userData = {
      email: formdata.get("email"),
      password: formdata.get("password"),
    };
    // console.log(userData)

    //ppost data
    await axios
      .post("http://localhost:8000/api/login", userData)
      .then((data) => {
        console.log(data.data);

        if (data.data.status === 200 && data.data.logged === true) {
          const redirect = () => (window.location.href = "/blogs/");
          redirect();
        }
        if (data.data.error && data.data.logged === false) {
          const errorMessage = data.data.error;
          console.log(errorMessage);
          setErrormessage(errorMessage);
          // const redirect = () => (window.location.href = "/blogs/login");
          // redirect();
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="login-main">
      <div className="login-image">
        <Navbar></Navbar>

        <div className="login-form">
          <form action="" onSubmit={handleSubmit}>
            <div className="form-center">
              <div className="errorMessage">
                {errormessage && <p> {errormessage} </p>}
              </div>

              <h1>Sign In</h1>
              <input
                class="login-input"
                type="text"
                placeholder="Email Address"
                name="email"
              />
              <input
                type="password"
                name="password"
                placeholder="Password"
                className="login-input"
              />
              <button>Continue</button>

              <small>Or</small>

              <button>Continue with google</button>
              <button>Continue with Apple</button>

              <a href="/blogs/create">
                {" "}
                <p>Don't Have an account? Create account</p>{" "}
              </a>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
