import * as React from 'react';
import "./SiteDown.scss";
import globalStates from '../hooks/globalStates';
// import resumePdf from  '../Daniel Olinski G. - Resume.pdf';
// this loads the image before the resume component is opened so that the animation of opening the resume component works smoothly
// import image from "../resume.jpg";

export default function SiteDown() {
  const { resume, setResume, siteDown, setSiteDown } = globalStates()

  const closeSiteDown=()=>{
    setSiteDown(false)
  }
  const renderSiteDown=()=>{

    if(siteDown){
      return(
      <div  className='siteDownContainer'>

<div ref={siteDownRef}>

      <div className='siteDownHeader'  >
        <div className='exitButton' onClick={closeSiteDown}>
        <div className='close close-stem1'></div>
        <div className='close close-stem2'></div>
        </div>

        {/* <a  href={resumePdf} download> */}
        
        

        {/* </a> */}

      </div>
      
      <div className='scrollContainer'>
      {/* <img className="siteDownIcon" src={image}></img> */}
      <img className='siteDownIcon' src="/portfolio/images/server-maintenance-icon.png"></img>
      <div>
      Sorry, the application you are trying to open is currently offline
      <p></p>
      The cause of this is an offline AWS server.
      <p></p>
      This issue is being addressed.
      <p></p>
      Meanwhile, you can check the website's repository link for more info on the app you are trying to inspect.
      </div>
      </div>
</div>
      </div>
      )
    }

  }

  //----------------
  //this is used to set a reference value for a div (in the div you want to reference place ref="<variable>") the variable name has to end with Ref
    //this reference is used for the useEffect below to identify when the user clicks outside of a given div, so that the dropDown hook can be set to false, triggering the conditional statement in the function renderDropDownMenu and consequently closing the drop down menu
    const siteDownRef = React.useRef();
  
    //this useEffect listens for clicks on the browser, if the click occurs outside of the drop down menu (detect by the use of the variable declared above; resumeRef), the dropDown state will be changed to false triggering the conditional statement in the function renderDropDownMenu and consequently closing the drop down menu
    React.useEffect(() => {
  
      //this function is called in the event listener below, and checks if a click occured outside of the drop down menu, it then sets the value of dropDown state to false.
      const closeMenuOnClickOutside = (e) => {
        //this first condition, prevents the app from trying to read an undefined object (resumeRef)
        console.log(e.target)

        if(siteDownRef.current){
    
    if (!siteDownRef.current.contains(e.target)) {
      
      setSiteDown(false);
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
    {renderSiteDown()}
    </>
  );
}