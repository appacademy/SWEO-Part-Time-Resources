import { Link } from 'react-router-dom';

function FruitsIndex({ fruits }) {
  return (
    <div className="fruits-index">
      <h2>Fruits Index</h2>
      <ul>
        {fruits.map(fruit => (
          <li key={fruit.id}>
            <Link to={`/fruits/${fruit.id}`}>{fruit.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default FruitsIndex;