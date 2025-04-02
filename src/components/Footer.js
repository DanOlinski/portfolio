import * as React from 'react';
import "./Footer.scss"
import globalStates from '../hooks/globalStates';

export default function Footer() {
  const { content, setContent, setResume } = globalStates()

//This function will change the "content" state to 'email', the e-mail component is rendered within a conditional statement that checks if the content state is set to 'email'
const handelEmailClick = () => {
      setContent('email')
}

const topOfPage = () => {
  window.scrollTo(0,0)
}

const resumeState =()=>{
  window.scrollTo(0,0)
  setResume(true)
}

  return (

      <div className='footer'>
      <div onClick={topOfPage} className='text-link'>
        Top of page
      </div>

      <div className='f-icons'>

        <div className='links'>
          <div className='a-element' onClick={resumeState}>
            <img className="f-icon f-resume" src="/portfolio/images/resume-o.png"></img>
            Resume
          </div>
        </div>
        <div className='links'>
          <a className='a-element' href="https://www.linkedin.com/in/daniel-olinski/" target="_blank">
            <img className="f-icon f-linkedin" src="/portfolio/images/linkedin-o.png"></img>
            Linkedin
          </a>
        </div>
        <div className='links'>
          <a className='a-element' href="https://github.com/DanOlinski" target="_blank">
            <img className="f-icon f-github" src="/portfolio/images/github-o.png"></img>
            Github
          </a>
        </div>
        <div onClick={handelEmailClick} className='links'>
            <img className="f-icon f-email" src="/portfolio/images/email-o.png"></img>
            email
        </div>
      </div>

      <div className='text'>
        daniel.olinski@outlook.com
      </div>
      <div className='text'>
        +1(403)618-0269
      </div>

    </div>



  );
}