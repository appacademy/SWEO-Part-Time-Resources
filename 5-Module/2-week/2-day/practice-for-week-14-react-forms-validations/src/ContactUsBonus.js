import { useState, useEffect } from 'react';

function ContactUsBonus() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [phoneType, setPhoneType] = useState('');
  const [comments, setComments] = useState('');
  const [validationErrors, setValidationErrors] = useState({});
  const [hasSubmitted, setHasSubmitted] = useState(false);
  
  useEffect(() => {
      const errors = {name:[], email:[]};
      if (!name.length) errors['name'].push('Please enter your Name');
      if (name.length > 30) errors['name'].push('Name must be less than 30 characters')

      if (email.length && !email.includes('@')) errors['email'].push('Please provide a valid Email');
      if (!email.length) errors['email'].push('Please provide an Email.')
      
      setValidationErrors(errors);
  }, [name, email]);
  
  const onSubmit = e => {
    // Prevent the default form behavior so the page doesn't reload.
    e.preventDefault();

    setHasSubmitted(true);
    if (Object.values(validationErrors).length) return alert(`Cannot Submit`);

    // Create a new object for the contact us information.
    const contactUsInformation = {
      name,
      email,
      phone,
      phoneType,
      comments,
      submittedOn: new Date()
    };

    // Ideally, we'd persist this information to a database using a RESTful API.
    // For now, though, just log the contact us information to the console.
    console.log(contactUsInformation);

    // Reset the form state.
    setName('');
    setEmail('');
    setPhone('');
    setPhoneType('');
    setComments('');
    setValidationErrors({});
    setHasSubmitted(false);
  }

  return (
    <div>
      <h2>Contact Us</h2>
      <form onSubmit={onSubmit}>
        <div>
          <label htmlFor='name'>Name:</label>
          <input
            id='name'
            type='text'
            onChange={e => setName(e.target.value)}
            value={name}
          />
          {hasSubmitted && validationErrors.name.length > 0 && validationErrors.name.map((error, idx) => (
              <ul key={idx}>
                  <li className='error'>* {error}</li>
              </ul>
          ))}
        </div>
        <div>
          <label htmlFor='email'>Email:</label>
          <input
            id='email'
            type='text'
            onChange={e => setEmail(e.target.value)}
            value={email}
          />
          {hasSubmitted && validationErrors.email.length > 0 && validationErrors.email.map((error, idx) => (
              <ul key={idx}>
                  <li className='error'>* {error}</li>
              </ul>
          ))}
        </div>
        <div>
          <label htmlFor='phone'>Phone:</label>
          <input
            id='phone'
            type='text'
            onChange={e => setPhone(e.target.value)}
            value={phone}
          />
          <select
            name='phoneType'
            onChange={e => setPhoneType(e.target.value)}
            value={phoneType}
          >
            <option value='' disabled>
              Select a phone type...
            </option>
            <option>Home</option>
            <option>Work</option>
            <option>Mobile</option>
          </select>
        </div>
        <div>
          <label htmlFor='comments'>Comments:</label>
          <textarea
            id='comments'
            name='comments'
            onChange={e => setComments(e.target.value)}
            value={comments}
          />
        </div>
        <button>Submit</button>
      </form>
    </div>
  );
}

export default ContactUsBonus;