import { useState } from 'react';

const styles = {
    formStyle: {
        margin: '20px',
    }, 

    formInputStyle: {
        display: 'block',
        marginTop: '5px',
        marginBottom: '5px',
        width: '100%,'
    }
}

function Contact() {

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState(''); 

    const handleInputChange = (e) => {
        const {name, value} = e.target; 

        return name === 'firstName' ? setFirstName(value) : setLastName(value); 
    }; 

    const handleFormSubmit = (e) => {

        e.preventDefault(); 

        alert(`Hello, ${firstName} ${lastName}`); 
        setFirstName(''); 
        setLastName('');
    }; 


    return (


        <div className="container text-center">
      <h1>
        Hello {firstName} {lastName}
      </h1>
      <form style={styles.formStyle} className="form" onSubmit={handleFormSubmit}>
        <input style={styles.formInputStyle}
          value={firstName}
          name="firstName"
          onChange={handleInputChange}
          type="text"
          placeholder="First Name"
        />
        <input style={styles.formInputStyle} 
          value={lastName}
          name="lastName"
          onChange={handleInputChange}
          type="text"
          placeholder="Last Name"
        />
        <button type="submit">
          Submit
        </button>
      </form>
    </div>
    )
}

export default Contact;