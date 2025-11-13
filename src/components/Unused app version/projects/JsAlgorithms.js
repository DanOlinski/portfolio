import React from "react";
import globalStates from '../../hooks/globalStates';

//This section is rendered inside the "Projects" component.
export default function JsAlgorithms() {
  const { jsAlgorithms, setJsAlgorithms } = globalStates()

    //when the text is clicked change the state to "true" or "false". This state is used to expand or collapse this component.
    const handelClickJsAlgorithms = () => {
      setJsAlgorithms(!jsAlgorithms)
    }

    //depending on the value of the state the app will render a collapsed component or a expanded component
    if(jsAlgorithms){
      return (
    


          <div className="vert-subcontainer-group">
            <div className="vert-subcontainer-group-inner">
              <div className="projects-container" >
    
              <div className="project-tittle" onClick={handelClickJsAlgorithms}>
              jsAlgorithms
                </div>
    
                <div className="vert-subcontainer-line"></div>
    
                <a className="projects-text-link" href="https://github.com/DanOlinski/jsAlgorithms" target="_blank">
                  Link to repository
                </a>
    
                <div className="projects-text">
                This is an npm library package containing general purpose JavaScript algorithms that can be installed and used when creating JavaScript applications.
                  <div className="text-paragraph">.</div>
                  The goal of this npm package is to eliminating extra work when developing JS applications. Inspired on the [Lodash](https://lodash.com) library.
                  <div className="text-paragraph">.</div>
                  Stack: NodeJS v 16, Chai, Mocha
                </div>
    
                <img className="projects-image" src="/portfolio/images//projects/jsAlgorythms/capture.jpg"></img>
    
              </div>
            </div>
            
          </div>


      );
    }

    if(!jsAlgorithms){
      return (
    

        <div className="vert-subcontainer-group">
        <div className="vert-subcontainer-group-inner  vert-subcontainer-group-inner-closed" onClick={handelClickJsAlgorithms}>
          <div className="projects-container" >

          <div className="projects-image-closed">
          {/* <div className="vert-subcontainer-line-closed"></div> */}
          <div className="project-tittle" >jsAlgorithms</div>
          {/* <div className="vert-subcontainer-line-closed"></div> */}
          </div>
            

          </div>
        </div>
        
      </div>
      );
    }
}