//!!START SILENT
import { Route, Switch, NavLink } from 'react-router-dom';
//!!END
//!!ADD
// import { Route, Switch } from 'react-router-dom';
//!!END_ADD
import Home from './components/Home';
import Stocks from './components/Stocks';
import Movies from './components/Movies';

function App() {
  return (
    <div className='main'>
      <h1>App Component</h1>
      {/*!!START SILENT */}
      <nav className='comp nav'>
        <ul>
          <li>
            <a href='/'>Anchor</a>
          </li>
          <li>
            <NavLink
              activeClassName='purple'
              activeStyle={{ fontWeight: 'bold' }}
              exact
              to='/'
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              activeClassName='purple'
              activeStyle={{ fontWeight: 'bold' }}
              to='/stocks'
            >
              Stocks
            </NavLink>
          </li>
          <li>
            <NavLink
              activeClassName='purple'
              activeStyle={{ fontWeight: 'bold' }}
              to='/movies'
            >
              Movies
            </NavLink>
          </li>
        </ul>
      </nav>
      {/*!!END */}
      <Switch>
        <Route exact path='/'>
          <Home />
        </Route>
        <Route path='/stocks'>
          <Stocks />
        </Route>
        <Route path='/movies'>
          <Movies />
        </Route>
        {/*!!START SILENT */}
        <Route path='/not-logged-in'>
          <h1> You Must Be Logged In To Enter.</h1>
        </Route>
        {/*!!END */}
        <Route>
          <h1>Page Not Found</h1>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
