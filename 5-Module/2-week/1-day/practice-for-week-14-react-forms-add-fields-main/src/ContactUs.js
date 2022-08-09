import { useState } from 'react';

function ContactUs() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [comments, setComments] = useState('')
  const [phoneType, setPhoneType] = useState('')
  const [attending, setAttending] = useState(false)

  const onSubmit = e => {
    // Prevent the default form behavior so the page doesn't reload.
    e.preventDefault();

    // Create a new object for the contact us information.
    const contactUsInformation = {
      name,
      email,
      phone,
      comments,
      phoneType,
      attending, 
      submittedOn: new Date()
    };

    // Ideally, we'd persist this information to a database using a RESTful API.
    // For now, though, just log the contact us information to the console.
    console.log(contactUsInformation);

    // Reset the form state.
    setName('');
    setEmail('');
    setPhone('');
    setComments('');
    setPhoneType('')
    setAttending('')
  };

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
        </div>
        <div>
          <label htmlFor='email'>Email:</label>
          <input
            id='email'
            type='text'
            onChange={e => setEmail(e.target.value)}
            value={email}
          />
        </div>
        <div>
          <label htmlFor='phone'>Phone:</label>
          <input
            id='phone'
            type='text'
            onChange={e => setPhone(e.target.value)}
            value={phone}
          />
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
        <select
          name='attending'
          onChange={e => setAttending(e.target.value)}
          value={attending}
        >
          <option value='' disabled>
            Select a phone type...
          </option>
          <option value={true}>yes</option>
          <option value={false}>no</option>
        </select>
        <button>Submit</button>
      </form>
    </div>
  );
}

export default ContactUs;