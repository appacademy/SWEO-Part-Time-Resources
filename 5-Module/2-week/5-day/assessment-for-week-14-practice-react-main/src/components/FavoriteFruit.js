import { NavLink } from "react-router-dom";
import { useFruit } from '../context/FavFruitContext'
const FavoriteFruit = ({fruits}) => {
  const { favFruitId } = useFruit()
  const favFruit = fruits.find(el => el.id === favFruitId)
  return (
    <div
      className="fav-fruit"
    >
      <h2>Favorite Fruit</h2>
      <NavLink to={`/fruits/${favFruitId}`}>{favFruit.name}</NavLink>
    </div>
  )
}

export default FavoriteFruit;