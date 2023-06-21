import React, { useState } from "react";
import Navbar from "./NavReuse";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";

function Create() {
  const [show, setShow] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [checkpassword, setCheckPassword] = useState();
  const [checkemail, setCheckemail] = useState();

  const handleFocus = () => {
    setShow(true);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === "email") {
      //check email validity
      setEmail(value);
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)
        ? setCheckemail(false)
        : setCheckemail(true);
    } else if (name === "password") {
      setPassword(value);
      !/^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/i.test(value)
        ? setCheckPassword(false)
        : setCheckPassword(true);
    }
  };

  console.log(checkemail);
  console.log(checkpassword);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = document.querySelector("form");
    const formdata = new FormData(form);
    const email = formdata.get("email");
    const password = formdata.get("password");
    const username = formdata.get("username");

    const values = {
      email: email,
      password: password,
      username: username,
    };

    if (
      email !== "" &&
      checkemail === true &&
      password !== "" &&
      checkpassword === true
    ) {
      console.log(email);
      await axios
        .post("http://localhost:8000/api/create", values)
        .then((data) => {
          console.log(data.data);
          if (data.data.error) {
            toast.error(data.data.error);
          }

          if (data.data.status === 200 && data.data.logged === true) {
            const redirect = () => (window.location.href = "/blogs/login");
            redirect();
          }
          // if (data.data.error && data.data.logged === false) {
          //   const redirect = () => (window.location.href = "/blogs/create");
          //   redirect();
          //   toast.error(data.data.error);
          // }
        })
        .catch((err) => {
          console.log(err);
          toast.error("failed to add user");
        });
    }
  };

  return (
    <div className="create-main">
         
      <div className="login-image">
        <Navbar></Navbar>

        <div className="login-form">
          <form action="" onSubmit={handleSubmit}>
          <ToastContainer
        position="top-center"
        autoClose={500}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        theme="light"
      />
     
      <ToastContainer />
            <div
              className={`form-center-main ${
                checkemail === true ? "green" : ""
              } ${checkemail === false && "red"}  ${
                checkpassword === true ? "green" : ""
              }  ${checkpassword === false ? "red" : ""} `}
            >
              <div className="form-center">
                <h1>Create Account</h1>
                <input
                  className="login-input-username"
                  type="text"
                  placeholder="username"
                  name="username"
                />
                <input
                  class="login-input"
                  type="text"
                  placeholder="Email Address"
                  name="email"
                  onFocus={handleFocus}
                  onChange={handleChange}
                  value={email}
                />
                <input
                  type="password"
                  placeholder="Password"
                  className="login-input"
                  name="password"
                  onFocus={handleFocus}
                  onChange={handleChange}
                  value={password}
                />

                <div className="requirements">
                  <ul>
                    <li>Password must contain Minimum eight characters</li>
                    <li>At least one uppercase letter</li>
                    <li>one lowercase letter</li>
                    <li>one number and one special character</li>
                  </ul>
                </div>

                <button type="submit">Continue</button>

                <small>Or</small>

                <button>Continue with google</button>
                <button>Continue with Apple</button>

                <a href="/blogs/login">
                  {" "}
                  <p>Already Have an account? Login</p>{" "}
                </a>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Create;
