import React from "react";
import Nav from "../ReusableNav";
import "./blog.css";
import twitter from "../../../images/twitter.png";
import linkedin from "../../../images/linkedin.png";
import Search from "./Reusablesearch";

import Blogcard from "./ReusableblogCard";
import Author from "./ReusableAuthor";
import Footer from "./ReusableFooter";

function Blogs() {
  return (
    <div className="main-blog">
      <Nav></Nav>
      <div className="welcome">
        <div className="welcome-text">
          <h1>Discover Nice Articles Here</h1>
          <p>
            All the Articles and Content of The site have been Updated today and
            you can find your articles and content quickly without any problems
          </p>
        </div>
        <div className="welcome-links">
          <img src={twitter} alt="" />
          <img src={linkedin} alt="" />
        </div>
      </div>
      <Search></Search>
      <div className="scroll-content">
        <Author></Author>
        <h2>Example heading for blogs</h2>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Omnis, nisi?
          In, ea tempore numquam ipsam aliquid voluptates incidunt voluptatum ad
          cum minima nobis ut illo nam, eius vel alias! Sapiente!
        </p>
      </div>
      <div className="blogs">
        <Blogcard></Blogcard>
      </div>

<div className="footer-blogs">
  <Footer></Footer>
</div>

    </div>
  );
}

export default Blogs;
