import { NavLink } from 'react-router-dom';
import { useFruit } from '../context/FavFruitContext';

const FavoriteFruit = ({ fruits }) => {
    const { favFruitId } = useFruit();
    const currFruit = fruits.find((el) => el.id === favFruitId);

    return (
        <div className="fav-fruit">
            <h2>Favorite Fruit</h2>
            <NavLink to={`/fruits/${favFruitId}`}>{currFruit.name}</NavLink>
        </div>
    );
};

export default FavoriteFruit;
