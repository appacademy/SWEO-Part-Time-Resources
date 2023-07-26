import './App.css';
import Header from './Header';

function App() {

  const arrayState = [1,2,3,4,5,6,7,8,9,10]
  const firstName = 'Alex' // state
  const lastName = 'Betita' // state

  return (
    <div className="App-header" style={{
		'height': '100%'
	}}>
	  <Header/>
	  <div>
		{`${firstName} `}
		{lastName}
		<ul>
			{
				arrayState.map(e => {
					return (
						<li>
							{e}
						</li>
					)
				})
			}
		</ul>

	  </div>
    </div>
  );
}

export default App;
