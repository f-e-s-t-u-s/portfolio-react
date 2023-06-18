import React from "react";
import "./home.css";
import me from "../../images/me.jpg"

function About() {
  return (
    <div className="about-me-main">
      <div className="my-image">
        <img src={me} alt="" />
      </div>
      <div className="about-text">
        <h1>About Me</h1>
        <small>Full-Stack Web Developer || CyberSecurity Specialist</small>
        <div className="two-text">
        <p>
          I am a skilled web developer and cybersecurity analyst. With a strong
          passion for creating secure and user-friendly online experiences, I
          excel in developing seamless and scalable web solutions tailored to
          meet clients' needs. My expertise lies in HTML, CSS, JavaScript and
          others, which allows me to craft innovative websites that are at the
          forefront of industry trends and best practices.
        </p>
        <p>
          In the realm of cybersecurity, I conduct comprehensive vulnerability
          assessments and penetration testing to ensure robust protection for
          clients' sensitive data. My meticulous attention to detail and
          analytical mindset enable me to identify and address potential risks
          effectively. I take pride in my ability to work collaboratively with
          teams and stakeholders, communicating complex concepts in a clear and
          concise manner.{" "}
        </p>

        <p>
          {" "}
          With my expertise in web development and cybersecurity analysis, I am
          equipped to elevate your online presence and safeguard your digital
          assets. I am dedicated to delivering exceptional results and staying
          abreast of the latest industry advancements. Let's work together to
          create secure and outstanding web experiences
        </p>
        </div>
      </div>
    </div>
  );
}

export default About;
