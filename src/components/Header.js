import * as React from 'react';
import "./Header.scss";
import "./HeaderMenu.scss";
import HeaderMenu from "./HeaderMenu";
import Resume from "./Resume";
import globalStates from '../hooks/globalStates';
import DropdownMenu from "./DropdownMenu";

export default function Header() {
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

  //This function is to scroll to a section of the screen
  const handelProjectsClick = () => {
    setContent('content');

    // window.scrollTo(0,1400)
    // console.log(document.body.offsetWidth)
    setTimeout(() => {

      if (document.body.offsetWidth >= 1214) {
        window.scrollTo(0, 1400);
      }
      else if (document.body.offsetWidth <= 1214 && document.body.offsetWidth > 873) {
        window.scrollTo(0, 1900);
      }
      else if (document.body.offsetWidth <= 873 && document.body.offsetWidth > 739) {
        window.scrollTo(0, 2100);
      }
      else if (document.body.offsetWidth <= 739 && document.body.offsetWidth > 586) {
        window.scrollTo(0, 2700);
      }
      else if (document.body.offsetWidth <= 586 && document.body.offsetWidth > 551) {
        window.scrollTo(0, 2800);
      }
      else if (document.body.offsetWidth <= 551 && document.body.offsetWidth > 487) {
        window.scrollTo(0, 3300);
      }
      else if (document.body.offsetWidth <= 487) {
        window.scrollTo(0, 3900);
      }

    }, 30);




    setDropDown(false);
  };

  //this function opens and closes the resume
  const resumeState = () => {
    setResume(true);
  };

  const renderHeaderIcons=()=>{
    return(
      <>

          <div onClick={resumeState}>


            <img className="icon resume" src="/portfolio/images/resume.png"></img>
          </div>
          <a href="https://www.linkedin.com/in/daniel-olinski/" target="_blank">
            <img className="icon linkedin" src="/portfolio/images/linkedin.png"></img>
          </a>
          <a href="https://github.com/DanOlinski" target="_blank">
            <img className="icon github" src="/portfolio/images/github.png"></img>
          </a>

          <img onClick={handelEmailClick} className="icon email" src="/portfolio/images/email.png"></img>

        </>
    )
  }

  const renderHeaderProfile=()=>{
    return(
      <div className='header-main-div'>




          <img onClick={handelHomeClick} className="header-img" src="/portfolio/images/profile.jpg"></img>

          <div className='intro'>

            <div className='intro-hi'>
              Hi, I am
              <div className='intro-name'>
                Daniel Olinski G.
              </div>
            </div>

            <div className='intro-what-i-do'>
              Full Stack Software Developer
            </div>

          </div>


        </div>
    )
  }

  //when dropdown menu is open the header needs to reposition it's divs
  const renderHeader=()=>{
    if(!dropDown){
      return(
        <div className="header">

<div className='icons'>
        {renderHeaderIcons()}
        </div>
        {renderHeaderProfile()}
        

        <DropdownMenu />

      </div>
      )
    }
    if(dropDown){
      return(
        <div className="header">

        <div className='icons header-wDropdown'>
        {renderHeaderIcons()}
        </div>

        {renderHeaderProfile()}
        

        <DropdownMenu />

      </div>
      )
    }
  }

  return (
    <>

      
      {renderHeader()}
      

    </>
  );
}
