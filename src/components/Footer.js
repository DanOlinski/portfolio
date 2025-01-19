import * as React from 'react';
import "./Footer.scss"
import globalStates from '../hooks/globalStates';

export default function Footer() {
  const { content, setContent } = globalStates()

//This function will change the "content" state to 'email', the e-mail component is rendered within a conditional statement that checks if the content state is set to 'email'
const handelEmailClick = () => {
      setContent('email')
}

const topOfPage = () => {
  window.scrollTo(0,0)
}

  return (
    <div className="footer">
      <div onClick={topOfPage} className='text-link'>
        Top of page
      </div>

      <div className='f-icons'>

        <div className='links'>
          <a className='a-element' href="https://flowcv.com/resume/vswopup5m5" target="_blank">
            <img className="f-icon f-resume" src="/portfolio/images/resume-w.png"></img>
            Resume
          </a>
        </div>
        <div className='links'>
          <a className='a-element' href="https://www.linkedin.com/in/daniel-olinski-guterres-6542a550/" target="_blank">
            <img className="f-icon f-linkedin" src="/portfolio/images/linkedin-w.png"></img>
            Linkedin
          </a>
        </div>
        <div className='links'>
          <a className='a-element' href="https://github.com/DanOlinski" target="_blank">
            <img className="f-icon f-github" src="/portfolio/images/github-w.png"></img>
            Github
          </a>
        </div>
        <div onClick={handelEmailClick} className='links'>
            <img className="f-icon f-email" src="/portfolio/images/email-w.png"></img>
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