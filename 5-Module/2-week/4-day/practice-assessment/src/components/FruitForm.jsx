import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const COLORS = ["red", "orange", "yellow", "green", "blue", "purple"];

function FruitForm({ fruits }) {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [color, setColor] = useState(COLORS[1]);
  const [sweetness, setSweetness] = useState(1);
  const [seeds, setSeeds] = useState("yes");
  const [errors, setErrors] = useState({});

  useEffect(() => {
    const errs = {};
    if (name.length < 3) {
      errs.name = "Name must be 3 or more characters";
    }
    if (name.length > 20) {
      errs.name = "Name must be 20 characters or less";
    }
    if (fruits.filter((fruit) => fruit.name === name).length) {
      errs.name = "Name already exists";
    }
    if (sweetness < 1 || sweetness > 10) {
      errs.sweetness = "Sweetness must be between 1 and 10";
    }
    setErrors(errs);
  }, [name, sweetness]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const res = {
      name,
      sweetness,
      color,
      seeds,
    };
    console.log(res);
    navigate("/");
  };

  return (
    <form className="fruit-form" onSubmit={handleSubmit}>
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
      <p>{errors.name}</p>
      <label>
        Select a Color
        <select value={color} onChange={(e) => setColor(e.target.value)}>
          {COLORS.map((color) => (
            <option key={color} value={color}>
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
      <p>{errors.sweetness}</p>
      <label>
        <input
          type="radio"
          value='no'
          checked={seeds === 'no'}
          name="seeds"
          onChange={(e) => setSeeds(e.target.value)}
        />
        No Seeds
      </label>
      <label>
        <input
          type="radio"
          value='yes'
          checked={seeds === 'yes'}
          name="seeds"
          onChange={(e) => setSeeds(e.target.value)}
        />
        Seeds
      </label>
      <button type="submit" disabled={Object.keys(errors).length}>
        Submit Fruit
      </button>
    </form>
  );
}

export default FruitForm;
