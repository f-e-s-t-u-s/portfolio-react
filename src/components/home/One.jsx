import React, { useState, useEffect } from "react";
import Nav from "./ReusableNav";
import homebackground from "../../images/home.jpg";
import twitter from "../../images/twitter.png";
import linkedin from "../../images/linkedin.png";
import insta from "../../images/instagram.png";
import github from "../../images/github.png";
import line from "../../images/line.png";
import "./home.css";

function Spotlight() {
  const texts = [
    "Festus Gitahi.",
    "a Front-End Developer.",
    "a Backend Developer.",
    "a CyberSecurity Specialist.",
  ];
  const [textIndex, setTextIndex] = useState(0);
  const [text, setText] = useState("");
  const duration = 100;


  

  // useEffect(() => {
  //   const typeText = async (index, count) => {
  //     if (count <= texts[index].length) {
  //       setText((prevText) => prevText + texts[index].charAt(count - 1));
  //       await wait(duration);
  //       await typeText(index, count + 1);
  //     } else {
  //       await wait(2000); // Wait for 2 seconds before starting deletion
  //       deleteText(index, texts[index].length);
  //     }
  //   };

  //   const deleteText = async (index, count) => {
  //     if (count >= 0) {
  //       setText((prevText) => prevText.slice(0, count));
  //       await wait(duration);
  //       await deleteText(index, count - 1);
  //     } else {
  //       await wait(2000); // Wait for 2 seconds before moving to the next text
  //       setTextIndex((prevIndex) => (prevIndex + 1) % texts.length);
  //     }
  //   };

  //   const wait = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

  //   typeText(textIndex, 1);
  // }, [textIndex]);


  
  return (
    <main>
      <div className="dark">
        <Nav></Nav>
        <div className="one-content">
          <div className="socials">
            <img id="line" src={line} alt="" />
            <img src={twitter} alt="" />
            <img src={linkedin} alt="" />
            <img src={insta} alt="" />
            <img src={github} alt="" />
          </div>
          <div className="text">
            <h2>Hello There!</h2>
            <h1>
              I AM <span className="typed-text"> {text} </span>
              <span className="cursor"></span>
            </h1>
            <button>Hire Me</button>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Spotlight;
