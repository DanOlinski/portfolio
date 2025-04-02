import React from "react";
import globalStates from '../../hooks/globalStates';

//This section is rendered inside the "Projects" component.
export default function Budget() {
  const { budget, setBudget } = globalStates()

    //when the text is clicked change the state to "true" or "false". This state is used to expand or collapse this component.
    const handelClickBudget = () => {
      setBudget(!budget)
    }

    //depending on the value of the state the app will render a collapsed component or a expanded component
    if(budget){
      return (
    

          <div className="vert-subcontainer-group">
            <div className="vert-subcontainer-group-inner">
              <div className="projects-container" >

              <div className="project-tittle" onClick={handelClickBudget}>
                Budget
                </div>
    
                <div className="vert-subcontainer-line"></div>
    
                <a className="projects-text-link" href="https://github.com/DanOlinski/Budget" target="_blank">
                  Link to repository
                </a>

                <a className="projects-text-link" href="https://drive.google.com/file/d/1-i8MmTTnpAM7Bnz_Ej4XI7BVFdliY-vu/view?usp=drivesdk" target="_blank">
                  Link to app presentation
                </a>
    
                <div className="projects-text">
                  Track spending and more, from any bank account.
                  <div className="text-paragraph">.</div>
                  When the user swipes a card, in about 3 seconds the spending information is added to the app.
                  <div className="text-paragraph">.</div>
                  Stack: React, Azure, PostgreSQL ExpressJS, Axios, HTML, SASS
    
                </div>
    
                <img className="projects-image" src="/portfolio/images/projects/budget/pieChartSpending.jpg"></img>
    
                <img className="projects-image" src="/portfolio/images/projects/budget/categories.jpg"></img>
    
              </div>
            </div>
          </div>

      );
    }

    if(!budget){
      return (
    

        <div className="vert-subcontainer-group">
        <div className="vert-subcontainer-group-inner vert-subcontainer-group-inner-closed" onClick={handelClickBudget}>
          <div className="projects-container" >

          <div className="projects-image-closed">
          {/* <div className="vert-subcontainer-line-closed"></div> */}
          <div className="project-tittle" >Budget</div>
          {/* <div className="vert-subcontainer-line-closed"></div> */}
          </div>
            

          </div>
        </div>
      </div>
      );
    }
}