import * as React from 'react';
import "./Email.scss"
import globalStates from '../hooks/globalStates';
import emailjs from '@emailjs/browser';

export default function Email() {
  const { content, setContent } = globalStates()

  const form = React.useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    if(!e.target.name.value || e.target.name.value === 'Name'){
      
      return alert('Please fill in The name field')
    }

    else if(!e.target.email.value || e.target.email.value === 'e-mail address'){
      return alert('Please fill in The email field')
    }

    else if(!e.target.message.value || e.target.message.value === 'Message...'){
      return alert('Please fill in The message field')
    }

    else {
      emailjs
      .sendForm('service_b6tfmg4', 'template_pdsqpxd', form.current, {
        publicKey: 'RqDUdIg1EZGmhM3fy',
      })
      .then(
        () => {
          alert('Email Sent');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
      setContent('email')
    }
    
  };

  const renderForm = () => {
   if(content === 'email'){
    return (
      <div className="email-content">

        <form ref={form} className="email-form" onSubmit={sendEmail}>
          <textarea required name='name' className="email-info">Name</textarea>
          <textarea required name='email' className="email-info">e-mail address</textarea>
          <textarea required name='message' className="email-body">Message...</textarea>
          <button type="submit" required className="submit">Submit</button>
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