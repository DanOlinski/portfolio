import React from "react";
import globalStates from '../../hooks/globalStates';

//This section is rendered inside the "Projects" component.
export default function Portfolio() {
  const { portfolio, setPortfolio } = globalStates()

    //when the text is clicked change the state to "true" or "false". This state is used to expand or collapse this component.

    const handelClickPortfolio = () => {
      setPortfolio(!portfolio)
    }

    //depending on the value of the state the app will render a collapsed component or a expanded component
    if(portfolio){
      return (
    

          <div className="vert-subcontainer-group">
            <div className="vert-subcontainer-group-inner">
              <div className="projects-container" onClick={handelClickPortfolio}>
    
              <div className="project-tittle" onClick={handelClickPortfolio}>
              Portfolio
                </div>

                <div className="vert-subcontainer-line"></div>
    
                <a className="projects-text-link" href="https://github.com/DanOlinski/portfolio-template" target="_blank">
                  Link to repository
                </a>

                <a className="projects-text-link" href="http://98.82.9.144:3000" target="_blank">
                  Link to website
                </a>
    
                <div className="projects-text">
                This app is used to showcase a product or a personal portfolio. 
                  <div className="text-paragraph">.</div>
                  - Features:
                    <br></br>- User friendly and intuitive front end
                    <br></br>- Visually appealing in any device
                    <br></br>- Well commented code for easy customization
                    <br></br>- User can send e-mails to the admin of the website
                    <br></br>- Easy to deploy. Check instructions in README file from within the repository on how to deploy this website
                  <div className="text-paragraph">.</div>
                  Stack: NodeJS v16, React, emailjs, gh-pages
                </div>
    
                <img className="projects-image" src="/portfolio/images//projects/portfolio/Capture.PNG"></img>
    
              </div>
            </div>
            
          </div>
    


      );
    }

    if(!portfolio){
      return (
    

        <div className="vert-subcontainer-group">
        <div className="vert-subcontainer-group-inner">
          <div className="projects-container" onClick={handelClickPortfolio}>

          <div className="project-tittle" onClick={handelClickPortfolio}>
          Portfolio
            </div>

            <div className="vert-subcontainer-line"></div>

            <div className="projects-text"></div>
            <img className="projects-image-closed"></img>

          </div>
        </div>
        
      </div>
      );
    }
}