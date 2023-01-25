import { useParams } from 'react-router-dom';
import './SingleArticle.css';

const SingleArticle = ({ articles }) => {
  const { id } = useParams();
  const singleArticle = articles.find(article => article.id === +id);
  return (
    // <>
    //   {
    //     articles.length > 0 &&
    //     <div className='singleArticle'>
    //       <h1>{singleArticle.title}</h1>
    //       <img
    //         src={singleArticle.imageUrl}
    //         alt={singleArticle.title}
    //       />
    //       <p>
    //         {singleArticle.body}
    //       </p>
    //     </div>
    //   }
    // </>
    <div className='singleArticle'>
      <h1>{singleArticle?.title}</h1>
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