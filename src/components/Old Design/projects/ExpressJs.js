import React from "react";
import globalStates from '../../hooks/globalStates';

//This section is rendered inside the "Projects" component.
export default function ExpressJs() {
  const { expressJs, setExpressJs } = globalStates()

    //when the text is clicked change the state to "true" or "false". This state is used to expand or collapse this component.
    const handelClickExpressJs = () => {
      setExpressJs(!expressJs)
    }

    //depending on the value of the state the app will render a collapsed component or a expanded component
    if(expressJs){
      return (
    

 
          <div className="vert-subcontainer-group">
            <div className="vert-subcontainer-group-inner">
              <div className="projects-container" >
    
              <div className="project-tittle" onClick={handelClickExpressJs}>
              ExpressJS Server Template
                </div>
    
                <div className="vert-subcontainer-line"></div>
    
                <a className="projects-text-link" href="https://github.com/DanOlinski/expressJsServerTemplate" target="_blank">
                  Link to repository
                </a>
    
                <div className="projects-text">
                A ready to use ExpressJS server template with a PostgreSQL database.
                  <div className="text-paragraph">.</div>
                  This backend server can be used to add a database to any application, making the production of fullstack apps more straight forward and less time consuming. Setting it up is easy due to great documentation and thorough testing.
                  <div className="text-paragraph">.</div>
                  Stack: Axios, Dotenv, ejs, ExpressJS, Morgan, pg, Nodemon
    
                </div>
    
                <img className="projects-image" src="/portfolio/images//projects/expressJsServerTemplate/background.jpg"></img>
    
              </div>
            </div>
          </div>

      );
    }

    if(!expressJs){
      return (
 
        <div className="vert-subcontainer-group">
        <div className="vert-subcontainer-group-inner" onClick={handelClickExpressJs}>
          <div className="projects-container" >

          <div className="project-tittle" >
          ExpressJS Server Template
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