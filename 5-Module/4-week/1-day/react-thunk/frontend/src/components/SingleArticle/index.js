import { useParams } from 'react-router-dom';
import './SingleArticle.css';

const SingleArticle = ({ articles }) => {
  const { id } = useParams();
  // const singleArticle = articles.find(article => article.id === +id);
  const singleArticle = articles[id]
  console.log(singleArticle, )
  return (
    <div className='singleArticle'>
      <h1>{singleArticle ? singleArticle.title : <div>title is loading </div>}</h1>
      <img
        src={singleArticle?.imageUrl}
        alt={singleArticle?.title}
      />
      <p>
        {singleArticle?.body}
      </p>
    </div>
  );
};

export default SingleArticle;