function TextInput ({ name, label, handleChange, error, value, required, 
                      hasSubmitted, placeholder }) {

  return (
    <>
      <label htmlFor={name}>{label}</label>
      <input 
        className={(hasSubmitted && error) ? 'input-error' : undefined}
        name={name}
        id={name}
        type='text'
        onChange={handleChange}
        placeholder={placeholder}
        value={value}
        required={required}
      />
    </>
  )
}

export default TextInput;
