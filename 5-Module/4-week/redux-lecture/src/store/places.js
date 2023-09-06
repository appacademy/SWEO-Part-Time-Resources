// constants
const LOAD_PLACES = 'stores/LOAD_PLACES'

// Actions
export const loadPlaces = (payload) => ({
	type: LOAD_PLACES,
	payload
})

// thunks

// initial state

const initialState = {
	0: { "id": 1, "location": "la" },
	1: { "id": 2, "location": "sf" },
	2: { "id": 3, "location": "nyc" },
}

// reducer
const placesReducer = (state = initialState, action) => {
	let newState = { ...state }

	switch (action.type) {
		case LOAD_PLACES:
			newState = { ...newState, ...action.payload }
			return newState
		default:
			return newState
	}
}


export default placesReducer;
