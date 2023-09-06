import { loadImages } from "./images";
import { loadPeople } from "./people";

// constants
const LOAD_OBJECTS = 'objects/LOAD_OBJECTS'

// Actions
export const loadObjects = (payload) => ({
	type: LOAD_OBJECTS,
	payload
})

// thunks action
export const fetchObjects = () => async (dispatch) => {
	const url = 'https://api.harvardartmuseums.org/object?q=totalpageviews:0&size=10&apikey=749247cf-db67-4567-bb9d-13081d1e16b8';
	const options = {
		method: 'GET',
		headers: {
			'Content-Type': 'application/json',
		}
	};

	try {
		const response = await fetch(url, options);
		const result = await response.json();

		const objectsData = {
			'0': result['records']['0'].primaryimageurl,
			'1': result['records']['1'].primaryimageurl,
		}

		dispatch(loadObjects(objectsData))
		dispatch(loadPeople(result['records']['0']['people']))
		dispatch(loadImages(result['records']['0']['images']))

	} catch (error) {
		console.error(error);
	}
}

// initial state

const initialState = {}

// reducer
const objectsReducer = (state = initialState, action) => {
	let newState = { ...state }

	switch (action.type) {
		case LOAD_OBJECTS:
			newState = { ...newState, ...action.payload }
			return newState
		default:
			return newState
	}
}


export default objectsReducer;
