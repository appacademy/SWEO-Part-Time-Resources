import { useState, useEffect } from 'react'
import {useHistory} from 'react-router-dom'

const COLORS = [
  "red",
  "orange",
  "yellow",
  "green",
  "blue",
  "purple"
];

function FruitForm({ fruits }) {
  const history = useHistory()
  const [name, setName] = useState("")
  const [sweetness, setSweetness] = useState(1)
  const [color, setColor] = useState("red")
  const [seeds, setSeeds] = useState("yes")
  const [errors, setErrors] = useState([])
  const usedName = fruits.map(fruit => fruit.name)
  useEffect(() => {
    const arr = []
    if(name.length < 3) arr.push("Name must be 3 or more characters")
    if(name.length > 20) arr.push("Name must be 20 characters or less")
    if(usedName.includes(name)) arr.push("Name already exists.")
    if(sweetness < 1 || sweetness > 10) arr.push("Sweetness must be between 1 and 10")
    setErrors(arr)
  }, [name, sweetness])

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log({name, sweetness, color, seeds})
    history.push('/')
  }
  return (
    <form
      className="fruit-form"
      onSubmit={handleSubmit}
    >
      <h2>Enter a Fruit</h2>
      
      <ul className="errors">
        {
          errors.map(error => {
            return (
              <li>{error}</li>
            )
          })
        }
      </ul>
      <label>
        Name
        <input
          type="text"
          name="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </label>
      <label>
        Select a Color
        <select
          value={color}
          onChange={(e) => setColor(e.target.value)}
        >
          {COLORS.map(color => (
            <option
              key={color}
              value={color}
            >
              {color}
            </option>
          ))}
        </select>
      </label>
      <label>
        Sweetness
        <input
          type="number"
          name="sweetness"
          value={sweetness}
          onChange={(e) => setSweetness(e.target.value)}
        />
      </label>
      <label>
        <input
          type="radio"
          value="no"
          name="seeds"
          checked={seeds === "no"}
          onChange={() => setSeeds("no")}
        />
        No Seeds
      </label>
      <label>
        <input
          type="radio"
          value="yes"
          name="seeds"
          checked={seeds === "yes"}
          onChange={() => setSeeds("yes")}
        />
        Seeds
      </label>
      <button
        type="submit"
        disabled={errors.length > 0}
      >
        Submit Fruit
      </button>
    </form>
  );
}

export default FruitForm;