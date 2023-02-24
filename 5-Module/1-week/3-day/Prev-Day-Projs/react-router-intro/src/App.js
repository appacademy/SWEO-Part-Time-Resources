//!!START SILENT
import { Route, Switch } from 'react-router-dom';
//!!END
import Home from './components/Home';
import Stocks from './components/Stocks';
import Movies from './components/Movies';

function App() {
  return (
    <div className='main'>
      <h1>App Component</h1>
      {/*!!ADD */}
      {/* <Home /> */}
      {/* <Stocks /> */}
      {/* <Movies /> */}
      {/*!!END_ADD */}
      {/*!!START SILENT */}
      <Switch>
        <Route exact path='/'>
          <Home />
        </Route>
        <Route path='/stocks'>
          <Stocks />
        </Route>
        <Route path='/movies'>
          <Movies />
        </Route>
        <Route>
          <h1>Page Not Found</h1>
        </Route>
      </Switch>
      {/*!!END */}
    </div>
  );
}

export default App;
