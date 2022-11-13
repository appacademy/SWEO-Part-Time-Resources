const GET_FRUITS = 'fruit/GET_FRUITS';

/* 
an ACTION is just a POJO, a plain old JS object
that returns a type and an optional payload.
You dispatch an action from inside your component using an action creator
e.g. dispatch(getFruits())
*/

// this is the action object that is  created when it is dispatched in the component
// const action = {
//   type: GET_FRUITS,
//   fruits: fruits
// };

export const getFruits = () => {
  return {
    type: GET_FRUITS,
    fruits
  };
};

const fruits = [{ 1: 'banana', 2: 'pear', 3: 'orange', 4: 'peach' }];

const initialState = { fruits: [], maxNumFruits: 20 };

const fruitReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_FRUITS:
      return { ...state, fruits: [...action.fruits] };
    default:
      return state;
  }
};

export default fruitReducer;
