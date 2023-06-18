import React from "react";
import "./home.css"
import Logo from "../../images/me.png"
import search from "../../images/search.png"

function Nav(){
    return(
        <nav>
           <div className="logo"> <a href="/"><img src={Logo}  /></a> </div>
           <div className="links">
            <h1>About</h1>
            <h1>Service</h1>
            <h1>Portfolio</h1>
           <a href="blogs"> <h1>Blogs</h1></a>
           </div>

           <div className="search">
            <input type="text" placeholder="Search" />
                <img src= {search}  />

           </div>

        </nav>
    )
}
export default Nav;