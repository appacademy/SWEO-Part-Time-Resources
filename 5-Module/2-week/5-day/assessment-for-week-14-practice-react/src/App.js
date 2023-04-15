import { Switch, Route } from 'react-router-dom';
import FruitForm from "./components/FruitForm";
import FruitsIndex from "./components/FruitsIndex";
import FruitShow from "./components/FruitShow";
import FavoriteFruit from "./components/FavoriteFruit";
import SetFavoriteFruit from "./components/SetFavoriteFruit";
import Navigation from "./components/Navigation";

import fruits from "./mockData/fruits.json";

function App() {

  return (
    <>
      <h1>Welcome to Fruits App</h1>

      <Navigation />
      <Switch>
        <Route path="/" exact>
          <FruitsIndex fruits={fruits} />
        </Route>
        <Route path="/fav-fruit">
          <FavoriteFruit fruits={fruits} />
        </Route>
        <Route path="/set-fav-fruit">
          <SetFavoriteFruit fruits={fruits} />
        </Route>
        <Route path="/fruits/new">
          <FruitForm fruits={fruits}/>
        </Route>
        <Route path="/fruits/:fruitId">
          <FruitShow fruits={fruits} />
        </Route>
        <Route>
          <h2>Page Not Found</h2>
        </Route>
      </Switch>

    </>
  );
}

export default App;
