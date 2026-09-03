// import * as React from 'react';
import "./Footer.scss"
import globalStates from '../hooks/globalStates';

export default function Footer() {
  const { setContent, setResume } = globalStates()

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
    <div className='footerBg'>

    
      <div className='footer'>
      <div onClick={topOfPage} className='text-link'>
        Top of page
      </div>

      <div className='f-icons'>

        <div className='links'>
          <div className='a-element' onClick={resumeState}>
            <img className="f-icon f-resume" src="/portfolio/images/resume-o.png" alt=""></img>
            Resume
          </div>
        </div>
        <div className='links'>
          <a className='a-element' href="https://www.linkedin.com/in/daniel-olinski/" target="_blank" rel="noreferrer">
            <img className="f-icon f-linkedin" src="/portfolio/images/linkedin-o.png" alt=""></img>
            Linkedin
          </a>
        </div>
        <div className='links'>
          <a className='a-element' href="https://github.com/DanOlinski" target="_blank" rel="noreferrer">
            <img className="f-icon f-github" src="/portfolio/images/github-o.png" alt=""></img>
            Github
          </a>
        </div>
        <div onClick={handelEmailClick} className='links'>
            <img className="f-icon f-email" src="/portfolio/images/email-o.png" alt=""></img>
            email
        </div>
      </div>

      <div className='text'>
        daniel.olinski@outlook.com
      </div>
      <div className='text'>
        +1(404)643-7535
      </div>

    </div>
    </div>


  );
}
