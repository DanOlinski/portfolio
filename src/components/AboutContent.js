import React from "react";
import "./About.scss"
import "./Content.scss"
import globalStates from '../hooks/globalStates';

export default function About() {
  const { about, setAbout } = globalStates()

    //when the text is clicked change the state to "true" or "false". This state is used to expand or collapse this component.
    const handelClick = () => {
      setAbout(!about)
    }

//Below is the code for the "about" section of the web app
  return (
    <>

      <div className="tittle" onClick={handelClick}>
        <div className="tittle-text">About</div>
        <div className="tittle-line-about"></div>
      </div>


      <div className="about-text">
      <div className="vert-subcontainer-group-inner">
      Hi, I am Daniel Olinski G., experienced fullstack software developer with a background in engineering. 
      <div className="text-paragraph">.</div>
      I am motivated and detail-oriented with demonstrated experience in designing, developing and maintaining software systems. 
      <div className="text-paragraph">.</div>
      I am committed to deliver high-quality results. My main assets are backend debugging, UX/UI and team collaboration.
</div>
</div>
<div className="tittle-close" onClick={handelClick}>Close</div>
    </>
  );


}