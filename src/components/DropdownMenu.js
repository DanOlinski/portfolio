import * as React from 'react';
import "./Header.scss";
import "./HeaderMenu.scss";
import globalStates from '../hooks/globalStates';
import HeaderMenu from "./HeaderMenu";

export default function DropdownMenu() {
  const { content, setContent } = globalStates();
  const { dropDown, setDropDown } = globalStates();
  const { resume, setResume } = globalStates();

    //This function will change the content state to 'email', the e-mail component is rendered within a conditional statement that checks if the content state is set to 'email'
    const handelEmailClick = () => {
      setContent('email');
      setDropDown(false);
    };
  
    //This function will change the content state value to 'content', the content component is rendered within a conditional statement that checks if the content value of state is set to 'content'
    const handelHomeClick = () => {
      setContent('content');
      setDropDown(false);
    };

    const handelMenuClick = () => {
      setDropDown(true);
  };

  //---------------------



  //this is used to set a reference value for a div (in the div you want to reference place ref="<variable>") the variable name has to end with Ref
  //this reference is used for the useEffect below to identify when the user clicks outside of a given div, so that the dropDown hook can be set to false, triggering the conditional statement in the function renderDropDownMenu and consequently closing the drop down menu
  const menuRef = React.useRef();

  //this useEffect listens for clicks on the browser, if the click occurs outside of the drop down menu (detect by the use of the variable declared above; menuRef), the dropDown state will be changed to false triggering the conditional statement in the function renderDropDownMenu and consequently closing the drop down menu
  React.useEffect(() => {

    //this function is called in the event listener below, and checks if a click occured outside of the drop down menu, it then sets the value of dropDown state to false.
    const closeMenuOnClickOutside = (e) => {
      //this first condition, prevents the app from trying to read an undefined object (menuRef)
      if(menuRef.current){
  
  if (!menuRef.current.contains(e.target)) {
    console.log(e)
    setDropDown(false);
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

  //when clicking outside of the menu element the useEffect detects that and closes the menu dropdown. If that is not set the menu will close before the action of clicking on one of the options can be executed. However after the option is executed the menu should be close and that is what the following function is designed for
  const closeMenu = () => {
    setDropDown(false);
  };

  const closeMenuAndResumeState=()=>{
    setResume(true)
    setDropDown(false);
  }

  //if the dropDown state is true this function will render the dropdown menu. else it will not
  const renderDropDownMenu = () => {
    if (dropDown) {
      return (
        <>
        
        <div className="menu-icon menu-icon-animationOpened" onClick={handelMenuClick}>
        <HeaderMenu />
        </div>

        <div className='dropdown' ref={menuRef}>
          <div onClick={handelHomeClick} className='dropdown-options'>
            <img className="icon-list" src="/portfolio/images/house-icon.png" alt='image'></img>
            Home
          </div>
          {/* the commented out code below is only if Projects section is placed after Skills section */}
          {/* <div className='dropdown-line'></div>
          <div onClick={handelProjectsClick} className='dropdown-options'>Projects</div> */}
          <div className='dropdown-line'></div>


          <div onClick={closeMenuAndResumeState} className='dropdown-options'>


            <div className='a-element' >
              <img className="icon-list" src="/portfolio/images/resume-w.png" alt='image'></img>
              Resume
            </div>

          </div>
          <div className='dropdown-line'></div>

            <a className='a-element dropdown-options' href="https://github.com/DanOlinski" target="_blank" onClick={closeMenu}>
              <img className="icon-list" src="/portfolio/images/github-w.png"></img>
              Github
            </a>
          <div className='dropdown-line'></div>
        
          {/* <div onClick={closeMenu} className='dropdown-options'> */}
            <a className='a-element dropdown-options' href="https://www.linkedin.com/in/daniel-olinski/" target="_blank" onClick={closeMenu}>
              <img className="icon-list" src="/portfolio/images/linkedin-w.png"></img>
              Linkedin
            </a>
          {/* </div> */}
          <div className='dropdown-line'></div>
          <div onClick={handelEmailClick} className='dropdown-options'>
            <img className="icon-list" src="/portfolio/images/email-w.png"></img>
            Send Email
          </div>

        </div>
        

        </>
      );
    }

    {/* header has to be rendered inside the dropDownMenu component, so that when you click on the menu icon the dropDown menu will close (if it's open) */}
    if (!dropDown) {
      return (
        <div className="menu-icon menu-icon-animationClosed" onClick={handelMenuClick}>
        <HeaderMenu />
        </div>
      );
    }

  };



  return (
    <>
    
    
{renderDropDownMenu()}
    </>
  );
}
