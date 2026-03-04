// import React from "react";
import "./Skills.scss"
import "./Content.scss"
import globalStates from '../hooks/globalStates';


//This component displays all of the skills for the portfolio web page
export default function Skills() {
  const { skills, setSkills } = globalStates()

  //when the text is clicked change the state to "true" or "false". This state is used to expand or collapse this component.
  const handelClick = () => {
    setSkills(!skills)
  }

     return(
      <>
      <div className="tittle" onClick={handelClick}>
      <div className="tittle-text">Skills</div>
      <div className="tittle-line-skills"></div>
    </div>

    <div className="tittle-subtittle">
    Tech
    </div>

    <div className="tech-container">
    
    <div className="vert-subcontainer-group">
      <div className="vert-subcontainer-group-inner">

        Libraries & Frameworks:
        
        <div className="vert-subcontainer-line"></div>
        <div className="vert-subcontainer-item">
          <img className="vert-subcontainer-image" src="/portfolio/images/logos/react.png" alt=""></img>
          React
        </div>

        <div className="vert-subcontainer-line"></div>
        <div className="vert-subcontainer-item">
          <img className="vert-subcontainer-image" src="/portfolio/images/logos/nextjs.png" alt=""></img>
          Next.Js
        </div>

        <div className="vert-subcontainer-line"></div>
        <div className="vert-subcontainer-item">
          <img className="vert-subcontainer-image" src="/portfolio/images/logos/ajax.png" alt=""></img>
          Ajax
        </div>

        <div className="vert-subcontainer-line"></div>
        <div className="vert-subcontainer-item">
          <img className="vert-subcontainer-image" src="/portfolio/images/logos/jquery.png" alt=""></img>
          jQuery
        </div>

        <div className="vert-subcontainer-line"></div>
        <div className="vert-subcontainer-item">
          <img className="vert-subcontainer-image" src="/portfolio/images/logos/bootstrap.png" alt=""></img>
          Bootstrap
        </div>

        <div className="vert-subcontainer-line"></div>
        <div className="vert-subcontainer-item">
          <img className="vert-subcontainer-image" src="/portfolio/images/logos/axios.png" alt=""></img>
          Axios
        </div>

        <div className="vert-subcontainer-line"></div>
        <div className="vert-subcontainer-item">
          <img className="vert-subcontainer-image" src="/portfolio/images/logos/ruby-on-rails.png" alt=""></img>
          Ruby on Rails
        </div>

        <div className="vert-subcontainer-line"></div>
        <div className="vert-subcontainer-item">
          <img className="vert-subcontainer-image" src="/portfolio/images/logos/expressjs.png" alt=""></img>
          ExpressJs
        </div>

        </div>
      </div>

      <div className="vert-subcontainer-group">
        <div className="vert-subcontainer-group-inner">

        Dev Environments:

        <div className="vert-subcontainer-line"></div>
        <div className="vert-subcontainer-item">
          <img className="vert-subcontainer-image" src="/portfolio/images/logos/aws.png" alt=""></img>
          AWS
        </div>

        <div className="vert-subcontainer-line"></div>
        <div className="vert-subcontainer-item">
          <img className="vert-subcontainer-image" src="/portfolio/images/logos/linux.png" alt=""></img>
          Linux
        </div>

        <div className="vert-subcontainer-line"></div>
        <div className="vert-subcontainer-item">
          <img className="vert-subcontainer-image" src="/portfolio/images/logos/wsl.png" alt=""></img>
          WSL
        </div>

        <div className="vert-subcontainer-line"></div>
        <div className="vert-subcontainer-item">
          <img className="vert-subcontainer-image" src="/portfolio/images/logos/macOs.png" alt=""></img>
          MacOS
        </div>

        <div className="vert-subcontainer-line"></div>
        <div className="vert-subcontainer-item">
          <img className="vert-subcontainer-image" src="/portfolio/images/logos/docker.png" alt=""></img>
          Docker
        </div>

        <div className="vert-subcontainer-line"></div>
        <div className="vert-subcontainer-item">
          <img className="vert-subcontainer-image" src="/portfolio/images/logos/nodejs.png" alt=""></img>
          NodeJs
        </div>

         <div className="vert-subcontainer-line"></div>
        <div className="vert-subcontainer-item">
          <img className="vert-subcontainer-image" src="/portfolio/images/logos/claudeAi.png" alt=""></img>
          Claude AI
        </div>
        
        </div>
      </div>

    <div className="vert-subcontainer-group">
        <div className="vert-subcontainer-group-inner">

        Languages:
        
        <div className="vert-subcontainer-line"></div>
        <div className="vert-subcontainer-item">
          <img className="vert-subcontainer-image" src="/portfolio/images/logos/javascript.png" alt=""></img>
          JavaScript
        </div>

        {/* <div className="vert-subcontainer-line"></div>
        <div className="vert-subcontainer-item">
          <img className="vert-subcontainer-image" src="/portfolio/images/logos/ruby.png"></img>
          Ruby
        </div> */}

        <div className="vert-subcontainer-line"></div>
        <div className="vert-subcontainer-item">
          <img className="vert-subcontainer-image" src="/portfolio/images/logos/html.png" alt=""></img>
          HTML
        </div>

        <div className="vert-subcontainer-line"></div>
        <div className="vert-subcontainer-item">
          <img className="vert-subcontainer-image" src="/portfolio/images/logos/ejs.png" alt=""></img>
          ejs
        </div>

        <div className="vert-subcontainer-line"></div>
        <div className="vert-subcontainer-item">
          <img className="vert-subcontainer-image" src="/portfolio/images/logos/css.png" alt=""></img>
          CSS
        </div>

        <div className="vert-subcontainer-line"></div>
        <div className="vert-subcontainer-item">
          <img className="vert-subcontainer-image" src="/portfolio/images/logos/sass.png" alt=""></img>
          SASS
        </div>

        <div className="vert-subcontainer-line"></div>
        <div className="vert-subcontainer-item">
          <img className="vert-subcontainer-image" src="/portfolio/images/logos/php.png" alt=""></img>
          PHP
        </div>
        </div>
      </div>

      <div className="vert-subcontainer-group">
      <div className="vert-subcontainer-group-inner">

        Testing:
        
        <div className="vert-subcontainer-line"></div>
        <div className="vert-subcontainer-item">
          <img className="vert-subcontainer-image" src="/portfolio/images/logos/storybook.png" alt=""></img>
          Storybook
        </div>

        <div className="vert-subcontainer-line"></div>
        <div className="vert-subcontainer-item">
          <img className="vert-subcontainer-image" src="/portfolio/images/logos/rspec.png" alt=""></img>
          RSpec
        </div>

        <div className="vert-subcontainer-line"></div>
        <div className="vert-subcontainer-item">
          <img className="vert-subcontainer-image" src="/portfolio/images/logos/cypress.png" alt=""></img>
          Cypress
        </div>

        <div className="vert-subcontainer-line"></div>
        <div className="vert-subcontainer-item">
          <img className="vert-subcontainer-image" src="/portfolio/images/logos/mocha.png" alt=""></img>
          Mocha
        </div>

        <div className="vert-subcontainer-line"></div>
        <div className="vert-subcontainer-item">
          <img className="vert-subcontainer-image" src="/portfolio/images/logos/chai.png" alt=""></img>
          Chai
        </div>

        <div className="vert-subcontainer-line"></div>
        <div className="vert-subcontainer-item">
          <img className="vert-subcontainer-image" src="/portfolio/images/logos/jest.png" alt=""></img>
          Jest
        </div>

        </div>
      </div>



      <div className="vert-subcontainer-group">
      <div className="vert-subcontainer-group-inner">

        Database and CMS:
        
        <div className="vert-subcontainer-line"></div>
        <div className="vert-subcontainer-item">
          <img className="vert-subcontainer-image" src="/portfolio/images/logos/sql.png" alt=""></img>
         MySQL
        </div>

        <div className="vert-subcontainer-line"></div>
        <div className="vert-subcontainer-item">
          <img className="vert-subcontainer-image" src="/portfolio/images/logos/postgres.png" alt=""></img>
          PostgreSQL
        </div>

        <div className="vert-subcontainer-line"></div>
        <div className="vert-subcontainer-item">
          <img className="vert-subcontainer-image" src="/portfolio/images/logos/phpmyadmin.png" alt=""></img>
          PhpMyAdmin
        </div>

        <div className="vert-subcontainer-line"></div>
        <div className="vert-subcontainer-item">
          <img className="vert-subcontainer-image" src="/portfolio/images/logos/github.png" alt=""></img>
          Git
        </div>

        <div className="vert-subcontainer-line"></div>
        <div className="vert-subcontainer-item">
          <img className="vert-subcontainer-image" src="/portfolio/images/logos/wordpress.png" alt=""></img>
          WordPress
        </div>

        </div>
      </div>

    </div>

    <div className="tittle-subtittle">
    Media
    </div>

    <div className="media-container">

      <div className="horiz-subcontainer-group">
      <div className="horiz-subcontainer-group-inner">

      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Design
        
        <div className="horiz-subcontainer-group-inner-child">

        <div className="horiz-subcontainer-item">

          <div className="tech">
          <img className="vert-subcontainer-image" src="/portfolio/images/logos/photoshop.png" alt=""></img>
          Photoshop
          </div>

        <div className="horiz-subcontainer-line"></div>
        </div>

        <div className="horiz-subcontainer-item">
        <div className="tech">
          <img className="vert-subcontainer-image" src="/portfolio/images/logos/autodesk.png" alt=""></img>
          Autodesk Suite
        </div>
        <div className="horiz-subcontainer-line"></div>
        </div>

        <div className="horiz-subcontainer-item">
        <div className="tech">
          <img className="vert-subcontainer-image" src="/portfolio/images/logos/solidworks.png" alt=""></img>
          Solid Works
        </div>
        <div className="horiz-subcontainer-line"></div>
        </div>

        <div className="horiz-subcontainer-item">
        <div className="tech">
          <img className="vert-subcontainer-image" src="/portfolio/images/logos/msoffice.png" alt=""></img>
          Microsoft Suit
        </div>
        <div className="horiz-subcontainer-line"></div>
        </div>

        <div className="horiz-subcontainer-item">
          . . .
        </div>

        </div>
        </div>
      </div>

      <div className="horiz-subcontainer-group">
      <div className="horiz-subcontainer-group-inner">

      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Audio & Video:
        
        <div className="horiz-subcontainer-group-inner-child">

        <div className="horiz-subcontainer-item">
        <div className="tech">
          <img className="vert-subcontainer-image" src="/portfolio/images/logos/ableton.png" alt=""></img>
          Ableton
        </div>
        <div className="horiz-subcontainer-line"></div>
        </div>

        <div className="horiz-subcontainer-item">
        <div className="tech">
          <img className="vert-subcontainer-image" src="/portfolio/images/logos/cubase.png" alt=""></img>
          Cubase
        </div>
        <div className="horiz-subcontainer-line"></div>
        </div>

        <div className="horiz-subcontainer-item">
        <div className="tech">
          <img className="vert-subcontainer-image" src="/portfolio/images/logos/spire.png" alt=""></img>
          Spire
        </div>
        <div className="horiz-subcontainer-line"></div>
        </div>

        <div className="horiz-subcontainer-item">
        <div className="tech">
          <img className="vert-subcontainer-image" src="/portfolio/images/logos/serum.png" alt=""></img>
          Serum
        </div>
        <div className="horiz-subcontainer-line"></div>
        </div>

        <div className="horiz-subcontainer-item">
        <div className="tech">
          <img className="vert-subcontainer-image" src="/portfolio/images/logos/adobe.png" alt=""></img>
          Adobe Suite
        </div>
        <div className="horiz-subcontainer-line horiz-subcontainer-line"></div>
        </div>

        <div className="horiz-subcontainer-item">
          . . .
        </div>

        </div>
        </div>
      </div>

    </div>
    <div className="tittle-close" onClick={handelClick}>Close</div>
    </>
     )}