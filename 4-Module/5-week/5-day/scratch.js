//Regular action creator

function addFruit(fruit) {
    return {
        type: ADD_FRUIT,
        fruit
    }
}


//Thunky action creator

function thunkBoi() {
    return function theRealThunk(dispatch) {
        
    }
}

const thunkBoi = () => (dispatch) => {

}