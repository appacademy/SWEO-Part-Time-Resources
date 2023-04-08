import { Switch, Route } from 'react-router-dom';
import Cat from './Cat';
import Home from './Home';

function App() {
  return (
    <>
      <Switch>
        <Route exact path='/'>
          <Home />
        </Route>
        <Route path='/cat'>
          <Cat />
        </Route>
      </Switch>
    </>
  );
}

export default App;
