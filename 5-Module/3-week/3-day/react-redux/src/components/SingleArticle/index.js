import { useParams } from "react-router-dom";

import "./SingleArticle.css";

const SingleArticle = ({ articles }) => {
  const { id } = useParams();
  const oneArticle = articles.find((article) => article.id === id);

  return (
    <div className="singleArticle">
      {(oneArticle && (
        <>
          <h1>{oneArticle.title}</h1>
          <img src={oneArticle.imageUrl} alt={oneArticle.title} />
          <p>{oneArticle.body}</p>
        </>
      )) || <div>loading...</div>}
    </div>
  );
};

export default SingleArticle;
