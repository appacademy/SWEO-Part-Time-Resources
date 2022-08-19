import './SingleArticle.css';
import { useParams } from 'react-router';

const SingleArticle = ({articles}) => {
  console.log(articles)
  const {id} = useParams()
  
  return (
    <div className='singleArticle'>
      <h1>{articles[id].title}</h1>
      <img
      src={articles[id].imageUrl}
        alt={articles[id].title}
      />
      <p>
        {articles[id].body}
      </p>
    </div>
  );
};

export default SingleArticle;