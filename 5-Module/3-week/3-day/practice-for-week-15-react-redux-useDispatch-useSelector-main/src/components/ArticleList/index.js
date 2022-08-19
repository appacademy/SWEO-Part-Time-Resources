import { Route, Switch, NavLink} from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import {loadArticles} from '../../store/articleReducer'
import SingleArticle from '../SingleArticle';

const ArticleList = () => {
  const dispatch = useDispatch()
  const articles = useSelector((state) => state.articleState.entries)
  console.log(articles)
  useEffect(() => {
    dispatch(loadArticles())
  },[])

  return (
    <div>
      <h1>Article List</h1>
      <ol>
        {
          articles.map(article => {
            return (
              <li key={article.id}>
                <NavLink to={`/articles/${article.id}`}>
                  {article.title}
                </NavLink>
              </li>
            )
          })
        }
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