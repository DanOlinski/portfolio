import React from "react";
import globalStates from '../../hooks/globalStates';

//This section is rendered inside the "Projects" component.
export default function SchedulerApp() {
  const { schedulerApp, setSchedulerApp} = globalStates()

    //when the text is clicked change the state to "true" or "false". This state is used to expand or collapse this component.
    const handelClickSchedulerApp = () => {
      setSchedulerApp(!schedulerApp)
    }

    ///depending on the value of the state the app will render a collapsed component or a expanded component
    if(schedulerApp){
      return (
    


          <div className="vert-subcontainer-group">
            <div className="vert-subcontainer-group-inner">
              <div className="projects-container" >

                <div className="project-tittle" onClick={handelClickSchedulerApp}>
                Scheduler App
                </div>
    
                <div className="vert-subcontainer-line"></div>
    
                <a className="projects-text-link" href="https://github.com/DanOlinski/schedulerApp" target="_blank">
                  Link to repository
                </a>

                <a className="projects-text-link" href="http://18.212.42.160:8000" target="_blank">
                  Link to website
                </a>
                
                <div className="projects-text">
                  Fullstack application, deployed in aws. Presents a list of week days. For each day there are slots where a user can book an appointment (provided the slot is available).
                  <div className="text-paragraph">.</div>
                  To create an appointment, the user types in their name and selects one of the available interviewers.
                  <div className="text-paragraph">.</div>
                  Any created appointment can be edited or deleted.
                  <div className="text-paragraph">.</div>
                  Stack: Axios, React, Storybook, SASS, Jest, PostgreSQL
                </div>
    
                <img className="projects-image" src="/portfolio/images/projects/schedulerApp/main-page.JPG"></img>
    
                <img className="projects-image" src="/portfolio/images/projects/schedulerApp/new-appointment.JPG"></img>
    
              </div>
            </div>
          </div>

      );
    }

    if(!schedulerApp){
      return (

        <div className="vert-subcontainer-group">
        <div className="vert-subcontainer-group-inner">
          <div className="projects-container" >

            <div className="project-tittle" onClick={handelClickSchedulerApp}>
            Scheduler App
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