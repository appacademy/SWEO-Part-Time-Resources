import logo from './logo.svg';
import './App.css';
import Body from './Body';

// functional component
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
	  <Body data= {{"firstName": "Alex"}}/>
    </div>
  );
}

export default App;
