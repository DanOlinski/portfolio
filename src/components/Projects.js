import React from "react";
import "./Content.scss"
import "./Projects.scss"

export default function Projects() {

  return (
    <div className="container">

      <div className="tittle">
        <div className="tittle-text">Projects</div>
        <div className="tittle-line-projects"></div>
      </div>

      <div className="vert-subcontainer-group">
        <div className="vert-subcontainer-group-inner">
          <div className="projects-container">

            Budget

            <div className="vert-subcontainer-line"></div>

            <a className="projects-text-link" href="https://github.com/DanOlinski/Budget" target="_blank">
              Link to repository
            </a>

            <div className="projects-text">
              Track spending and more, from any bank account.
              <div className="text-paragraph">.</div>
              When the user swipes a card, in about 3 seconds the spending information is added to the app.
            </div>

            <img className="projects-image" src="/portfolio/images/projects/budget/pieChartSpending.png"></img>

            <img className="projects-image" src="/portfolio/images/projects/budget/Categories.png"></img>

          </div>
        </div>
      </div>

      <div className="vert-subcontainer-group">
        <div className="vert-subcontainer-group-inner">
          <div className="projects-container">

            Scheduler App

            <div className="vert-subcontainer-line"></div>

            <a className="projects-text-link" href="https://github.com/DanOlinski/schedulerApp/blob/master/reactServer/docs/new-appointment.JPG" target="_blank">
              Link to repository
            </a>
            
            <div className="projects-text">
              Presents a list of week days. For each day there are slots where a user can book an appointment (provided the slot is available).
              <div className="text-paragraph">.</div>
              To create an appointment, the user types in their name and selects one of the available interviewers.
              <div className="text-paragraph">.</div>
              Any created appointment can be edited or deleted.
            </div>

            <img className="projects-image" src="/portfolio/images/projects/schedulerApp/main-page.JPG"></img>

            <img className="projects-image" src="/portfolio/images/projects/schedulerApp/new-appointment.JPG"></img>

          </div>
        </div>
      </div>

      <div className="vert-subcontainer-group">
        <div className="vert-subcontainer-group-inner">
          <div className="projects-container">

          Scribble

            <div className="vert-subcontainer-line"></div>

            <a className="projects-text-link" href="https://github.com/DanOlinski/Scribble/blob/master/README.md" target="_blank">
              Link to repository
            </a>

            <div className="projects-text">
              A fullstack WordPress CRUD app where a user can add notes and sketches.
              <div className="text-paragraph">.</div>
              There are ACFs where an editor with access to the wp-admin user can add images that show up below the notes. The editor can also change the footer info (date when the page was last updated).
              <div className="text-paragraph">.</div>
              This app also includes SEO/schema
            </div>

            <img className="projects-image" src="/portfolio/images//projects/scribble/Snapshot1.PNG"></img>

          </div>
        </div>
      </div>

      <div className="vert-subcontainer-group">
        <div className="vert-subcontainer-group-inner">
          <div className="projects-container">

          Express JS Server Template

            <div className="vert-subcontainer-line"></div>

            <a className="projects-text-link" href="https://github.com/DanOlinski/expressJsServerTemplate" target="_blank">
              Link to repository
            </a>

            <div className="projects-text">
            A ready to use ExpressJs server template with a PostgreSQL database.
              <div className="text-paragraph">.</div>
              This backend server can be used to add a database to any application, making the production of fullstack apps more straight forward and less time consuming. Setting it up is easy due to great documentation and thorough testing.
            </div>

            <img className="projects-image" src="/portfolio/images//projects/expressJsServerTemplate/background.jpg"></img>

          </div>
        </div>
      </div>

      <div className="vert-subcontainer-group">
        <div className="vert-subcontainer-group-inner">
          <div className="projects-container">

          jsAlgorithms

            <div className="vert-subcontainer-line"></div>

            <a className="projects-text-link" href="https://github.com/DanOlinski/jsAlgorithms/blob/master/modules/eqObjects.js" target="_blank">
              Link to repository
            </a>

            <div className="projects-text">
            This is an npm library package containing general purpose javascript algorithms that can be installed and used when creating javascript applications.
              <div className="text-paragraph">.</div>
              The goal of this npm package is to eliminating extra work when developing js applications. Inspired on the [Lodash](https://lodash.com) library.
            </div>

            <img className="projects-image" src="/portfolio/images//projects/jsAlgorythms/Capture.PNG"></img>

          </div>
        </div>
      </div>

    </div>
  );
}