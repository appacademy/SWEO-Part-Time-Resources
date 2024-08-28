import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { fetchArticles, selectArticlesArray } from '../../store/articleReducer';

const ArticleList = () => {
  const dispatch = useDispatch();
  // const articles = useSelector(state=>state.articleState.entries);
  // const articles = useSelector(state => Object.values(state.articleState.entries))

  const articles = useSelector(selectArticlesArray)

  
  useEffect(() => {
    dispatch(fetchArticles());
  }, [dispatch]);

  return (
    <div>
      <h1>Article List</h1>
      <ol>
        {articles && articles.map(({ id, title }) => (
          <li key={id}><NavLink to={`${id}`}>{title}</NavLink></li>
        ))}
      </ol>
    </div>
  );
};

export default ArticleList;
