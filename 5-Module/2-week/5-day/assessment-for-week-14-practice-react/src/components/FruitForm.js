import { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';


const COLORS = [
  "red",
  "orange",
  "yellow",
  "green",
  "blue",
  "purple"
];

function FruitForm({ fruits }) {

  const [name, setName] = useState("");
  const [color, setColor] = useState(COLORS[1]);
  const [sweetness, setSweetness] = useState(1);
  const [seeds, setSeeds] = useState("yes");
  const [errors, setErrors] = useState({});
  const history = useHistory();

  useEffect(() => {
    const errors = {};
    if (sweetness < 1 || sweetness > 10) {
      errors.sweetness = "Sweetness must be between 1 and 10";
    }
    if (name.length < 3) {
      errors.name = "Name must be 3 or more characters";
    } else if (name.length > 20) {
      errors.name = "Name must be 20 characters or less";
    } else if (fruits.map(fruit => fruit.name).includes(name)) {
      errors.name = "Name already exists";
    }
    setErrors(errors);
  }, [name, sweetness, fruits]);

  const onSubmit = e => {
    e.preventDefault();
    console.log({
      name,
      color,
      sweetness,
      seeds
    });
    history.push("/");
  };


  return (
    <form
      className="fruit-form"

      onSubmit={onSubmit}

    >
      <h2>Enter a Fruit</h2>
      <label>
        Name
        <input
          type="text"
          name="name"

          value={name}
          onChange={(e) => setName(e.target.value)}

        />
      </label>

      <p className="errors">{errors.name}</p>

      <label>
        Select a Color
        <select

          onChange={(e) => setColor(e.target.value)}
          value={color}

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

      <p className="errors">{errors.sweetness}</p>

      <label>
        <input
          type="radio"
          value="no"
          name="seeds"

          checked={seeds === "no"}
          onChange={(e) => setSeeds("no")}

        />
        No Seeds
      </label>
      <label>
        <input
          type="radio"
          value="yes"
          name="seeds"

          checked={seeds === "yes"}
          onChange={(e) => setSeeds("yes")}

        />
        Seeds
      </label>
      <button
        type="submit"

        disabled={!!Object.values(errors).length}

      >
        Submit Fruit
      </button>
    </form>
  );
}

export default FruitForm;
