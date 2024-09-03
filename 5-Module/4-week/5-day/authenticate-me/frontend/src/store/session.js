import { csrfFetch } from "./csrf";

const ADD_USER = "session/addUser";
const REMOVE_USER = "session/removeUser";

const addUser = (payload) => ({
  type: ADD_USER,
  payload,
});

export const removeUser = () => ({
  type: REMOVE_USER,
});

export const login =
  ({ credential, password }) =>
  async (dispatch) => {
    let res = await csrfFetch("/api/session", {
      method: "POST",
      body: JSON.stringify({ credential, password }),
    });

    if (res.ok) {
      res = await res.json();
      dispatch(addUser(res));
      return res;
    }
  };

export const restoreUser = () => async (dispatch) => {
  let res = await csrfFetch("/api/session");
  if (res.ok) {
    res = await res.json();
    dispatch(addUser(res));
    return res;
  }
};

export const signUp =
  ({ email, username, password }) =>
  async (dispatch) => {
    let res = await csrfFetch("/api/users", {
      method: "POST",
      body: JSON.stringify({ email, username, password }),
    });

    if (res.ok) {
      res = await res.json();
      console.log(res)
      dispatch(addUser(res));
      return res;
    }
  };

export const logout = () => async dispatch => {
  let res = await csrfFetch('/api/session',{
    method: 'DELETE'
  })
  dispatch(removeUser())
  res = await res.json()
  return res
}
const initialState = { user: null };

const session = (state = initialState, action) => {
  switch (action.type) {
    case ADD_USER: {
      const newState = { ...state };
      newState.user = action.payload;
      return newState;
    }
    case REMOVE_USER: {
      return { user: null };
    }
    default:
      return state;
  }
};

export default session;
