import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import CreateRecipeForm from './components/RecipeCreate+Edit/RecipeCreateForm';
// import EditRecipeForm from '../../RecipeEditForm';
import RecipePage from './components/RecipePage/RecipePage';


function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/new-recipe">
          <CreateRecipeForm />
        </Route>
        <Route path='/recipes/:recipeId' >
          <RecipePage/>
        </Route>
        <Route path="/edit-recipe/:recipeId">
          <EditRecipeForm/>
        </Route>
        <Route>
          Page Not Found
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
