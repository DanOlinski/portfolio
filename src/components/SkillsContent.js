import React from "react";
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
          <img className="vert-subcontainer-image" src="/portfolio/images/logos/react.png"></img>
          React
        </div>

        <div className="vert-subcontainer-line"></div>
        <div className="vert-subcontainer-item">
          <img className="vert-subcontainer-image" src="/portfolio/images/logos/nextjs.png"></img>
          Next.Js
        </div>

        <div className="vert-subcontainer-line"></div>
        <div className="vert-subcontainer-item">
          <img className="vert-subcontainer-image" src="/portfolio/images/logos/ajax.png"></img>
          Ajax
        </div>

        <div className="vert-subcontainer-line"></div>
        <div className="vert-subcontainer-item">
          <img className="vert-subcontainer-image" src="/portfolio/images/logos/jquery.png"></img>
          jQuery
        </div>

        <div className="vert-subcontainer-line"></div>
        <div className="vert-subcontainer-item">
          <img className="vert-subcontainer-image" src="/portfolio/images/logos/bootstrap.png"></img>
          Bootstrap
        </div>

        <div className="vert-subcontainer-line"></div>
        <div className="vert-subcontainer-item">
          <img className="vert-subcontainer-image" src="/portfolio/images/logos/axios.png"></img>
          Axios
        </div>

        <div className="vert-subcontainer-line"></div>
        <div className="vert-subcontainer-item">
          <img className="vert-subcontainer-image" src="/portfolio/images/logos/ruby-on-rails.png"></img>
          Ruby on Rails
        </div>

        <div className="vert-subcontainer-line"></div>
        <div className="vert-subcontainer-item">
          <img className="vert-subcontainer-image" src="/portfolio/images/logos/expressjs.png"></img>
          ExpressJs
        </div>

        </div>
      </div>

    <div className="vert-subcontainer-group">
        <div className="vert-subcontainer-group-inner">

        Languages:
        
        <div className="vert-subcontainer-line"></div>
        <div className="vert-subcontainer-item">
          <img className="vert-subcontainer-image" src="/portfolio/images/logos/javascript.png"></img>
          JavaScript
        </div>

        <div className="vert-subcontainer-line"></div>
        <div className="vert-subcontainer-item">
          <img className="vert-subcontainer-image" src="/portfolio/images/logos/ruby.png"></img>
          Ruby
        </div>

        <div className="vert-subcontainer-line"></div>
        <div className="vert-subcontainer-item">
          <img className="vert-subcontainer-image" src="/portfolio/images/logos/html.png"></img>
          HTML
        </div>

        <div className="vert-subcontainer-line"></div>
        <div className="vert-subcontainer-item">
          <img className="vert-subcontainer-image" src="/portfolio/images/logos/ejs.png"></img>
          ejs
        </div>

        <div className="vert-subcontainer-line"></div>
        <div className="vert-subcontainer-item">
          <img className="vert-subcontainer-image" src="/portfolio/images/logos/css.png"></img>
          CSS
        </div>

        <div className="vert-subcontainer-line"></div>
        <div className="vert-subcontainer-item">
          <img className="vert-subcontainer-image" src="/portfolio/images/logos/sass.png"></img>
          SASS
        </div>

        <div className="vert-subcontainer-line"></div>
        <div className="vert-subcontainer-item">
          <img className="vert-subcontainer-image" src="/portfolio/images/logos/php.png"></img>
          PHP
        </div>
        </div>
      </div>

      <div className="vert-subcontainer-group">
      <div className="vert-subcontainer-group-inner">

        Testing:
        
        <div className="vert-subcontainer-line"></div>
        <div className="vert-subcontainer-item">
          <img className="vert-subcontainer-image" src="/portfolio/images/logos/storybook.png"></img>
          Storybook
        </div>

        <div className="vert-subcontainer-line"></div>
        <div className="vert-subcontainer-item">
          <img className="vert-subcontainer-image" src="/portfolio/images/logos/rspec.png"></img>
          RSpec
        </div>

        <div className="vert-subcontainer-line"></div>
        <div className="vert-subcontainer-item">
          <img className="vert-subcontainer-image" src="/portfolio/images/logos/cypress.png"></img>
          Cypress
        </div>

        <div className="vert-subcontainer-line"></div>
        <div className="vert-subcontainer-item">
          <img className="vert-subcontainer-image" src="/portfolio/images/logos/mocha.png"></img>
          Mocha
        </div>

        <div className="vert-subcontainer-line"></div>
        <div className="vert-subcontainer-item">
          <img className="vert-subcontainer-image" src="/portfolio/images/logos/chai.png"></img>
          Chai
        </div>

        <div className="vert-subcontainer-line"></div>
        <div className="vert-subcontainer-item">
          <img className="vert-subcontainer-image" src="/portfolio/images/logos/jest.png"></img>
          Jest
        </div>

        </div>
      </div>

      <div className="vert-subcontainer-group">
        <div className="vert-subcontainer-group-inner">

        Dev Environments:

        <div className="vert-subcontainer-line"></div>
        <div className="vert-subcontainer-item">
          <img className="vert-subcontainer-image" src="/portfolio/images/logos/aws.png"></img>
          AWS
        </div>

        <div className="vert-subcontainer-line"></div>
        <div className="vert-subcontainer-item">
          <img className="vert-subcontainer-image" src="/portfolio/images/logos/linux.png"></img>
          Linux
        </div>

        <div className="vert-subcontainer-line"></div>
        <div className="vert-subcontainer-item">
          <img className="vert-subcontainer-image" src="/portfolio/images/logos/wsl.png"></img>
          WSL
        </div>

        <div className="vert-subcontainer-line"></div>
        <div className="vert-subcontainer-item">
          <img className="vert-subcontainer-image" src="/portfolio/images/logos/macos.png"></img>
          MacOS
        </div>

        <div className="vert-subcontainer-line"></div>
        <div className="vert-subcontainer-item">
          <img className="vert-subcontainer-image" src="/portfolio/images/logos/docker.png"></img>
          Docker
        </div>

        <div className="vert-subcontainer-line"></div>
        <div className="vert-subcontainer-item">
          <img className="vert-subcontainer-image" src="/portfolio/images/logos/nodejs.png"></img>
          NodeJs
        </div>
        
        </div>
      </div>

      <div className="vert-subcontainer-group">
      <div className="vert-subcontainer-group-inner">

        Database and CMS:
        
        <div className="vert-subcontainer-line"></div>
        <div className="vert-subcontainer-item">
          <img className="vert-subcontainer-image" src="/portfolio/images/logos/sql.png"></img>
         MySQL
        </div>

        <div className="vert-subcontainer-line"></div>
        <div className="vert-subcontainer-item">
          <img className="vert-subcontainer-image" src="/portfolio/images/logos/postgres.png"></img>
          PostgreSQL
        </div>

        <div className="vert-subcontainer-line"></div>
        <div className="vert-subcontainer-item">
          <img className="vert-subcontainer-image" src="/portfolio/images/logos/phpmyadmin.png"></img>
          PhpMyAdmin
        </div>

        <div className="vert-subcontainer-line"></div>
        <div className="vert-subcontainer-item">
          <img className="vert-subcontainer-image" src="/portfolio/images/logos/github.png"></img>
          Git
        </div>

        <div className="vert-subcontainer-line"></div>
        <div className="vert-subcontainer-item">
          <img className="vert-subcontainer-image" src="/portfolio/images/logos/wordpress.png"></img>
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
          <img className="vert-subcontainer-image" src="/portfolio/images/logos/photoshop.png"></img>
          Photoshop
          </div>

        <div className="horiz-subcontainer-line"></div>
        </div>

        <div className="horiz-subcontainer-item">
        <div className="tech">
          <img className="vert-subcontainer-image" src="/portfolio/images/logos/autodesk.png"></img>
          Autodesk Suite
        </div>
        <div className="horiz-subcontainer-line"></div>
        </div>

        <div className="horiz-subcontainer-item">
        <div className="tech">
          <img className="vert-subcontainer-image" src="/portfolio/images/logos/solidworks.png"></img>
          Solid Works
        </div>
        <div className="horiz-subcontainer-line"></div>
        </div>

        <div className="horiz-subcontainer-item">
        <div className="tech">
          <img className="vert-subcontainer-image" src="/portfolio/images/logos/msoffice.png"></img>
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
          <img className="vert-subcontainer-image" src="/portfolio/images/logos/ableton.png"></img>
          Ableton
        </div>
        <div className="horiz-subcontainer-line"></div>
        </div>

        <div className="horiz-subcontainer-item">
        <div className="tech">
          <img className="vert-subcontainer-image" src="/portfolio/images/logos/cubase.png"></img>
          Cubase
        </div>
        <div className="horiz-subcontainer-line"></div>
        </div>

        <div className="horiz-subcontainer-item">
        <div className="tech">
          <img className="vert-subcontainer-image" src="/portfolio/images/logos/spire.png"></img>
          Spire
        </div>
        <div className="horiz-subcontainer-line"></div>
        </div>

        <div className="horiz-subcontainer-item">
        <div className="tech">
          <img className="vert-subcontainer-image" src="/portfolio/images/logos/serum.png"></img>
          Serum
        </div>
        <div className="horiz-subcontainer-line"></div>
        </div>

        <div className="horiz-subcontainer-item">
        <div className="tech">
          <img className="vert-subcontainer-image" src="/portfolio/images/logos/adobe.png"></img>
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