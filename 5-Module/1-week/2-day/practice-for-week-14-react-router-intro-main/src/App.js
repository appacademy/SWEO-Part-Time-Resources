import Home from './components/Home';
import Stocks from './components/Stocks';
import Movies from './components/Movies';
import { Route, Switch } from 'react-router-dom'
<<<<<<< HEAD
=======

>>>>>>> 2022-Jan-E
function App() {
  return (
    <div className='main'>
      <h1>App Component</h1>
      <Switch>
        <Route exact path='/'>
          <Home />
        </Route>
<<<<<<< HEAD
        <Route path='/stocks'>
          <Stocks />
        </Route>
        <Route path='/movies'>
          <Movies />
        </Route>
        <Route>
          <h1>Page Not Found</h1>
=======
        <Route exact path='/stocks'>
          <Stocks />
        </Route>
        <Route exact path='/movies'>
          <Movies />
        </Route>
        <Route>
          <h1>Page not found</h1>
>>>>>>> 2022-Jan-E
        </Route>
      </Switch>
    </div>
  );
}

export default App;