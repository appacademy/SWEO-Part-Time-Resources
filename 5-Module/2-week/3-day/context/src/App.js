import PokemonProvider from './context/PokemonContext';

import A from './components/A';
import F from './components/F';

function App() {
  return (
	<>
	   <PokemonProvider>
			<A/>
	   </PokemonProvider>
		<F/>
	</>
  );
}

export default App;
