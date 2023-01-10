function CheckboxInput({ value, id, handleChange, label, isChecked }) {
  return (
    <>
      <input  type="checkbox" value={value} id={id} name={id}
              onChange={handleChange}
              checked={ isChecked ? "checked" : ""}
      /> {label}
    </>
  )
}

export default CheckboxInput;
