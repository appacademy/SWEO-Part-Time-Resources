// constants
const LOAD_IMAGES = 'images/LOAD_IMAGES'

// Actions
export const loadImages = (payload) => ({
	type: LOAD_IMAGES,
	payload
})

// thunks

// initial state

const initialState = {}

// reducer
const imagesReducer = (state = initialState, action) => {
	let newState = { ...state }

	switch (action.type) {
		case LOAD_IMAGES:
			newState = { ...newState, ...action.payload }
			return newState
		default:
			return newState
	}
}


export default imagesReducer;
