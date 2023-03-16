//!!START SILENT
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Route, Switch, NavLink } from 'react-router-dom';
//!!END
//!!ADD
// import { Route, Switch } from 'react-router-dom';
//!!END_ADD
import SingleArticle from '../SingleArticle';
//!!START SILENT
import { loadArticles } from '../../store/articleReducer';
//!!END

const ArticleList = () => {
  //!!START SILENT
  const dispatch = useDispatch();
  const articles = useSelector(state=>state.articleState.entries);

  useEffect(() => {
    dispatch(loadArticles());
  }, [dispatch]);

  //!!END
  return (
    <div>
      <h1>Article List</h1>
      <ol>
        {/*!!ADD */}
        {/* <li>Gilligan's Island. Is it true?</li> */}
        {/* <li>A Baseball Moment</li> */}
        {/* <li>Poke Moment</li> */}
        {/* <li>Cool Cats</li> */}
        {/* <li>Why Am I At Home</li> */}
        {/*!!END_ADD */}
        {/*!!START SILENT */}
        {articles.map(({ id, title }) => (
          <li key={id}><NavLink to={`/article/${id}`}>{title}</NavLink></li>
        ))}
        {/*!!END */}
      </ol>

      <Switch>
        <Route path='/article/:id'>
          <SingleArticle />
        </Route>
      </Switch>
    </div>
  );
};

export default ArticleList;
