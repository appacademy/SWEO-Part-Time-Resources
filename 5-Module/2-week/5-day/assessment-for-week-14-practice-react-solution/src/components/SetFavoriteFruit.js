import { useFavFruit } from '../context/FavFruitContext.js';

const SetFavoriteFruit = ({ fruits }) => {
  const { setFavFruitId, favFruitId } = useFavFruit();
  return (
    <div className="set-fav-fruit">
      <h2>Select your Favorite Fruit</h2>
      <label>
        <select
          onChange={(e) => setFavFruitId(e.target.value)}
          value={favFruitId}
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