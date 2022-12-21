// import articles from '../data/data.json';

const LOAD_ARTICLES = 'article/loadArticles';
const ADD_ARTICLE = 'article/addArticle';

export const loadArticles = (articles) => {
  return {
    type: LOAD_ARTICLES,
    articles
  };
};

export const addArticle = (article) => {
  return {
    type: ADD_ARTICLE,
    article
  };
};

export const fetchArticles = () => async (dispatch) => {
  const res = await fetch(`/api/articles`);
  // console.log("RES HERE", res)
  if (res.ok) {
    const articles = await res.json();
    // console.log("ARTICLES HERE", articles)
    return dispatch(loadArticles(articles));
  }
}

export const writeArticle = (payload) => async (dispatch) => {
  console.log("PAYLOAD HERE", payload)
  const res = await fetch('/api/articles', {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload)
  });
  console.log("RES HERE", res)
  if (res.ok) {
    const newArticle = await res.json();
    console.log(newArticle)
    return dispatch(addArticle(newArticle))
  }
}

const initialState = { entries: [], isLoading: true };

const articleReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_ARTICLES:
      return { ...state, entries: [...action.articles] };
    case ADD_ARTICLE:
      return { ...state, entries: [...state.entries, action.article] };
    default:
      return state;
  }
};

export default articleReducer;