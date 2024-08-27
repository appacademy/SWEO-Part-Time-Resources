// import articles from '../data/data.json';

const LOAD_ARTICLES = 'article/loadArticles';

export const loadDogs = (dogs) => {
  return {
    type: LOAD_ARTICLES,
    dogs
  };
};

export const loadBreeds = (breed) => async dispatch => {
  console.log('dogs')
  // actually would be making a fetch to a route in your backend
  let res = await fetch(`https://dog.ceo/api/breed/${breed}/images`)
  if(res.ok){
    res = await res.json()
    dispatch(loadDogs(res.message))
    return res
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
