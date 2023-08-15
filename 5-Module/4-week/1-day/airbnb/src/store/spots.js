// constants
const LOAD_SPOTS = "users/LOAD_SPOTS"
// ACTION
export const loadSpots = (payload) => ({
	type: LOAD_SPOTS,
	payload
})


const initialState = {}

const spotsReducer = (state = initialState, action) => {
	const newState = { ...state }
	switch (action.type) {
		case LOAD_SPOTS:
			return {...newState, ...action.payload }
		default:
			return newState
	}
}

export default spotsReducer;
