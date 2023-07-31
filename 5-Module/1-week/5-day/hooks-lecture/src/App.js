import logo from './logo.svg';
import './App.css';
import Developers from './components/Developers';
import Games from './components/Games';
import {Route, NavLink} from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <div className="App-header">
		<div>
			<NavLink to='/developers'>
				Developers
			</NavLink>
			<br></br>
			<NavLink to='/games'>
				Games
			</NavLink>
		</div>
		<Route path='/developers'>
			<Developers />
		</Route>
		<Route path='/games'>
			<Games/>
		</Route>
      </div>
    </div>
  );
}

export default App;
