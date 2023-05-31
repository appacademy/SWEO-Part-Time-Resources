import React from "react";
import { useHistory, Redirect, Switch, Route, Link, NavLink, useParams } from 'react-router-dom';
import TestComp from "./TestComp";

function App() {
  const history = useHistory();
  console.log(history);

  const { userId } = useParams();
  let redirect = '';

  if (false) {
    redirect = <Redirect to="/" />
  } else {
    <TestComp />
  }

  return (
    <>
      <h1>Hello from User Profile {userId}!</h1>
      {/* <Link to={"/"}>Home</Link>
      <Link to={`/test`}>TestComp</Link> */}
      <button onClick={ () => history.replace('/') }>Go Home</button>

      <NavLink
        to={'/test/53'}
        exact
        activeClassName="active"
      >Test 2</NavLink>
      <NavLink
        to={'/test'}
        exact
        activeClassName="active"
      >Test 1</NavLink>
      <NavLink
        to={'/'}
        exact
        activeClassName="active"
      >Home</NavLink>

      <Switch>
        <Route path="/test/:userId">
          <h1>Test 2</h1>
        </Route>
        <Route path="/test-redirect">
          {redirect}
        </Route>
        <Route path="/test">
          <h1>Test</h1>
        </Route>
        <Route path="/">
          <h1>You're Home</h1>
        </Route>
      </Switch>
    </>
  );
}

export default App;
