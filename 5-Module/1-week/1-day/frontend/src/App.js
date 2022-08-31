import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Home from './components/Home';
import People from './components/People';

// functional component
const message = 'Welcome to my frontend application!'
const styleObj = {
	color: "green"
}

function App() {

  // jsx
  return (
	// fragment
	<BrowserRouter>
		<Switch>
			<Route path='/people'>
				<People />
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
