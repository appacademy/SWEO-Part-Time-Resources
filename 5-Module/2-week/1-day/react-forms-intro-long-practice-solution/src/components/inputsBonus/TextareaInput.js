function TextareaInput ({ name, label, handleChange, error, 
                         value, hasSubmitted }) {
  return (
    <>
      <label htmlFor={name}>{label}</label>
      <textarea 
        className={(hasSubmitted && error) ? 'input-error' : undefined}
        id={name}
        name={name}
        onChange={handleChange}
        value={value}
      />
    </>
  )
}

export default TextareaInput;
