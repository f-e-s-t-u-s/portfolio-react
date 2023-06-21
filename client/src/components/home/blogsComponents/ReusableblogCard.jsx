import React from "react";
import Author from "./ReusableAuthor";
import cover from "../../../images/picoctf-logo.jpg"
import calendar from "../../../images/calendar.png"
import views from "../../../images/views.png"

function Blogcard() {
  return (
    <div className="blogcard">
      <div className="card-top">
        <img id="cover" src={cover} alt="" />
        <div className="author-overlay">
          <Author />
        </div>
      </div>

      <div className="card-bottom">
        <h2>Blog Heading for Blog 1</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur
          reprehenderit accusantium debitis labore odio odit harum iusto quidem?
          Officia doloremque similique fuga nulla illo modi reiciendis vitae at
          hic consectetur?
        </p>
        <hr />
      <div className="others-card-bottom">
      <h3> <img src={calendar} alt="" />  date</h3>
      <h3> <img src={views} alt="" /> views</h3>
      </div>
      <button>Read More</button>
      </div>
     
    </div>
  );
}

export default Blogcard;
