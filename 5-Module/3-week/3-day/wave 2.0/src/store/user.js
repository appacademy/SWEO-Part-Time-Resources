const ADD_USER = 'user/add'


// action
export const addUser = (payload) => {
	return {
		type: ADD_USER,
		payload
	}
}

const initialState = {
	'firstName' : '',
	'lastName' : '',
	'username' : ''
}

const userReducer = (state = initialState, action) => {
	let newState = {...state}

	switch(action.type){
		case ADD_USER:
			newState.firstName = action.payload.firstName
			newState.lastName = action.payload.lastName
			newState.username = action.payload.username
			return newState
		default:
			return newState
	}

}

export default userReducer;
