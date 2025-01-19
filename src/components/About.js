import React from "react";
import "./About.scss"
import "./Content.scss"

export default function About() {

//Below is the code for the "about" section of the web app
  return (
    <div className="container">

      <div className="tittle">
        <div className="tittle-text">About</div>
        <div className="tittle-line-about"></div>
      </div>


      <div className="about-text">
      <div className="vert-subcontainer-group-inner">
      Hi, I am Daniel Olinski G., experienced fullstack software developer with a background in engineering, based out of Calgary-AB. 
      <div className="text-paragraph">.</div>
      I am Motivated and detail-oriented with demonstrated experience in designing, developing and maintaining software systems. 
      <div className="text-paragraph">.</div>
      I am committed to deliver high-quality results. My main assets are backend debugging, UX, UI and attention to detail.
</div>
</div>

    </div>
  );
}