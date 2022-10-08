import { Link } from 'react-router-dom';

function FruitsIndex({ fruits }) {
    return (
        <div className="fruits-index">
            <h2>Fruits Index</h2>
            {/* <ul>
                {fruits.map((el) => (
                    <li key={el.id}>
                        <Link to={`/fruits/${el.id}`}>{el.name}</Link>
                    </li>
                ))}
            </ul> */}

            {fruits.map((el) => (
                <span key={el.id}>
                    <Link to={`/fruits/${el.id}`}>{el.name}</Link>
                </span>
            ))}
        </div>
    );
}

export default FruitsIndex;
