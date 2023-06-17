import React from "react";
import mail from "../../images/mail.png";
import phone from "../../images/phone-call.png";
import wave from "../../images/wave.png"
import redirect from "../../images/redirect.png"


function Contact() {
  return (
    <div className="contact-main">
      <div className="contact-left">
        <h1>Let's Discuss Your Project</h1>
        <hr style={{ border: "solid black 2px", width: "100%" }} />
        <div className="mail-img">
          <img src={mail} alt="" />
          
          <a href="mailto:festusgitahik@gmail.com"><p name= "email">festusgitahik@gmail.com</p></a>
        </div>

        <hr style={{ border: "solid black 2px", width: "100%" }} />
        <div className="mail-img">
          <img src={phone} alt="" />
          <a href="tel:+254790504636"><p>+254790504636</p></a>
         
      
        </div>
      </div>

      <div className="contact-right">
        <div className="square">
            <div className="hello-wave">
            <img src= {wave} alt="" />
            <h2>Say Hi</h2>
            
            </div>
           <img  id="redirect" src={redirect} alt="" />
       </div>
      </div>
    </div>
  );
}
export default Contact;
