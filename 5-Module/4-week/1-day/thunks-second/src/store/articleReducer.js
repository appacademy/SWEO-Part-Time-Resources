// import articles from '../data/data.json';

const LOAD_ARTICLES = 'article/loadArticles';

export const loadArticles = (dogs) => {
  return {
    type: LOAD_ARTICLES,
    dogs
  };
};

export const loadDogImages = (breed) => async dispatch => {
  let res = await fetch(`https://dog.ceo/api/breed/${breed}/images`)
  if(res.ok){
    res = await res.json()
    dispatch(loadArticles(res.message))
  }
}



const initialState = { dogs: [], isLoading: true };

const dogReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_ARTICLES:
      return { ...state, dogs: [...action.dogs] };
    default:
      return state;
  }
};

export default dogReducer;
