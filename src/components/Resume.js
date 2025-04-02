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
      <div  className='resumeContainer'>

<div ref={resumeRef}>

      <div className='resumeHeader'  >
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
      </div>
      )
    }
  }

  //----------------
  //this is used to set a reference value for a div (in the div you want to reference place ref="<variable>") the variable name has to end with Ref
    //this reference is used for the useEffect below to identify when the user clicks outside of a given div, so that the dropDown hook can be set to false, triggering the conditional statement in the function renderDropDownMenu and consequently closing the drop down menu
    const resumeRef = React.useRef();
  
    //this useEffect listens for clicks on the browser, if the click occurs outside of the drop down menu (detect by the use of the variable declared above; resumeRef), the dropDown state will be changed to false triggering the conditional statement in the function renderDropDownMenu and consequently closing the drop down menu
    React.useEffect(() => {
  
      //this function is called in the event listener below, and checks if a click occured outside of the drop down menu, it then sets the value of dropDown state to false.
      const closeMenuOnClickOutside = (e) => {
        //this first condition, prevents the app from trying to read an undefined object (resumeRef)
        console.log(e.target)

        if(resumeRef.current){
    
    if (!resumeRef.current.contains(e.target)) {
      
      setResume(false);
    }
  
  }
  
      };
  
      //event listener
      document.body.addEventListener('mousedown', closeMenuOnClickOutside);
  
      //this function terminates the event listener in order to make the interface run more efficiently
      return () => {
        document.body.removeEventListener('mousedown', closeMenuOnClickOutside);
      };
  
    }, []);
  
  //----------------
  return (
    <>
    
    {renderResume()}
    </>
  );
}