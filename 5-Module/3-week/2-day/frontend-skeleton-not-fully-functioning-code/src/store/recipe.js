// actions + constants + reducer 

// CONSTANTS 
const SINGLE_RECIPE = "GET_SINGLE_RECIPE";
const CREATE_RECIPE = "CREATE_RECIPE";
const UPDATE_RECIPE = "UPDATE_RECIPE";
const DELETE_RECIPE = "DELETE_RECIPE";


// ACTIONS
export const getSingleRecipe = (recipeId) => {
    return {
        type: SINGLE_RECIPE,
        recipeId
    };
};

export const addRecipe = (recipe) => {
    return {
        type: CREATE_RECIPE,
        recipe
    }
};

export const updateRecipe = (recipe, recipeId) => {
    return {
        type: UPDATE_RECIPE,
        recipe,
        recipeId
    }
};

export const deleteRecipe = (recipeId) => {
    return {
        type: DELETE_RECIPE,
        recipeId
    }
};



const intialState = {recipes: 
    {1: {
            id: 1,
            chefName: "Kate",
            ingredients: "pumpkin, concentrated milk, pie crust, nutmeg, etc",
            pieName: "Pumpkin",
            cookTime: "40 minutes",
        }}};

export default function recipeReducer(state = intialState, action){
    let newState = {...state};

    switch(action.type){
        case SINGLE_RECIPE:
            newState[action.recipeId] = action.recipe;
            return newState;
        case CREATE_RECIPE:
            newState[action.recipe.id] = action.recipe;
            return newState;
        case UPDATE_RECIPE:
            newState[action.recipeId] = action.recipe;
            return  newState;
        case DELETE_RECIPE:
            delete newState[action.recipeId]
            return newState;
        default:
            return state;
    }
}


// recipe: {
//     1: {
//         id: 1,
//         pieName: "Pumpkin",
//         cookTime: 40 minutes
//     }
// }