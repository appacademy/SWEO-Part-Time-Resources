import { Switch, Route } from 'react-router-dom';

import NavBar from './Components/NavBar';
import Home from './Components/Home';
import UseEffect from './Components/UseEffect';
import UseState from './Components/UseState';

function App() {
  return (
    <div>
      <NavBar />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/useState">
          <UseState />
        </Route>
        <Route path="/useEffect">
          <UseEffect />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
