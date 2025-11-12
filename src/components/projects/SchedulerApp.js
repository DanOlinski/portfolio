import React, { useEffect, useRef } from "react";
import globalStates from '../../hooks/globalStates';
import axios from "axios";


//This section is rendered inside the "Projects" component.
export default function SchedulerApp() {
  const { schedulerApp, setSchedulerApp, setLoading, click, setClick, url, setUrl, setUrl2 } = globalStates()

  //when the text is clicked change the state to "true" or "false". This state is used to expand or collapse this component.
  const handelClickSchedulerApp = () => {
    setSchedulerApp(!schedulerApp)
  }

  const handelClickSiteDown = () => {
    
    //this is the url for the app website
  //usually I preffer accessing an expressJs server instead of a react server. Because my express servers have CROS enabled, wich allows for API requests. if I try to perform an API request to an end point that is not configured to allow for CROS protocol, then even if the url works, this app will throw an error
  //in this case I am using 2 urls, one is the expressJs server and the other is the url I want the client to be redirected to
    setUrl('http://52.15.33.50:8001/')
    setUrl2('http://52.15.33.50:8000/')
console.log(url)
    //loading state sets the loading animation
    setLoading(true)
    //the click state triggers the useEffect to run, I can't use the loading state change to trigger the useEffect because it is being changed inside the useEffect and that would cause a loop
    setClick(!click)
  }

  ///depending on the value of the state the app will render a collapsed component or a expanded component
  if (schedulerApp) {
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

            <div className="projects-text-link" onClick={handelClickSiteDown}>
              Link to website
            </div>

            <div className="projects-text">
              Fullstack application, deployed in AWS. Presents a list of week days. For each day there are slots where a user can book an appointment (provided the slot is available).
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

  if (!schedulerApp) {
    return (

      <div className="vert-subcontainer-group">
        <div className="vert-subcontainer-group-inner vert-subcontainer-group-inner-closed" onClick={handelClickSchedulerApp}>
          <div className="projects-container" >


            <div className="projects-image-closed">
              {/* <div className="vert-subcontainer-line-closed"></div> */}
              <div className="project-tittle" >Scheduler App</div>
              {/* <div className="vert-subcontainer-line-closed"></div> */}
            </div>


          </div>
        </div>
      </div>
    );
  }
}