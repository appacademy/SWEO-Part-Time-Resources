// import {useContext} from 'react'
import { Link } from 'react-router-dom';
import useStupidHook from '../hooks/stupidHook';
// import { FavFruitContext } from '../context/FavFruitContext';

const FavoriteFruit = ({fruits}) => {
  // const {favFruitId} = useContext(FavFruitContext)

  // const fruit = fruits.find(fruit => fruit.id === favFruitId)
  const fruit = useStupidHook(fruits)
  console.log(fruit)

  return (
    <>
    <h2>Favorite Fruit</h2>
      <Link to={`/fruits/${fruit.id}`}>{fruit.name}</Link>
    </>
  );
}

export default FavoriteFruit;
