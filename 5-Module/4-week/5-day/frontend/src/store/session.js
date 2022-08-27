import {csrfFetch} from './csrf'
const USER_LOAD = 'user/load'
const USER_REMOVE = 'user/remove'
const loadUser = (user) => {
    return {
        type: USER_LOAD,
        payload : user
    }
}

export const removeUser = () => {
    return {
        type : USER_REMOVE,
        payload : null
    }
}
export const restoreUserThunk = () => async dispatch => {
    let resUser = await csrfFetch('/api/session')
    const {user} = await resUser.json()
    if(user){
        dispatch(loadUser(user))
    }
}
export const loginThunk = (user) => async dispatch => {
    let newUser = await csrfFetch('/api/session', {
        method : 'POST',
        body : JSON.stringify(user)
    })
    if(newUser.ok){
        const {user} = await newUser.json()
        dispatch(loadUser(user))
    }
}

export const signUpThunk = (user) => async dispatch => {
    let newUser = await csrfFetch('/api/users', {
        method : "POST",
        body : JSON.stringify(user)
    })
    if(newUser.ok){
        const {user} = await newUser.json()
        dispatch(loadUser(user))
    }
}

export const logOutThunk = () => async dispatch => {
    await csrfFetch('/api/session', {
        method : 'DELETE'
    })
    dispatch(removeUser())
}

const sessionReducer = (state=null, action) => {
    switch(action.type){
        case USER_LOAD:
            return {...state, ...action.payload}
        case USER_REMOVE:
            return null
        default:
            return state
    }
}

export default sessionReducer