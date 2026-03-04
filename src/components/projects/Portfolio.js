// import React, { useEffect, useRef } from "react";
import globalStates from '../../hooks/globalStates';
// import axios from "axios";

//This section is rendered inside the "Projects" component.
export default function Portfolio() {
  // const { portfolio, setPortfolio, url, setUrl, setLoading, click, setClick  } = globalStates()
  const { portfolio, setPortfolio,  portfolioUrl, setSiteDown} = globalStates()

  const handelClickOpenWebsite = () => {
    if (portfolioUrl){
      window.open(portfolioUrl)
    } else {
      setSiteDown('open')
    }
  }

    const handelClickPortfolio = () => {
      setPortfolio(!portfolio)
    }

    
    //depending on the value of the state the app will render a collapsed component or a expanded component
    if(portfolio){
      return (
    

          <div className="vert-subcontainer-group">
            <div className="vert-subcontainer-group-inner">
              <div className="projects-container" >
    
              <div className="project-tittle" onClick={handelClickPortfolio}>
              Portfolio
                </div>

                <div className="vert-subcontainer-line"></div>
    
                <a className="projects-text-link" href="https://github.com/DanOlinski/portfolio-template"  rel="noreferrer">
                  Link to repository
                </a>

            <div className="projects-text-link" onClick={handelClickOpenWebsite}>
              Link to website
            </div>
    
                <div className="projects-text">
                This app is used to showcase a product or a personal portfolio. 
                  <div className="text-paragraph">.</div>
                  <br></br>
                   Features:
                    <br></br>- User friendly and intuitive front end<br></br>
                    <br></br>- Visually appealing in any device<br></br>
                    <br></br>- Well commented code for easy customization<br></br>
                    <br></br>- User can send e-mails to the admin of the website<br></br>
                    <br></br>- Easy to deploy. Check instructions in README file from within the repository on how to deploy this website
                    
                  <div className="text-paragraph">.</div>
                  <br></br>Stack: NodeJS v16, React, emailjs, gh-pages
                </div>
    
                <img className="projects-image" src="/portfolio/images//projects/portfolio/capture.jpg" alt=""></img>
    
              </div>
            </div>
            
          </div>
    


      );
    }

    if(!portfolio){
      return (
    

        <div className="vert-subcontainer-group">
        <div className="vert-subcontainer-group-inner vert-subcontainer-group-inner-closed" onClick={handelClickPortfolio}>
          <div className="projects-container" >

          <div className="projects-image-closed">
          {/* <div className="vert-subcontainer-line-closed"></div> */}
          <div className="project-tittle" >Portfolio</div>
          {/* <div className="vert-subcontainer-line-closed"></div> */}
          </div>
           

          </div>
        </div>
        
      </div>
      );
    }
}