import React from "react";
import "./Email.scss"
import globalStates from '../hooks/globalStates';

export default function Email() {
  const { content, setContent } = globalStates()

  const renderForm = () => {
   if(content === 'email'){
    return (
      <div className="email-content">
        <form className="email-form">
          <textarea className="email-info">Name</textarea>
          <textarea className="email-info">e-mail address</textarea>
          <textarea className="email-body">Message...</textarea>
          <submit className="submit">Submit</submit>
        </form>
    </div>
    )
   }
  }
  
  return (
    <>
    {renderForm()}
    </>
  );
}