import { useParams } from "react-router-dom";
import { useSelector } from 'react-redux';

import './SingleArticle.css';

const SingleArticle = () => {
  const { id } = useParams();
  const articles = useSelector(state => state.articleState.entries);

  const { title, imageUrl, body } = articles.find(article => article.id === id);

  return (
    <div className='singleArticle'>
      <h1>{title}</h1>
      <img
        src={imageUrl}
        alt='home'
      />
      <p>
        {body}
      </p>
    </div>
  );
};

export default SingleArticle;