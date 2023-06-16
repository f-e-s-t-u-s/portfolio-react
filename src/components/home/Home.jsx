import React from "react";
import "./home.css"
import "./main.css"
import Spotlight from "./One";
import About from "./Two"
import Services from "./Three";
import Projects from "./Four";
import Contact from "./Five";

function Home(){
    return(
        <div className="home">
            <div className="one">
        <Spotlight></Spotlight>
            </div>

            <div className="two">
                <About></About>
            </div>

            <div className="three">
                <Services></Services>
            </div>

            <div className="four">
                <Projects></Projects>
            </div>

            <div className="five">
                <Contact></Contact>
            </div>
        </div>
    )
}

export default Home;