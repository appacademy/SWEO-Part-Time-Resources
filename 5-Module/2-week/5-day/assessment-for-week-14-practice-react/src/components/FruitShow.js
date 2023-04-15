import { useParams } from 'react-router-dom';

function FruitShow({ fruits }) {
  const { fruitId } = useParams();
  const fruit = fruits.find(fruit => fruit.id === fruitId);

  return (
    <div className="fruit-show">
      <h2>{fruit.name}</h2>
      <div>Color: {fruit.color}</div>
      <div>Sweetness: {fruit.sweetness}</div>
      <div>Seeds: {fruit.seeds}</div>
    </div>
  );
}



export default FruitShow;
