import React from "react";
import "./home.css"
import Logo from "../../images/me.png"
import search from "../../images/search.png"

function Nav(){
    return(
        <nav>
           <div className="logo"> <img src={Logo}  /></div>
           <div className="links">
            <h1>About</h1>
            <h1>Service</h1>
            <h1>Portfolio</h1>
            <h1>Testimonial</h1>
           </div>

           <div className="search">
            <input type="text" placeholder="Search" />
                <img src= {search}  />

           </div>

        </nav>
    )
}
export default Nav;