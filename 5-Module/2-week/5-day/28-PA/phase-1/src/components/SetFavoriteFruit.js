const SetFavoriteFruit = ({ fruits }) => {
  return (
    <div className="set-fav-fruit">
      <h2>Select your Favorite Fruit</h2>
      <label>
        <select
        >
          {fruits.map(fruit => (
            <option
              key={fruit.id}
              value={fruit.id}
            >
              {fruit.name}
            </option>
          ))}
        </select>
      </label>
    </div>
  );
}

export default SetFavoriteFruit;