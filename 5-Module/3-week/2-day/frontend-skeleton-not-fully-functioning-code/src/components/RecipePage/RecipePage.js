import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, useHistory } from "react-router-dom";
import { getSingleRecipe, deleteRecipe } from "../../store/recipe";

import './index.css';

function RecipePage() {
  const { recipeId } = useParams();
  const recipe = useSelector((state) => state.recipe[recipeId]);
  const loggedInUser = useSelector(state => state.user);
  const dispatch = useDispatch();
  const history = useHistory();

  useEffect(() => {
    (async() => {
      const res = await dispatch(getSingleRecipe(recipeId));
      if (res.status === 404){
        history.push('/404')
      }
    })();
  }, [dispatch]);

  return (
    <div className="full-page-full-recipe-div">
      <div className="full-page-recipe-div">
        <div className="image-side">
          <div
            className="full-page-recipe-img-div"
            style={{ backgroundImage: `url('${recipe?.imageUrl}')` }}
          ></div>
        </div>
        <div className="info-side">
          <div className="full-page-recipe-main-info">
            <p className="full-page-recipe-name">{recipe?.pieName}</p>
            <div>
              <p className="full-page-recipe-chef">{recipe?.chefName}</p>
            </div>
            <p className="full-page-recipe-cookTime">{recipe?.cookTime}</p>
          </div>
          <div className="full-page-recipe-ingredients-div">
            <p className="full-page-recipe-ingredients">{recipe?.ingredients}</p>
          </div>
          <div>
            {loggedInUser?.username === recipe?.chefName &&
            <button className='delete-btn' onClick={async () => await dispatch(deleteRecipe(recipeId)).then(() => {history.push(`/`)})}>Delete Recipe</button>
            }
            </div>
        </div>
      </div>
    </div>
  );
}

export default RecipePage;