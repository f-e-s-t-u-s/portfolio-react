import React from "react";
import Author from "./ReusableAuthor";
import cover from "../../../images/picoctf-logo.jpg"

function Blogcard() {
  return (
    <div className="blogcard">
      <div className="card-top">
        
        <img id="cover" src={cover} alt="" />
        <Author></Author>

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
      <h3>date</h3>
      <h3>views</h3>
      </div>
      <button>Read More</button>
      </div>
     
    </div>
  );
}

export default Blogcard;
