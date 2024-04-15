import React from "react";
import "./Content.scss"
import Skills from "./Skills"
import About from "./About"
import Projects from "./Projects"
import globalStates from '../hooks/globalStates';

export default function Content() {
  const { content, setContent } = globalStates()

  const renderContent = () => {
    if(content === 'content'){
      return(

        <div className="content">

          
          <Skills />
          <Projects />
          <About />

        </div>
            )
    }
    
  }

  return (
    <div>

       {renderContent()}
   
    
    </div>
  );
}