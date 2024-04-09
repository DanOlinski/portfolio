import React from "react";
import "./Content.scss"
import globalStates from '../hooks/globalStates';

export default function Content() {
  const { content, setContent } = globalStates()

  const renderContent = () => {
    if(content === 'content'){
      return(

        <div className="content">
        
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