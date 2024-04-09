import * as React from 'react';
import "./Header.scss"
import HeaderMenu from "./HeaderMenu";
import globalStates from '../hooks/globalStates';

export default function Header() {
  const { content, setContent } = globalStates()

 //This function will change the content state to 'email', the e-mail component is rendered within a conditional statement that checks if the content state is set to 'email'
const handelEmailClick = () => {
  setContent('email')
}

//This function will change the content state value to 'content', the content component is rendered within a conditional statement that checks if the content value of state is set to 'content'
const handelHomeClick = () => {
  setContent('content')
}


  return (
    <div className="header">

      <img onClick={handelHomeClick} className="header-img" src="../../images/profile.jpg"></img>

      <HeaderMenu />

      <div className='icons'>

        <a href="https://flowcv.com/resume/k7nvdbtl1r" target="_blank">
          <img className="icon resume" src="../../images/resume.png"></img>
        </a>
        <a href="https://www.linkedin.com/in/daniel-olinski-guterres-6542a550/" target="_blank">
          <img className="icon linkedin" src="../../images/linkedin.png"></img>
        </a>
        <a href="https://github.com/DanOlinski" target="_blank">
          <img className="icon github" src="../../images/github.png"></img>
        </a>

          <img onClick={handelEmailClick} className="icon email" src="../../images/email.png"></img>

      </div>

    </div>
  );
}