import React from 'react';
import { useState } from 'react';

function Form (props) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [bio, setBio] = useState('');
  const [phoneType, setPhoneType] = useState('');
  const [validationErrors, setValidationErrors] = useState({});
  const [staff, setStaff] = useState('');
  const [checked, setChecked] = useState(false);

  const validate = () => {
    const errors = {};

    if (!name) errors.Name = 'Please provide a Name';

    if (!email) {
      errors.Email = 'Please provide an Email';
    }

    else if(!email.trim()
               .match(/^(?!\.)[\w+\-.]+(?<!\.)@[\w-]+(\.[a-z\d-]+)*\.[a-z]+$/i))
    {
      errors.Email = 'Please provide a valid Email';
    }

    if (phone) {
      // In the following regex pattern, /\D/ matches any non-digit character.
      // The 'g' flag at the pattern's end signals to match the pattern
      // globally, i.e., replace all instances in phoneDigits, not just the
      // first one.
      let phoneDigits = phone.replace(/\D/g,'');
      if (phoneDigits.length !== 10) {
        errors.Phone = 'Please provide a 10-digit Phone number';
      }
    }

    if (phone && !phoneType) {
      errors.PhoneType= 'Please select a Phone type';
    }

    if (bio.length > 280) {
      errors.Bio = 'Please write a shorter Bio (you have ' +
                             bio.length + ' chars)';
    }

    return errors;
  }

  const onSubmit = (e) => {
    e.preventDefault();
    const errors = validate();
    const errorContent = Object.values(errors);
    if(errorContent.length) return setValidationErrors(errors)


    const formInformation = {
      name,
      email,
      phone,
      phoneType,
      bio,
      staff,
      checked
    };

    console.log(formInformation);
    setName('');
    setEmail('');
    setPhone('');
    setPhoneType('');
    setBio('');
    setStaff('');
    setChecked('');
    setValidationErrors([]);
  };

  return (
    <div className='container'>
      <h2>User Information</h2>
      <form onSubmit={onSubmit}>
        <div className='form-row'>
          <label htmlFor='name'>Name (required): </label>
          <input
            id='name'
            type='text'
            onChange={(e) => setName(e.target.value)}
            value={name}
          />
          {validationErrors.Name && (<div className='error-msg'>* {validationErrors.Name}</div>)}
        </div>
        <div className='form-row'>
          <label htmlFor='email'>Email (required):</label>
          <input
            id='email'
            type='text'
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
          {validationErrors.Email && ( <div className='error-msg'> * {validationErrors.Email}</div> )}
        </div>
        <div className='form-row'>
          <label htmlFor='phone'>Phone:</label>
          <input
            id='phone'
            type='text'
            onChange={(e) => setPhone(e.target.value)}
            value={phone}
          />
          <br/>
          <select
            name='phoneType'
            onChange={e => setPhoneType(e.target.value)}
            value={phoneType}
          >
            <option value='' disabled>Select a phone type...</option>
            {props.phoneTypes.map(phoneType =>
              <option key={phoneType}>{phoneType}</option>
            )}
          </select>
          {validationErrors.Phone && (<div className='error-msg'>* {validationErrors.Phone}</div>)}
          {validationErrors.PhoneType && (<div className='error-msg'>* {validationErrors.PhoneType}</div>)}
        </div>
        <div className='form-row'>
          <label htmlFor='bio'>Short Bio (280 chars):</label>
          <textarea
            id='bio'
            name='bio'
            onChange={(e) => setBio(e.target.value)}
            value={bio}
          />
          {validationErrors.Bio && (<div className='error-msg'>* {validationErrors.Bio}</div>)}

        </div>
        <div className='form-row'>
          <input  type="radio" value="Instructor"
                  name="staff" id='staff-instructor'
                  checked={staff === "Instructor" ? "checked" : ""}
                  onChange={(e) => setStaff(e.target.value)}
          /> Instructor
          <input  type="radio" value="Student"
                  name="staff" id='staff-Student'
                  checked={staff === "Student" ? "checked" : ""}
                  onChange={(e) => setStaff(e.target.value)}
          /> Student
        <br/>
          <input  type="checkbox" value="yes" id='checked'
            onChange={(e) => setChecked(!checked)}
                //   onChange={({ target: { value, checked }}) => {
                //                 setChecked((checked ? value : ""))}
                //   }
                //   checked={checked === '' ? '' : "checked"}
          /> Sign up for our email list?
        </div>
        <button>Submit</button>
      </form>
    </div>
  );
}


Form.defaultProps = {
  phoneTypes: [
    'Home',
    'Work',
    'Mobile'
  ],
};

export default Form;
