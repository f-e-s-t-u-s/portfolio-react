import React, { useState } from "react";
import me from "../../../images/me.png";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";

function Footer() {
  const [show, setShow] = useState(false);
  const currentyear = new Date().getFullYear();
  const [email, setEmail] = useState("");
  const [checkemail, setCheckemail] = useState();

  const handleFocus = () => {
    setShow(true);
  };

  const handleChange = (e) => {
    const {name, value } = e.target;

    if(name === "email"){
      setEmail(value);
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)
        ? setCheckemail(false)
        : setCheckemail(true);
    }
  }

  const handleSubmit =  async (e) =>{
    e.preventDefault();
    const form = document.querySelector('form');
    const formdata = new FormData(form);
    const email =  formdata.get("email");

    const subData = {
      email: email,
    }

    if(email !== "" && checkemail === true)
      await axios.post("http://localhost:8000/api/mail", subData).then((data)=>{
        console.log(data.data);

        if (data.data.subbed === true){
          const redirect = () => (window.location.href = "/blogs/thankyou")
          redirect();
          // toast.error(data.data.error)
        }
      // else{
          
      //     // toast.error(data.data.error);
      //     const errorMessage = .response.data.detail;
      //     toast.error(errorMessage); 

      //     // toast.error(data.data.error)
      //   }
        
      }).catch((error) => {
        console.error(error);
        if (error.response) {
          console.log(error.response.status); // Log the status code
          console.log(error.response.data); // Log the response data
          console.log(error.response.data.error); // Log the specific error message
          const errorMessage = error.response.data.detail;
          toast.error(errorMessage); // Display error message using toast
        } else {
         
          toast.error('An error occurred.'); // Display a generic error message using toast
        }
      });
  }

  return (
    <div className="footer-blogs"  >
      <ToastContainer
        position="top-center"
        autoClose={500}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        theme="light"
      />
      
      <form action="" onSubmit={handleSubmit} >
      <div className="subscribe-blogs">
        <div className="subscribe-text">
          <h1>Subscribe for new content</h1>
          <p>
            By becoming a member of our blog, You have access to articles and
            Content
          </p>
        </div>
        <div className="email-footer">
          <input type="email" placeholder="Email Address"  name="email"  onChange={handleChange} onFocus={handleFocus}  value={email}/>
          <button type="submit" >Subscribe</button>
        </div>
      </div>
      </form>

      <div className="bottom-blogs">
        <div className="footer-links">
          <p>Home</p>
          <p>Blog</p>
          <p>Services</p>
          <p>Learn</p>
          <p>Pricing</p>
        </div>
        <div className="logo-footer">
          <img src={me} alt="" />
        </div>
        <div className="copyright">
          <p> &copy; {currentyear} Festus Gitahi. All rights reserved </p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
