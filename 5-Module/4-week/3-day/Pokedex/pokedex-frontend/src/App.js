import { Route, Switch } from "react-router-dom";

import PokemonBrowser from "./components/PokemonBrowser";

const App = () => {
  return (
    <Switch>
      <Route
        path={["/", "/pokemon", "/pokemon/:pokemonId"]}
        exact
      >
        <PokemonBrowser />
      </Route>
    </Switch>
  );
};

export default App;
