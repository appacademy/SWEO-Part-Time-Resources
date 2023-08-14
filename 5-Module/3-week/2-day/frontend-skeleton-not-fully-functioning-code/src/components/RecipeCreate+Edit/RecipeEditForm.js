import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateRecipe } from '../../store/recipe';
import { Redirect, useHistory, useParams } from 'react-router-dom';
import './index.css';

function EditRecipeForm() {
    const { recipeId } = useParams();
    const dispatch = useDispatch();
    const history = useHistory();

    const loggedInUser = useSelector(state => state.user);

    if (!loggedInUser?.id) return (
      <Redirect to='/'/>
    )
    
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
      (async() => {
          await dispatch(getSingleRecipe(recipeId));
          setLoaded(true);
      })();
  }, [dispatch]);

    const pie = useSelector(state => state.recipe[recipeId])

    const [chefName, setChefName] = useState(pie?.chefName);
    const [ingredients, setIngredients] = useState(pie?.ingredients);
    const [pieName, setPieName] = useState(pie?.pieName);
    const [cookTime, setCookTime] = useState(pie?.cookTime);

    const [errors, setErrors] = useState(false);


    const handleSubmit = (e) => {
        e.preventDefault();
        
        if (errors) {
            setShowErrors(true);
          }
      
          if (!errors) {
        
        let recipe = {
            chefName,
            ingredients,
            pieName,
            cookTime
        };
        
        history.push("/");
        

        return dispatch(updateRecipe(recipe))
        }
    }

    return (
      <>
        {loaded && (<form className="edit-recipe-form" onSubmit={handleSubmit}>
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
            <button className="edit-recipe-btn" type="submit">Edit Recipe</button>
            <button className="cancel-recipe-btn"type="button">Cancel</button>
        </form>)}
        </>
    )
};

export default EditRecipeForm;