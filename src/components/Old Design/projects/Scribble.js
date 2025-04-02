import React from "react";
import globalStates from '../../hooks/globalStates';

//This section is rendered inside the "Projects" component.
export default function Scribble() {
  const { scribble, setScribble } = globalStates()

    //when the text is clicked change the state to "true" or "false". This state is used to expand or collapse this component.
    
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

                <a className="projects-text-link" href="http://44.204.238.202:8000/" target="_blank">
                  Link to website
                </a>

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
        <div className="vert-subcontainer-group-inner" onClick={handelClickScribble}>
          <div className="projects-container" >

          <div className="project-tittle" >
          Scribble
            </div>

            <div className="vert-subcontainer-line"></div>

            <div className="projects-text"></div>
            <img className="projects-image-closed"></img>

          </div>
        </div>
      </div>

      );
    }
}