const ADD_TRACK = 'track/add';
const DELETE_TRACK = 'track/delete';

const initialState = {
	'tracks' : {},
	'albums' : {},
	'artist' : {}
}



export const addTrack = (track) => {
	return {
		type: ADD_TRACK,
		payload: track
	}
}

export const deleteTrack = (id) => {
	return {
		type: DELETE_TRACK,
		payload: id
	}
}


// reducer
const songReducer = (state = initialState, action) => {

	let newState = {...state}

	switch(action.type){
		case ADD_TRACK:
			newState.tracks = {
				...state.tracks,
				[action.payload.id] : action.payload
			}
			return newState;
		case DELETE_TRACK:
			newState.tracks = {...state.tracks}
			delete newState.tracks[action.payload]
			return newState
		default:
			return newState
	}

}


export default songReducer;
