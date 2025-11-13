import React, { useEffect, useRef } from "react";
import globalStates from '../../hooks/globalStates';
import axios from "axios";

//This section is rendered inside the "Projects" component.
export default function Scribble() {
  const { scribble, setScribble, url, setUrl, setLoading, click, setClick } = globalStates()

  const handelClickSiteDown = () => {
    
    //this is the url for the app website
  //usually I preffer accessing an expressJs server instead of a react server. Because my express servers have CROS enabled, wich allows for API requests. if I try to perform an API request to an end point that is not configured to allow for CROS protocol, then even if the url works, this app will throw an error
    setUrl('http://3.145.160.71:3010/')
console.log(url)
    //loading state sets the loading animation
    setLoading(true)
    //the click state triggers the useEffect to run, I can't use the loading state change to trigger the useEffect because it is being changed inside the useEffect and that would cause a loop
    setClick(!click)
  }

    const handelClickScribble = () => {
      setScribble(!scribble)
    }

    //depending on the value of the state the app will render a collapsed component or a expanded component
    if(scribble){
      return (

    
          <div className="vert-subcontainer-group">
            <div className="vert-subcontainer-group-inner">
              <div className="projects-container" >
    
              <div className="project-tittle" onClick={handelClickScribble}>
              Scribble
                </div>
    
                <div className="vert-subcontainer-line"></div>
    
                <a className="projects-text-link" href="https://github.com/DanOlinski/Scribble" target="_blank">
                  Link to repository
                </a>

            <div className="projects-text-link" onClick={handelClickSiteDown}>
              Link to website
            </div>

                <div className="projects-text">
                  A fullstack WordPress CRUD app where a user can add notes and sketches.
                  <div className="text-paragraph">.</div>
                  There are ACFs where an editor with access to the wp-admin user can add images that show up below the notes.
                  <div className="text-paragraph">.</div>
                  This app includes SEO
                  <div className="text-paragraph">.</div>
                  Stack: PHP, WordPress, WebPack, SASS, HTML, Ajax, jQuery, VanillaJS, Docker, PhpMyAdmin
    
                </div>
    
                <img className="projects-image" src="/portfolio/images//projects/scribble/snapshot.jpg"></img>
    
              </div>
            </div>
          </div>


      );
    }

    if(!scribble){
      return (
    
        <div className="vert-subcontainer-group">
        <div className="vert-subcontainer-group-inner vert-subcontainer-group-inner-closed" onClick={handelClickScribble}>
          <div className="projects-container" >

          <div className="projects-image-closed">
          {/* <div className="vert-subcontainer-line-closed"></div> */}
          <div className="project-tittle" >Scribble</div>
          {/* <div className="vert-subcontainer-line-closed"></div> */}
          </div>
           
          </div>
        </div>
      </div>

      );
    }
}