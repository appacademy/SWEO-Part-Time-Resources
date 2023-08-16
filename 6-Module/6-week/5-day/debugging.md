# Debugging your Application

### Here's a simple example of how to debug the flow of your data in 9 steps

## Component

```Javascript
import React from 'react';
import { useDispatch } from 'react-redux';
import { fetchServerData } from './redux/actions';

const MyComponent = () => {

    console.log("1: I'm in the right component.")

const dispatch = useDispatch();

  const handleClick = () => {

    console.log("2: I'm in the handleClick function.")

    let dataForThunk = "Data needed such as userId or form data"

    console.log("3: If I need to send anything to my thunk, I'm sending the right info", dataForThunk)

    dispatch(fetchServerData(dataForThunk));
  };

  return (
    <div>
      <button onClick={handleClick}>Fetch Data</button>
    </div>
  );
};

export default MyComponent;
```

## Thunk in my store

```Javascript
import { updateData } from './actions';

export const fetchServerData = (dataFromComponent) => async (dispatch) => {

    console.log("4: I'm in the right thunk.  If applicable, I received the correct info", dataFromComponent)

    try {

      const response = await fetch('api/data');

      const data = await response.json();

     console.log("8: The data from my server looks good: ", data)

      dispatch(updateData(data));

    } catch (error) {

      console.log('Error fetching server data:', error);
    }
};

```

## Server

```Python
from flask import Flask, jsonify, Blueprint

data_bp = Blueprint('data_bp', __name__)

@data_bp.route('/api/data', methods=['GET'])
def get_data():

    print("5: I made it to the correct route")

    data_from_thunk = request.json

    print("6: I have the correct info from my thunk:", data_from_thunk)

    data = Data.query.all()
    data_list = [{'name': d.name, 'age': d.age} for d in data]

    print("7: I'm sending the correct info back to my thunk:", data_list)

    return jsonify(data_list)

```

## Reducer

```Javascript
const initialState = {
  serverData: null,
};

// Reducer
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_DATA:

      console.log("9: I could check in my action too, but I also want to see that my reducer has the correct info", action.payload)

      return {
        ...state,
        serverData: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;
```
