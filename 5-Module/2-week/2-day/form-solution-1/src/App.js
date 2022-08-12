import { useState, useEffect } from 'react'
import './App.css';

function App() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [phoneType, setPhoneType] = useState('')
  const [staff, setStaff] = useState(false)
  const [bio, setBio] = useState('')
  const [getEmails, setGetEmails] = useState(false)
  const [hasSubmitted, setHasSubmitted] = useState(false)
  const [validationErrors, setValidationErrors] = useState([])
  useEffect(() => {
    const errors = [];
    if (!name.length) errors.push('Please enter your Name');
    if (!email.includes('@')) errors.push('Please provide a valid Email');
    setValidationErrors(errors);
}, [name, email])


  
  const handleSubmit = (e) => {
    
    e.preventDefault()

    setHasSubmitted(true);
    if (validationErrors.length) return alert(`Cannot Submit`);

    const data = {
      name, email, phone, phoneType, staff, bio, getEmails
    }
    console.log(data)

 
    setName('')
    setEmail('')
    setEmail('')
    setPhone('')
    setPhoneType('')
    setStaff(false)
    setBio('')
    setGetEmails(false)
 

  }

  const someFunc = () => {
    return true
  }
  return (
    <div className="App">
      {hasSubmitted && someFunc() && validationErrors.length > 0 && (
        <div>
          The following errors were found:
          <ul>
            {validationErrors.map(error => (
              <li key={error}>{error}</li>
            ))}
          </ul>
        </div>
      )}
      {hasSubmitted ? 
      <div>Some info</div>
      :
      <div>some info</div>  
    }
      <form
        onSubmit={handleSubmit}
      >
        <div>
          <label htmlFor='name' >Name :</label>
          <input
            onChange={(e) => setName(e.target.value)}
            name='name' type='text' value={name} />
        </div>
        <div>
          <label htmlFor='email' >Email :</label>
          <input
            onChange={(e) => setEmail(e.target.value)}
            name='email' type='text' value={email} />
        </div>
        <div>
          <label htmlFor='phone' >Phone :</label>
          <input
            onChange={(e) => setPhone(e.target.value)}
            name='phone' type='text' value={phone} />
        </div>
        <div>
          <select
            value={phoneType}
            onChange={(e) => setPhoneType(e.target.value)}
            disabled={phone.length === 0 ? true : false}
          >
            <option disabled>Select a phone type</option>
            <option >Home</option>
            <option >Work</option>
            <option >Cell</option>
          </select>
        </div>
        <div>
          <label htmlFor='staff'>check if you are a member of staff</label>
          <input onChange={(e) => setStaff(!staff)} checked={staff} type='checkbox' />
        </div>
        <div>
          <label htmlFor='bio'>Bio : </label>
          <textarea
            name='bio'
            value={bio}
            onChange={(e) => {
              setBio(e.target.value)
            }}
          />
        </div>
        <div>
          <label htmlFor='getEmail'>Check if you would like to receive emails</label>
          <input onChange={(e) => setGetEmails(!getEmails)} checked={getEmails} name='GetEmail' type='checkbox' />
        </div>
        <button>Submit</button>
      </form>
       
    </div>
  );

}

export default App;
