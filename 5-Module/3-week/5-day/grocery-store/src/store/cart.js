import { createSelector } from 'reselect';
import { selectProduce } from './produce';

const ADD_ITEM = 'cart/ADD_ITEM';
const REMOVE_ITEM = 'cart/REMOVE_ITEM';
const UPDATE_COUNT = 'cart/UPDATE_COUNT';
const RESET = 'cart/RESET';

/* ----- ACTIONS ------ */
export const addItem = (itemId) => {
  return {
    type: ADD_ITEM,
    itemId
  };
};

export const updateCount = (itemId, count) => {
  if (count < 1) return removeItem(itemId);
  return {
    type: UPDATE_COUNT,
    itemId,
    count
  };
};

export const removeItem = (itemId) => {
  return {
    type: REMOVE_ITEM,
    itemId
  };
};

export const reset = () => {
  return {
    type: RESET
  };
};

/* ------ SELECTORS ------ */
const selectCartItems = state => state.cart;
export const selectAllCartItems = createSelector(selectCartItems, selectProduce, (cart, produce) => {
  return Object.values(cart.order).map((id) => {
    return {
      ...cart.items[id],
      ...produce[id],
    };
  });
});

export const selectCartItemById = (id) => (state) => state.cart.items[id];

export const selectCartOrder = (state) => state.cart.order;

/* ------ REDUCER ------ */
const initialState = {
  items: {},
  order: []
};

export default function cartReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_ITEM:
      return {
        ...state,
        items: {
          ...state.items,
          [action.itemId]: {
            id: action.itemId,
            count: 1,
          },
        },
        order: [...state.order, action.itemId],
      };
    case UPDATE_COUNT:
      return {
        ...state,
        items: {
          ...state.items,
          [action.itemId]: {
            ...state[action.itemId],
            count: action.count,
          },
        },
      };
    case REMOVE_ITEM: {
      const newState = { ...state, items: { ...state.items } };
      delete newState.items[action.itemId];
      newState.order = newState.order.filter(id => id !== action.itemId);
      return newState;
    }
    case RESET:
      return initialState;
    default:
      return state;
  }
}
