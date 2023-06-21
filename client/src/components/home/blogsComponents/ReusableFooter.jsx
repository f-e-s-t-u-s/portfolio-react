import React from "react";
import me from "../../../images/me.png"

function Footer() {
  const currentyear = new Date().getFullYear();

  return (
    <div className="footer-blogs">
      <div className="subscribe-blogs">
        <div className="subscribe-text">
          <h1>Subscribe for new content</h1>
          <p>
            By becoming a member of our blog, You have access to articles and
            Content
          </p>
        </div>
        <div className="email-footer">
          <input type="email" placeholder="Email Address" />
          <button>Subscribe</button>
        </div>
      </div>

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
