// constants
const LOAD_PEOPLE = 'people/LOAD_PEOPLE'

// Actions
export const loadPeople = (payload) => ({
	type: LOAD_PEOPLE,
	payload
})

// thunks

// initial state

const initialState = {}

// reducer
const peopleReducer = (state = initialState, action) => {
	let newState = { ...state }

	switch (action.type) {
		case LOAD_PEOPLE:
			newState = { ...newState, ...action.payload }
			return newState
		default:
			return newState
	}
}


export default peopleReducer;
