// To run this component, change the import statement in src/index.js
import React from 'react';
import { useState, useCallback } from 'react';
import { TextInput,  SelectInput, TextareaInput, 
         RadioInput, CheckboxInput } from './inputsBonus/inputTypes';
import FormRowInput from './inputsBonus/FormRowInput';
import * as Validations from "./inputsBonus/validations"

function Form (props) {
  const [inputs, setInputs] = useState({
    name: '',
    email: '',
    phone: '',
    phoneType: '',
    bio: '',
    staff: '',
    checked: ''
  });
  const [validationErrors, setValidationErrors] = useState({});
  const [hasSubmitted, setHasSubmitted] = useState(false);
  
  const { name, email, phone, phoneType, bio, staff, checked } = inputs;
  
  const onSubmit = (e) => {
    e.preventDefault();
    
    if (Object.keys(validationErrors).length > 0) {
      // Set hasSubmitted to true to turn on validating by keystroke
      return setHasSubmitted(true);
    }

    // Don't send the phoneType if no phone
    const formInformation = {
      name,
      email,
      phone,
      phoneType: phone === '' ? "" : phoneType,
      bio,
      staff,
      checked,
      submittedOn: new Date()
    };
    
    console.log(formInformation);
    setInputs({
      name: '',
      email: '',
      phone: '',
      phoneType: '',
      bio: '',
      staff: '',
      checked: ''
    });
    setValidationErrors({});
    setHasSubmitted(false);
  };
  
  const handleChange = useCallback(({ target: { type, name, value, checked }}) => 
  {
    if (type === "checkbox"){
      value = checked ? value : "";
    }
    setInputs(prevInputs => ({ ...prevInputs, [name]: value }))
    
    // Validate inputs
    if (["name", "email", "phone", "bio"].includes(name)) {
      const errorMessage = Validations[`validate${name[0].toUpperCase() + 
                                        name.slice(1)}`](value);
      if (errorMessage.length !== 0)
        setValidationErrors(prevErrors => (
          {
            ...prevErrors, 
            [name]: errorMessage[0]
          }
        ));
      else
        // No errors found! Reset any errors associated with this field
        setValidationErrors ( prevErrors => {
            delete prevErrors[name]; 
            return { ...prevErrors };
        });
    }
  }, [setInputs, setValidationErrors]);

  return (
    <div className='container'>
      <h2>User Information</h2>

      <form onSubmit={onSubmit}>
        <FormRowInput >
          {/* Name */}
          <TextInput
            name="name" label="Name (required):" value={name}
            handleChange={handleChange} error={validationErrors.name}
            required={true} hasSubmitted={hasSubmitted}
          />
        </FormRowInput>
        <FormRowInput >
          {/* Email */}
          <TextInput
            name="email" label="Email (required):" value={email}
            handleChange={handleChange} error={validationErrors.email}
            required={true} hasSubmitted={hasSubmitted}
          />
        </FormRowInput>
        <FormRowInput klassName='phone-row' skipErrors={[false,true]}>
          {/* Phone */}
          <TextInput
            name="phone" label="Phone:" value={phone}
            handleChange={handleChange} error={validationErrors.phone}
            hasSubmitted={hasSubmitted} placeholder="999-999-9999"
          />
          {/* PhoneType */}
          <SelectInput
            name="phoneType" label="Select a phone type..." 
            value={phoneType} handleChange={handleChange} 
            options={props.phoneTypes} disabled={phone === ""} 
            required={phone !== ""}
          />
        </FormRowInput>
        <FormRowInput >
          {/* Bio */}
          <TextareaInput
            name="bio" label="Short Bio (280 chars):" 
            value={bio} handleChange={handleChange} 
            error={validationErrors.bio} hasSubmitted={hasSubmitted}
          />
        </FormRowInput>
        {/* Staff */}
        <div className="radio-row">
          <FormRowInput skipErrors={true}>
            <RadioInput
              name="staff" values={["Instructor", "Student"]} 
              selection={staff} handleChange={handleChange}
            />
          </FormRowInput>
        </div>
        {/* Email List */}
        <FormRowInput skipErrors={true}>
          <CheckboxInput
              value="yes" id='checked' 
              isChecked={checked === "yes"} handleChange={handleChange} 
              label="Sign up for our email list?"
          />
        </FormRowInput>
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