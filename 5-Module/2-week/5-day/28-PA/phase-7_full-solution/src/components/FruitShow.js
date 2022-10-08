import { useParams } from 'react-router-dom';

function FruitShow({ fruits }) {
    const { fruitId } = useParams();
    const currFruit = fruits.find((el) => el.id === fruitId);
    return (
        <div className="fruit-show">
            <h2>{currFruit.name}</h2>
            <h3>
                {currFruit.name}s are {currFruit.color}
            </h3>
            <h3>
                {currFruit.name}s have a sweetness score of{' '}
                {currFruit.sweetness}
            </h3>
            <h3>
                Do {currFruit.name.toLowerCase()}s have seeds? {currFruit.seeds}
            </h3>
        </div>
    );
}

export default FruitShow;
