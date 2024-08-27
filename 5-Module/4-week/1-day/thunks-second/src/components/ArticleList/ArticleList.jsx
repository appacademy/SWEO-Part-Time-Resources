import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadDogImages } from "../../store/articleReducer";
import "./ArticleList.css";

const ArticleList = () => {
  const dispatch = useDispatch();
  const [dog, setDog] = useState("hound");
  const dogs = useSelector((state) => state.dogs.dogs);


  useEffect(() => {
    dispatch(loadDogImages(dog));
  }, [dispatch, dog]);

  return (
    <div>
      <h1>Article List</h1>
      <form>
        <input
          type="text"
          onChange={(e) => setDog(e.target.value)}
          value={dog}
        />
      </form>
      <ol className="img-container">
        {dogs &&
          dogs.map((dog, idx) => (
            <img key={idx} className="img" src={dog} alt="" />
          ))}
      </ol>
    </div>
  );
};

export default ArticleList;
