import RandomUser from './RandomUser';
import Unmounted from './Unmounted';

import { Route, Switch } from 'react-router-dom';

function App() {
  return (
    <>
      <Switch>
        <Route exact path='/'>
          <Unmounted />
        </Route>
        <Route path='/mount'>
          <RandomUser />
        </Route>
      </Switch>
    </>
  );
}
export default App;
