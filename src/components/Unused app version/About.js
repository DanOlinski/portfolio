import React from "react";
import "./About.scss"
import "./Content.scss"
import globalStates from '../hooks/globalStates';
import AboutContent from "./AboutContent";

export default function About() {
  const { about, setAbout, projects, skills, setReflectionAbout, reflectionAbout, setReflectionSkills, setReflectionProjects } = globalStates()

    //when the text is clicked change the state to "true" or "false". This state is used to expand or collapse this component.
    const handelClick = () => {
      setAbout(!about)
      setReflectionSkills(false)
      setReflectionProjects(false)
    }

    const reflectionStateTrue = () => {
      setReflectionAbout(true)
      // console.log(reflectionAbout)
    }
    const reflectionStateFalse = () => {
      setReflectionAbout(false)
      // console.log(reflectionAbout)
    }
    const reflectionAnimation =()=>{
      if(reflectionAbout){
        return(
          <div className="container-closed reflection-buttonAnimation" onClick={handelClick} onMouseEnter={reflectionStateTrue} onMouseLeave={reflectionStateFalse}>
          <div className="reflection reflection-about reflection-about-animation"></div>
          <div className="tittle-closed" >
            <div className="tittle-text">About</div>
          </div>
          </div>
          
        )
      }else{
        return(
          <div className="container-closed" onClick={handelClick} onMouseEnter={reflectionStateTrue} onMouseLeave={reflectionStateFalse}>
          <div className="reflection reflection-about"></div>
          <div className="tittle-closed" >
            <div className="tittle-text">About</div>
          </div>
          </div>
          
        )
      }
    }

//Below is the code for the "about" section of the web app

if(about){
 if(projects){
      return(
        <div className="container-projects">
    <AboutContent/>
        </div>)
    }else{
      return(
        <div className="container">
    <AboutContent/>
        </div>)
    }
}

if(!about){
  

  if(projects){
    return (
      <div className="container-closed-shifted" onClick={handelClick}>
  <div className="reflection-about"></div>
        <div className="tittle-closed" >
          {/* <div className="tittle-line"></div> */}
          <div className="tittle-text">About</div>
          {/* <div className="tittle-line"></div> */}
        </div>
  
  
  
  
      </div>
    );
  }else if(skills){
    
      return (
        <div className="container-closed-long" onClick={handelClick} >
        <div className="tittle-closed" >
          {/* <div className="tittle-line"></div> */}
          <div className="tittle-text">About</div>
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