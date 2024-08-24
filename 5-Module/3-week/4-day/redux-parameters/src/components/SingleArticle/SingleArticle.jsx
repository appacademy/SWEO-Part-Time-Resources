import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

import "./SingleArticle.css";

const SingleArticle = () => {
  const { id } = useParams();
  const article = useSelector((state) =>
    state.articleState.entries.find((ele) => ele.id === id)
  );

  return (
    <div className="singleArticle">
      <h1>{article.title}</h1>
      <img src={article.imageUrl} alt="home" />
      <p>{article.body}</p>
    </div>
  );
};

export default SingleArticle;
