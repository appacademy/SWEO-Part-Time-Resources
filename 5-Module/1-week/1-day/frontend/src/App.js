import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Home from './components/Home'
import People from './components/People'

// functional component
const props = 'Welcome to my page'
function App() {
  return (
	<BrowserRouter>
		<Switch>
			<Route path='/people'>
				<People />
			</Route>
			<Route path='/'>
				<Home message= {props}/>
			</Route>
		</Switch>
	</BrowserRouter>
  );
}

export default App;
