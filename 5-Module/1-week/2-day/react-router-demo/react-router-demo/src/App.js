import NavBar from "./NavBar";
import { Route, Switch, Redirect, useHistory } from 'react-router-dom';

function App() {
  const history = useHistory();

  let isAdmin = '';
  const permission = true;
  if (permission) {
    isAdmin = <Redirect to="/" />
  } else {
    isAdmin = <h1>You Must be Logged In</h1>
  }

  return (
    <>
      <NavBar />
      <button onClick={ () => history.push('/stonks/404') }>Add History</button>
      <button onClick={ () => history.replace('/stonks/404') }>Replace History</button>
      <Switch>
        <Route path="/stonks/:id">
          <h1>Stonks Page</h1>
        </Route>
        <Route path="/login">
          {isAdmin}
        </Route>
        <Route path="/stonks">
          <h1>Stonks Page</h1>
        </Route>
        <Route path="/">
          <h1>Home Page</h1>
        </Route>
      </Switch>
    </>
  );
}

export default App;
