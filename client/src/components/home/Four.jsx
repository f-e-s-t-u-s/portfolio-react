import React from "react";
import redirect from "../../images/redirect.png";
import "./home.css";
import  netflix from "../../images/netflix.png"

function Projects() {
  return (
    <div className="four-projects">
      <div className="project-one">
        <h1>Latest Projects</h1>
        <hr style={{ border: "solid black 2px", width: "90%" }} />

        <div id="netflix" className="project-details">
          <h1>Netflix Clone</h1>
          <img className="project-img" src={redirect} alt="" />
        </div>

        <hr
          style={{ border: "solid black 2px", width: "30%", float: "left" }}
        />

        <div className="project-card">
            <img src={netflix} alt="" />
            <button>View Project</button>
        </div>
      </div>
      <div className="project-two">
        <hr style={{ border: "solid black 2px", width: "90%" }} />

        <div  className="project-details">
          <h1>Weather App</h1>
          <img className="project-img" src={redirect} alt="" />
        </div>

        <hr
          style={{ border: "solid black 2px", width: "30%", float: "left" }}
        />

        <div className="project-card">
        <img src={netflix} alt="" />
            <button>View Project</button>
        </div>
      </div>
      <div className="project-three">
        <hr style={{ border: "solid black 2px", width: "90%" }} />
        <div className="project-details">
          <h1>Countries App</h1>
          <img className="project-img" src={redirect} alt="" />
       
        </div>

        <hr
          style={{ border: "solid black 2px", width: "30%", float: "left" }}
        />

        <div className="project-card">
        <img src={netflix} alt="" />
            <button>View Project</button>
        </div>
        <button id="allprojects" > View all my projects</button>
      </div>
    </div>
  );
}

export default Projects;
