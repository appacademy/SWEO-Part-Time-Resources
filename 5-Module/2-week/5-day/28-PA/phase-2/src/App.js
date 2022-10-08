import fruits from './mockData/fruits.json';
import FruitsIndex from './components/FruitsIndex';
import FruitForm from './components/FruitForm';

function App() {
    return (
        <>
            <FruitsIndex fruits={fruits} />
            <FruitForm fruits={fruits} />
        </>
    );
}

export default App;
