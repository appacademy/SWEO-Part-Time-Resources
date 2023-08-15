import { loadSpots } from "./spots"

// constants
const LOAD_USER = "users/LOAD_USER"
const LOAD_CREDENTIAL = "users/LOAD_CREDENTIAL"
const LOAD_PASSWORD = "users/LOAD_PASSWORD"

// ACTION
export const loadUser = (payload) => ({
	type: LOAD_USER,
	payload
})

export const loadCredential = (payload) => ({
	type: LOAD_CREDENTIAL,
	payload
})

export const loadPassword = (payload) => ({
	type: LOAD_PASSWORD,
	payload
})

// THUNK ACTION CREATER
export const fetchUserSpots = (payload) => async (dispatch) => {
	const responseObj = {
		'username': payload.username,
		'email': payload.email
	}

	dispatch(loadUser(responseObj))

	const spotsPayload = {...payload.spots}

	dispatch(loadSpots(spotsPayload))
}



const initialState = {}

const usersReducer = (state = initialState, action) => {
	const newState = { ...state }
	switch (action.type) {
		case LOAD_USER:
			return { ...action.payload }
		case LOAD_PASSWORD:
			newState['current_password'] = action.payload
			return newState
		case LOAD_CREDENTIAL:
			newState['current_credential'] = action.payload
			return newState
		default:
			return newState
	}
}

export default usersReducer;
