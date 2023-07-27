import logo from './logo.svg';
import './App.css';
import HomePage from './components/HomePage';
import Houses from './components/Houses';
import Images from './components/Images';
import { Route, Link, NavLink, Switch } from 'react-router-dom'
import { } from 'react-router-dom/cjs/react-router-dom.min';

function App() {
  const houseId = 123
  return (
    <div className="App">
      <div className="App-header">
		<div className='padding'>
			<Link  to='/'> HOME PAGE </Link>
			<NavLink activeClassName='blue' to={`/houses/${houseId}`}> HOUSES </NavLink>
			<NavLink activeClassName='red' to='/images'>IMAGES</NavLink>
		</div>

		<Switch>
			<Route exact path='/'>
				<HomePage/>
			</Route>
			<Route path='/houses/:houseId'>
				<Houses/>
			</Route>
			<Route path='/images'>
				<Images/>
			</Route>
			<Route path='/:userId'>
				<HomePage/>
			</Route>
			<Route>
				<h1>
					404: Page not found
				</h1>
			</Route>
		</Switch>

        <img src={logo} className="App-logo" alt="logo" />
      </div>
    </div>
  );
}

export default App;
