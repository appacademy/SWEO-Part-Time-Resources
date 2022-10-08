import fruits from './mockData/fruits.json';
import FruitsIndex from './components/FruitsIndex';
import FruitForm from './components/FruitForm';
import FavoriteFruit from './components/FavoriteFruit';

function App() {
    return (
        <>
            <FruitsIndex fruits={fruits} />
            <FruitForm fruits={fruits} />
            <FavoriteFruit fruits={fruits} />
        </>
    );
}

export default App;
