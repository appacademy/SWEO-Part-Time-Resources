import React from 'react';
import { useState } from 'react';

function Form (props) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [bio, setBio] = useState('');
  const [phoneType, setPhoneType] = useState('');
  const [validationErrors, setValidationErrors] = useState([]);
  const [staff, setStaff] = useState('');
  const [checked, setChecked] = useState('');


  const validate = () => {
    const validationErrors = [];

    if (!name) validationErrors.push('Please provide a Name');

    if (!email) {
      validationErrors.push('Please provide an Email');
    } 

    // A Regular Expression (regex) pattern to match is signified by wrapping
    // the pattern in slashes: '/   /'. A '^' signifies that matching should
    // start from the beginning of the input. '^(?!\.)' ensures that the input's
    // first('^') character('?') is not('!') a '.'('\.'). '\w' will match any
    // alphanumeric character (including '_'). '[ ]' will match any character
    // included in the brackets. A '+' after a character/grouping indicates that
    // the preceding pattern occurs 1 or more times. (Note that a '+' inside
    // '[]'s simply indicates that '+' is a potentially matching character.) '*'
    // after a pattern indicates that the preceding pattern occurs 0 or more
    // times (i.e., it could be omitted). '(?<!\.)@' will match '@' only as long
    // as the '@' is not('!') preceded by('?<') a '.'('\.'). Inside '[]'s, a '-'
    // designates a range, so '[a-z]' will match any letter between 'a' and 'z',
    // inclusive. (A '-' at the very end of brackets--e.g., '[a-]'--will be
    // treated as just another character to match.) '\d' will match any digit. A
    // '$' signifies the end of the input. The 'i' flag that follows the regex
    // pattern below signals to ignore case. 
    //
    // Although fully validating email addresses would require a few additional
    // checks--e.g., special characters like '$' and '&' are allowed, '..' is
    // not--the following regex pattern covers the vast majority of allowable
    // email addresses and will suffice for our purposes.

    else if(!email.trim()
               .match(/^(?!\.)[\w+\-.]+(?<!\.)@[\w-]+(\.[a-z\d-]+)*\.[a-z]+$/i)) 
    {
      validationErrors.push('Please provide a valid Email');
    }

    if (phone) {
      // In the following regex pattern, /\D/ matches any non-digit character.
      // The 'g' flag at the pattern's end signals to match the pattern
      // globally, i.e., replace all instances in phoneDigits, not just the
      // first one.
      let phoneDigits = phone.replace(/\D/g,'');
      if (phoneDigits.length !== 10) {
        validationErrors.push('Please provide a 10-digit Phone number');
      }
    }

    if (phone && !phoneType) {
      validationErrors.push('Please select a Phone type');
    }

    if (bio.length > 280) {
      validationErrors.push('Please write a shorter Bio (you have ' + 
                             bio.length + ' chars)');
    }

    return validationErrors;
  }

  const onSubmit = (e) => {
    e.preventDefault();
    const errors = validate();

    if (errors.length > 0) return setValidationErrors(errors);

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
      {validationErrors.length > 0 && (
        <div className='errors'>
          The following errors were found:
          <ul>
            {validationErrors.map(error => <li key={error}>{error}</li>)}
          </ul>
        </div>
      )}
      <form onSubmit={onSubmit}>
        <div className='form-row'>
          <label htmlFor='name'>Name (required): </label>
          <input
            id='name'
            type='text'
            onChange={(e) => setName(e.target.value)}
            value={name}
          />
        </div>
        <div className='form-row'>
          <label htmlFor='email'>Email (required):</label>
          <input
            id='email'
            type='text'
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
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
        </div>
        <div className='form-row'>
          <label htmlFor='bio'>Short Bio (280 chars):</label>
          <textarea
            id='bio'
            name='bio'
            onChange={(e) => setBio(e.target.value)}
            value={bio}
          />
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
                  onChange={({ target: { value, checked }}) => {
                                setChecked((checked ? value : ""))}
                  } 
                  checked={checked === '' ? '' : "checked"}
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
