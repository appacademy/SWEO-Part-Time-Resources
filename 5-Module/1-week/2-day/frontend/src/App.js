import { BrowserRouter, Route, Switch, Link, NavLink } from 'react-router-dom';

// import './index.css';

import Home from './components/Home'
import People from './components/People'
import Pokemon from './components/Pokemon'

// functional component
const props = 'Welcome to my page';
const style = {
	display: 'inline-block',
	paddingRight: '10px'
}

const active = {
	// display: 'none'
	color: 'red'
}

function App() {
  return (
	<BrowserRouter>
		<NavLink activeStyle={active} exact to='/'>
			<h3 style={style}> HOME </h3>
		</NavLink>

		<NavLink activeStyle={active} exact to='/people'>
			<h3  style={style}> PEOPLE </h3>
		</NavLink>

		<NavLink activeStyle={active} exact to='/pokemon'>
			<h3  style={style}> POKEMON </h3>
		</NavLink>

		<Switch>
			<Route path='/people'>
				<People />
			</Route>
			<Route path='/pokemon'>
				<Pokemon />
			</Route>
			<Route path='/'>
				<Home message= {props}/>
			</Route>
		</Switch>
	</BrowserRouter>
  );
}

export default App;
