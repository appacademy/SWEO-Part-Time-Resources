function RadioInput ({ name, handleChange, values, selection }) {
  const list = values.map( value => {
    return (
      <div className="radio-button" key={value} >
        <input  type="radio" value={value} 
                name={name} id={`${name}-${value}`} 
                onChange={handleChange}
                checked={selection === value ? "checked" : ""}
        /> {value}
      </div>
    );
  });
  return list;
  
}

export default RadioInput;
