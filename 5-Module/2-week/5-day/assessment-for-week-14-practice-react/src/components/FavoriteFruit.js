import { Link } from 'react-router-dom';
import { useFavFruit } from '../context/FavFruitContext.js';

const FavoriteFruit = ({ fruits }) => {
  const { favFruitId } = useFavFruit();
  const fruit = fruits.find(fruit => fruit.id === favFruitId);

  return (
    <div className="fav-fruit">
      <h2>Favorite Fruit</h2>
      <Link to={`/fruits/${favFruitId}`}>{fruit.name}</Link>
    </div>
  );
}

export default FavoriteFruit;
