import { Link } from "react-router-dom";

function FruitsIndex({ fruits }) {

  return (
    <>
      <h2>Fruits Index</h2>
      {fruits &&
        fruits.map((fruit) => (
          <div key={fruit.id}>
            <Link  to={`/fruits/${fruit.id}`}>
              {fruit.name}
            </Link>
          </div>
        ))}
    </>
  );
}

export default FruitsIndex;
