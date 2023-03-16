//!!START SILENT
import { useParams } from 'react-router-dom';
//!!END
import './SingleArticle.css';

//!!START SILENT
const SingleArticle = ({ articles }) => {
  const { id } = useParams();
  const singleArticle = articles.find(article => article.id === id);
//!!END
//!!ADD
// const SingleArticle = () => {
//!!END_ADD
  return (
    <div className='singleArticle'>
      {/*!!START SILENT */}
      <h1>{singleArticle.title}</h1>
      <img
        src={singleArticle.imageUrl}
        alt={singleArticle.title}
      />
      <p>
        {singleArticle.body}
      </p>
      {/*!!END */}
      {/*!!ADD */}
      {/* <h1>Why Am I At Home</h1> */}
      {/* <img */}
        {/* src='https://thumbor.forbes.com/thumbor/960x0/https%3A%2F%2Fblogs-images.forbes.com%2Frobcain%2Ffiles%2F2017%2F10%2FKevin-Home-Alone.jpg' */}
        {/* alt='home' */}
      {/* /> */}
      {/* <p> */}
        {/* Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex esse */}
        {/* laboriosam officia accusantium veritatis fugiat exercitationem vero */}
        {/* autem nihil aliquid ullam recusandae, quis odit odio voluptates */}
        {/* explicabo nobis! Consequuntur, aliquam? */}
      {/* </p> */}
      {/*!!END_ADD */}
    </div>
  );
};

export default SingleArticle;
