const ADD_MEMBER = 'member/add'
const DELETE_MEMBER = 'member/delete'

//action
export const addMember = (payload) => {
	return {
		type: ADD_MEMBER,
		payload
	}
}

export const deleteMember = (id) => {
	return {
		type: DELETE_MEMBER,
		payload: id
	}
}

const initialState = {
	'members': {},
	'groupId' : '',
	'name' : ''
}

const groupsReducer = (state = initialState, action) => {
	let newState = {...state}

	switch(action.type){
		case ADD_MEMBER:
			newState.members = {
				...state.members,
				[action.payload.id] : action.payload
			}
			return newState
		case DELETE_MEMBER:
			newState.members = {...state.members}
			delete newState.members[action.payload]
			return newState
		default:
			return newState
	}
}

export default groupsReducer;
