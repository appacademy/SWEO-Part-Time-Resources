import {WaveIndexFunction} from "./components/WaveIndex";
import WaveHome from "./components/WaveHome";

import { Route, Switch } from 'react-router-dom'


function App() {

  return (
    <Switch>
		<Route exact path='/'>
			<WaveIndexFunction/>
		</Route>

		<Route exact path='/home'>
			<WaveHome/>
		</Route>
	</Switch>
  );
}

export default App;
