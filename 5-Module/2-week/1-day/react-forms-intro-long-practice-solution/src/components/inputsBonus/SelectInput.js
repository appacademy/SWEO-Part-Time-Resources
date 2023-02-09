
function SelectInput ({ name, label, handleChange, required,
                        value, options, disabled }) {
  return (
    <select
      name={name}
      onChange={handleChange}
      value={value}
      disabled={disabled}
      required={required}
    >
      <option value='' disabled>{label}</option>
      {options.map(option =>
        <option key={option}>{option}</option>
      )}
    </select>
  )
}

export default SelectInput;
