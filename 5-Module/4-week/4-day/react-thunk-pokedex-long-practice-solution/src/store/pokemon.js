import { LOAD_ITEMS, REMOVE_ITEM, ADD_ITEM } from './items';
import { ValidationError } from '../utils/validationError';

const LOAD = 'pokemon/LOAD';
const LOAD_TYPES = 'pokemon/LOAD_TYPES';
const ADD_ONE = 'pokemon/ADD_ONE';

const load = list => ({
  type: LOAD,
  list
});

const loadTypes = types => ({
  type: LOAD_TYPES,
  types
});

const addOnePokemon = pokemon => ({
  type: ADD_ONE,
  pokemon
});

export const getPokemon = () => async dispatch => {
  const response = await fetch(`/api/pokemon`);

  if (response.ok) {
    const list = await response.json();
    dispatch(load(list));
  }
};

export const getPokemonTypes = () => async dispatch => {
  const response = await fetch(`/api/pokemon/types`);

  if (response.ok) {
    const types = await response.json();
    dispatch(loadTypes(types));
  }
};

export const getOnePokemon = id => async dispatch => {
  const response = await fetch(`/api/pokemon/${id}`);

  if (response.ok) {
    const pokemon = await response.json();
    dispatch(addOnePokemon(pokemon));
  }
};

export const createPokemon = data => async dispatch => {
  try {
    const response = await fetch(`/api/pokemon`, {
      method: 'post',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    });

    if (!response.ok) {
      let error;
      if (response.status === 422) {
        error = await response.json();
        throw new ValidationError(error.errors, response.statusText);
      } 
      else {
        let errorJSON;
        error = await response.text();
        try {
          // Check if the error is JSON, i.e., from the Pokemon server. If so,
          // don't throw error yet or it will be caught by the following catch
          errorJSON = JSON.parse(error);
        }
        catch {
          // Case if server could not be reached
          throw new Error(error);
        }
        throw new Error(`${errorJSON.title}: ${errorJSON.message}`);
      }
    } 

    const pokemon = await response.json();
    dispatch(addOnePokemon(pokemon));
    return pokemon;
  } 
  catch (error) {
    throw error;
  }
};

export const updatePokemon = data => async dispatch => {
  const response = await fetch(`/api/pokemon/${data.id}`, {
    method: 'put',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  });
  
  if (response.ok) {
    const pokemon = await response.json();
    dispatch(addOnePokemon(pokemon));
    return pokemon;
  }
};

const initialState = {
  list: [],
  types: []
};

const sortList = (list) => {
  return list.sort((pokemonA, pokemonB) => {
    return pokemonA.number - pokemonB.number;
  }).map((pokemon) => pokemon.id);
};

const pokemonReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD: 
      const allPokemon = {};
      action.list.forEach(pokemon => {
        allPokemon[pokemon.id] = pokemon;
      });
      return {
        ...allPokemon,
        ...state,
        list: sortList(action.list)
      };
    case LOAD_TYPES: 
      return {
        ...state,
        types: action.types
      };
    case ADD_ONE: 
      if (!state[action.pokemon.id]) {
        const newState = {
          ...state,
          [action.pokemon.id]: action.pokemon
        };
        const pokemonList = newState.list.map(id => newState[id]);
        pokemonList.push(action.pokemon);
        newState.list = sortList(pokemonList);
        return newState;
      }
      return {
        ...state,
        [action.pokemon.id]: {
          ...state[action.pokemon.id],
          ...action.pokemon
        }
      };
    case LOAD_ITEMS: 
      return {
        ...state,
        [action.pokemonId]: {
          ...state[action.pokemonId],
          items: action.items.map(item => item.id)
        }
      };
    case REMOVE_ITEM:
      return {
        ...state,
        [action.pokemonId]: {
          ...state[action.pokemonId],
          items: state[action.pokemonId].items.filter(
            (itemId) => itemId !== action.itemId
          )
        }
      };
    case ADD_ITEM:
      console.log(action.item);
      return {
        ...state,
        [action.item.pokemonId]: {
          ...state[action.item.pokemonId],
          items: [...state[action.item.pokemonId].items, action.item.id]
        }
      };
    default:
      return state;
  }
}

export default pokemonReducer;