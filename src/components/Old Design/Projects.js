import React from "react";
import "./Content.scss"
import "./Projects.scss"

import "./projects/SchedulerApp"
import "./projects/Budget"
import "./projects/Portfolio"
import "./projects/Scribble"
import "./projects/ExpressJs"
import "./projects/JsAlgorithms"

import globalStates from '../hooks/globalStates';
import Budget from "./projects/Budget";
import Scribble from "./projects/Scribble";
import SchedulerApp from "./projects/SchedulerApp";
import Portfolio from "./projects/Portfolio";
import ExpressJs from "./projects/ExpressJs";
import JsAlgorithms from "./projects/JsAlgorithms";

//This section is rendered inside the "Content" component, it contains all of the projects for the portfolio
export default function Projects() {
  const { projects, setProjects } = globalStates()

    //when the text is clicked change the state to "true" or "false". This state is used to expand or collapse this component.
    const handelClickProjects = () => {
      setProjects(!projects)
    }

    //depending on the value of the state "projects" the app will render a collapsed component or a expanded component
    if(projects){
      return (
    
        <div className="container">
    
          <div className="tittle" onClick={handelClickProjects}>
            <div className="tittle-text">Projects</div>
            <div className="tittle-line-projects"></div>
          </div>


          <SchedulerApp/>
          <Budget/>
          <Portfolio/>
          <Scribble/>
          <ExpressJs/>
          <JsAlgorithms/>



          <div className="tittle-close" onClick={handelClickProjects}>Close</div>
        </div>
      );
    }

    if(!projects){
      return (
    
        <div className="container-closed" onClick={handelClickProjects}>
    
          <div className="tittle" >
            {/* <div className="tittle-line-projects"></div> */}
            <div className="tittle-text">Projects</div>
            <div className="tittle-line-projects"></div>
          </div>
    
        </div>
      );
    }
}