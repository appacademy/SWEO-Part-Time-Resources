import logo from './logo.svg';
import './App.css';

import Books from './components/Books';
import Mangas from './components/Mangas';
import Pictures from './components/Pictures';
import HomePage from './components/HomePage';
import { Route, Link, NavLink, Switch } from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <header className="App-header">
		<Link to='/books'>
			BOOKS
		</Link>
		<Link to='/mangas'>
			MANGAS
		</Link>
		<NavLink activeClassName="blue" to='/pictures'>
			PICTURES
		</NavLink>

		<Switch>
			<Route exact path='/'>
				<HomePage/>
			</Route>
			<Route path='/books/:bookId'>
				<Books/>
			</Route>
			<Route path='/mangas'>
				<Mangas/>
			</Route>
			<Route path='/pictures'>
				<Pictures/>
			</Route>
			<Route>
				404: ERROR PAGE NOT FOUND
			</Route>
		</Switch>


        <img src={logo} className="App-logo" alt="logo" />
      </header>
    </div>
  );
}

export default App;
