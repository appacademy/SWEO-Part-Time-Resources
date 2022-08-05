import { Route, Switch, Link, NavLink } from 'react-router-dom';
import Home from './components/Home';
import Stocks from './components/Stocks';
import Movies from './components/Movies';

function App() {
  return (
    <div className='main'>
      <h1>App Component</h1>
<<<<<<< HEAD
      <ul>
        <li>
          <NavLink exact
            // activeClassName='purple'
            activeStyle={{
              backgroundColor: 'green',
              color: 'white'
            }}
            to='/'> Home</NavLink>
        </li>
        <li>
          <NavLink
            activeClassName='purple'
            to='/movies'> Movies</NavLink>
        </li>
        <li>
          <NavLink
            activeClassName='purple'
            to='/stocks'> Stocks</NavLink>
        </li>
      </ul>
=======
      <nav className='comp nav'>
        <ul>
          <li>
            <NavLink activeStyle={{
              backgroundColor: 'green',
              color: 'white',
              fontSize: '20px'
            }} exact to='/'>Home</NavLink>

          </li>
          <li>
            <NavLink activeClassName='purple' to='/movies'>Movies</NavLink>

          </li>
          <li>

            <NavLink activeClassName='purple' to='/stocks'>Stocks</NavLink>
          </li>
        </ul>
      </nav>
>>>>>>> 2022-Jan-E
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
        <Route path='/not-logged-in'>
          <h1> You Must Be Logged In To Enter.</h1>
        </Route>
        <Route>
          <h1>Page Not Found</h1>
        </Route>
      </Switch>
    </div>
  );
}

export default App;