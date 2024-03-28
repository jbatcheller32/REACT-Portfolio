import '../styles/styles.css';
import { useState } from 'react';


function Contact() {

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [message, setMessage] = useState('');



  const handleInputChange = (e) => {
    const { name, value } = e.target;


    return name === 'firstName' ? setFirstName(value) : setLastName(value);

  };



  const handleFormSubmit = (e) => {

    e.preventDefault();

    alert(`Hello, ${firstName} ${lastName}! Your message has been sent!`);
    setFirstName('');
    setLastName('');
    setMessage('')

  };


  const handleInputChangeMessage = (e) => {
    const { message, value } = e.target;

    return message === setMessage(value)
  }


  return (


    <div className="container text-center">
      <h1>
        Hello {firstName} {lastName}
      </h1>
      <form className="form" onSubmit={handleFormSubmit}>
        <input className="name-form"
          value={firstName}
          name="firstName"
          onChange={handleInputChange}
          type="text"
          placeholder="First Name"
        />
        <input className="name-form"
          value={lastName}
          name="lastName"
          onChange={handleInputChange}
          type="text"
          placeholder="Last Name"
        />
        <input className="form-message"
          value={message}
          onChange={handleInputChangeMessage}
          type="text"
          placeholder="Type your message here.."
        />
        <button type="submit">
          Submit
        </button>
      </form>
    </div>
  )
}

export default Contact;

