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
  const { projects, setProjects, setReflectionProjects, reflectionProjects, setReflectionSkills, setReflectionAbout } = globalStates()

    //when the text is clicked change the state to "true" or "false". This state is used to expand or collapse this component.
    const handelClickProjects = () => {
      setProjects(!projects)
      setReflectionSkills(false)
      setReflectionAbout(false)
      
    }

    const reflectionStateTrue = () => {
      setReflectionProjects(true)
    }
    const reflectionStateFalse = () => {
      setReflectionProjects(false)
    }
    const reflectionAnimation =()=>{
      if(reflectionProjects){
        return(
          <div className="container-closed reflection-buttonAnimation" onClick={handelClickProjects} onMouseEnter={reflectionStateTrue} onMouseLeave={reflectionStateFalse}>
          <div className="reflection reflection-projects reflection-projects-animation"></div>
          <div className="tittle-closed" >
            {/* <div className="tittle-line-projects"></div> */}
            <div className="tittle-text">Projects</div>
            {/* <div className="tittle-line-projects"></div> */}
          </div>
          </div>
        )
      }else{
        return(
          <div className="container-closed" onClick={handelClickProjects} onMouseEnter={reflectionStateTrue} onMouseLeave={reflectionStateFalse}>
          <div className="reflection reflection-projects"></div>
          <div className="tittle-closed" >
            {/* <div className="tittle-line-projects"></div> */}
            <div className="tittle-text">Projects</div>
            {/* <div className="tittle-line-projects"></div> */}
          </div>
          </div>
        )
      }
    }

    //depending on the value of the state "projects" the app will render a collapsed component or a expanded component
    if(projects){
      return (
    
        <div className="container-projects">
    
          <div className="tittle" onClick={handelClickProjects}>
            <div className="tittle-text">Projects</div>
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
    
        <>

          {reflectionAnimation()}
        </>


    
      );
    }
}