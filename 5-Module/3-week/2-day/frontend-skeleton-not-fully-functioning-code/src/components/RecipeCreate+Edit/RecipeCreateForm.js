import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addRecipe } from '../../store/recipe';
import { Redirect, useHistory } from 'react-router-dom';
import './index.css';

function CreateRecipeForm() {
    const dispatch = useDispatch();
    const history = useHistory();

    const loggedInUser = useSelector(state => state.user);
    const [errors, setErrors] = useState(false);

    const [chefName, setChefName] = useState("");
    const [ingredients, setIngredients] = useState("");
    const [pieName, setPieName] = useState("");
    const [cookTime, setCookTime] = useState("");

       
    if (!loggedInUser?.id) return (
        <Redirect to='/'/>
      )

    const handleSubmit = (e) => {
        e.preventDefault();
      
          if (!errors) {
        
        let recipe = {
            chefName,
            ingredients,
            pieName,
            cookTime
        };
        
        history.push("/");
        

        return dispatch(addRecipe(recipe))

        }
    }

    return (
        <form className="create-recipe-form" onSubmit={handleSubmit}>
            <div className='recipe-input-div'>
                <label>
                    Chef Name: 
                    <input
                        type="text"
                        className='recipe-input'
                        value={chefName}
                        onChange={(e) => setChefName(e.target.value)} 
                        required />
                </label>
                <label>
                    Ingredients: 
                    <input
                        type="text"
                        className='recipe-input'
                        value={ingredients}
                        onChange={(e) => setIngredients(e.target.value)} 
                        required />
                </label>
                <label>
                    Pie Name: 
                    <input
                        type="text"
                        className='recipe-input'
                        value={pieName}
                        onChange={(e) => setPieName(e.target.value)} 
                        required />
                </label>
                <label>
                    Cook Time: 
                    <input
                        type="text"
                        className='recipe-input'
                        value={cookTime}
                        onChange={(e) => setCookTime(e.target.value)} 
                        required />
                </label>
            </div>
            <button className="create-recipe-btn" type="submit">Edit Recipe</button>
            <button className="cancel-recipe-btn"type="button">Cancel</button>
        </form>
    )
};

export default CreateRecipeForm;