import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadBreeds } from "../../store/articleReducer";
import "./ArticleList.css";
// import { NavLink } from "react-router-dom";

const ArticleList = () => {
  const dispatch = useDispatch();
  const [dog, setDog] = useState("hound");
  const dogs = useSelector((state) => state.dogs.dogs);

  console.log(dogs);

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch(loadBreeds(dog));
  };

  return (
    <div>
      <h1>Article List</h1>
      <form onSubmit={handleSubmit}>
        <input value={dog} onChange={(e) => setDog(e.target.value)} />
        <button type="submit">Pick A breed</button>
      </form>
      <ol className="img-container">
        <>
          {dogs &&
            dogs.map((dog, idx) => (
              <img key={idx} src={dog} alt={dog} className="msg" />
            ))}
        </>
      </ol>
    </div>
  );
};

export default ArticleList;
