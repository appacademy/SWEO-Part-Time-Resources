import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { Route, Switch, NavLink } from "react-router-dom";
import SingleArticle from "../SingleArticle";

import { loadArticles } from "../../store/articleReducer";

const ArticleList = () => {
  const dispatch = useDispatch();

  const articles = useSelector((state) => state.articleState.entries);


  useEffect(() => {
    dispatch(loadArticles());
  }, [dispatch]);

  return (
    <div>
      <h1>Article List</h1>
      <ol>
        {articles &&
          articles.map(({ id, title }) => (
            <li key={id}>
              <NavLink to={`/article/${id}`}>{title}</NavLink>
            </li>
          )) || <div>loading...</div>}
      </ol>

      <Switch>
        <Route path="/article/:id">
          <SingleArticle articles={articles}/>
        </Route>
      </Switch>
    </div>
  );
};

export default ArticleList;
