import * as React from 'react';
import "./Resume.scss"
import globalStates from '../hooks/globalStates';

export default function Footer() {
  const { resume, setResume } = globalStates()

  const closeResume=()=>{
    setResume(false)
  }
  const renderResume=()=>{
    if(resume){
      return(
      <div className='resumeContainer'>

      <div className='resumeHeader' >
        <div className='exitButton' onClick={closeResume}>
        <div className='close close-stem1'></div>
        <div className='close close-stem2'></div>
        </div>

        <a  href="/portfolio/Daniel Olinski G. - Resume.pdf" download>
        
        <img className='downloadIcon' src="/portfolio/images/downloadIcon.png"></img>

        </a>

      </div>
      
      <div className='scrollContainer'>
      <img className="resumePic" src="/portfolio/resume.jpg"></img>
      </div>
      </div>
      )
    }
  }

  return (
    <>
    
    {renderResume()}
    </>
  );
}