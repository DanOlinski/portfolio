import React from "react";
import "./Skills.scss"
import "./Content.scss"
import globalStates from '../hooks/globalStates';
import SkillsContent from "./SkillsContent";

//This component displays all of the skills for the portfolio web page
export default function Skills() {
  const { skills, setSkills, projects, setReflectionSkills, reflectionSkills, setReflectionAbout, setReflectionProjects } = globalStates()

  //when the text is clicked change the state to "true" or "false". This state is used to expand or collapse this component.
  const handelClick = () => {
    setSkills(!skills)
      setReflectionAbout(false)
      setReflectionProjects(false)
  }

  const reflectionStateTrue = () => {
    setReflectionSkills(true)
  }
  const reflectionStateFalse = () => {
    setReflectionSkills(false)
  }
  const reflectionAnimation =()=>{
    if(reflectionSkills){
      return(
        <div className="container-closed reflection-buttonAnimation" onClick={handelClick} onMouseEnter={reflectionStateTrue} onMouseLeave={reflectionStateFalse}>
        <div className="reflection reflection-skills reflection-skills-animation"></div>
        <div className="tittle-closed" >
          <div className="tittle-text">Skills</div>
        </div>
        </div>
        
      )
    }else{
      return(
        <div className="container-closed" onClick={handelClick} onMouseEnter={reflectionStateTrue} onMouseLeave={reflectionStateFalse}>
        <div className="reflection reflection-skills"></div>
        <div className="tittle-closed" >
          <div className="tittle-text">Skills</div>
        </div>
        </div>
        
      )
    }
  }
  
  if(skills){
    if(projects){
      return(
        <div className="container-projects">
    <SkillsContent/>
        </div>)
    }else{
      return(
        <div className="container">
    <SkillsContent/>
        </div>)
    }
    
  }

  if(!skills){
    if(projects){
      return (
        <div className="container-closed-shifted" onClick={handelClick}>
    <div className="reflection-skills"></div>
          <div className="tittle-closed" >
            {/* <div className="tittle-line"></div> */}
            <div className="tittle-text">Skills</div>
            {/* <div className="tittle-line"></div> */}
          </div>
    
  
    
    
        </div>
      );
    }else{
      return (
        <>
    
    {reflectionAnimation()}
    
  
    
    
        </>
      );
    }
  }
}