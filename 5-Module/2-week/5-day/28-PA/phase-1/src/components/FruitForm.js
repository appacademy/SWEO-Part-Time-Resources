const COLORS = [
  "red",
  "orange",
  "yellow",
  "green",
  "blue",
  "purple"
];

function FruitForm({ fruits }) {

  return (
    <form
      className="fruit-form"
    >
      <h2>Enter a Fruit</h2>
      <ul className="errors">
      </ul>
      <label>
        Name
        <input
          type="text"
          name="name"
        />
      </label>
      <label>
        Select a Color
        <select
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
        />
      </label>
      <label>
        <input
          type="radio"
          value="no"
          name="seeds"
        />
        No Seeds
      </label>
      <label>
        <input
          type="radio"
          value="yes"
          name="seeds"
        />
        Seeds
      </label>
      <button
        type="submit"
      >
        Submit Fruit
      </button>
    </form>
  );
}

export default FruitForm;