import fruits from './mockData/fruits.json';
import FruitsIndex from './components/FruitsIndex';

function App() {
    return (
        <>
            <FruitsIndex fruits={fruits} />
        </>
    );
}

export default App;
