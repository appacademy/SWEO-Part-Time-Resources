import { useParams } from "react-router-dom";

function FruitShow({fruits}) {
  const {fruitId} = useParams()
  const singleFruit = fruits.find(fruit => fruit.id === fruitId)
  
  return (
    <>
      <h2>{singleFruit.name}</h2>
      <div>Color: {singleFruit.color}</div>
      <div>Sweetness: {singleFruit.sweetness}</div>
      <div>Seeds: {singleFruit.seeds}</div>
    </>
  );
}

export default FruitShow;
