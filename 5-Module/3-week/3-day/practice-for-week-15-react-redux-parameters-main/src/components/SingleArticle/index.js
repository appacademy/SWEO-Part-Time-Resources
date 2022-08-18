import './SingleArticle.css';
import {useSelector} from 'react-redux'
import {useParams} from 'react-router-dom'
const SingleArticle = () => {
  const articles = useSelector((state) => state.articleState.entries)
  const {id} = useParams()
  const article = articles[id]
  console.log(article)
  return (
    <div className='singleArticle'>
      <h1>{article.title}</h1>
      <img
        src={article.imageUrl}
        alt='home'
      />
      <p>
       {article.body}
      </p>
    </div>
  );
};

export default SingleArticle;