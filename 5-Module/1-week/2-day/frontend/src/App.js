import { BrowserRouter, Route, Switch, Link, NavLink } from 'react-router-dom';

import Home from './components/Home';
import People from './components/People';
import Profile from './components/Profile'

// functional component
const message = 'Welcome to my frontend application!'
const styleObj = {
	color: "green"
};

const linkStyle = {
	display: 'inline-block',
	paddingRight: '10px'
};

const activestyle = {
	// display: 'none'
	color: 'red'
};

function App() {

  // jsx
  return (
	// fragment
	<BrowserRouter>

		<NavLink activeStyle={activestyle} style={linkStyle} exact to='/'>
			<h2> Home </h2>
		</NavLink>

		<NavLink activeStyle={activestyle} style={linkStyle} exact to='/people'>
			<h2> People </h2>
		</NavLink>

		<NavLink activeStyle={activestyle} style={linkStyle} exact to='/profile'>
			<h2> Profile </h2>
		</NavLink>

		<Switch>
			<Route path='/people'>
				<People />
			</Route>
			<Route path='/profile'>
				<Profile />
			</Route>
			<Route path='/'>
				<Home message={message} style= {styleObj}/>
			</Route>
		</Switch>
	</BrowserRouter>
  );
  // prop drilling
}

export default App;
