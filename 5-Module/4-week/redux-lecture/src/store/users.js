// constants
const LOAD_USER_EMAIL = 'users/LOAD_USER_EMAIL'
const LOAD_USER_PASSWORD = 'users/LOAD_USER_PASSWORD'
const LOAD_USER_USERNAME = 'users/LOAD_USER_USERNAME'

// Actions
export const loadUserEmail = (payload) => ({
	type: LOAD_USER_EMAIL,
	payload
})

export const loadUserPassword = (payload) => ({
	type: LOAD_USER_PASSWORD,
	payload
})

export const loadUserUsername= (payload) => ({
	type: LOAD_USER_USERNAME,
	payload
})

// thunks

// initial state

const initialState = {}

// reducer
const usersReducer = (state = initialState, action) => {
	const newState = { ...state }

	switch (action.type) {
		case LOAD_USER_EMAIL:
			newState['email'] = action.payload
			return newState
		case LOAD_USER_PASSWORD:
			newState['password'] = action.payload
			return newState
		case LOAD_USER_USERNAME:
			newState['username'] = action.payload
			return newState
		default:
			return newState
	}
}


export default usersReducer;
