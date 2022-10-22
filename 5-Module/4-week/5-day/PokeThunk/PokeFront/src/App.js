import { Route, Switch } from 'react-router-dom';
import Dev from './components/Dev';

import PokemonBrowser from './components/PokemonBrowser';

const App = () => {
    return (
        <Switch>
            <Route path={['/', '/pokemon', '/pokemon/:pokemonId']} exact>
                <PokemonBrowser />
            </Route>
            <Route path="/dev" exact>
                <Dev />
            </Route>
        </Switch>
    );
};

export default App;
