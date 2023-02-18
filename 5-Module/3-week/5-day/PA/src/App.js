import { Route, Switch } from 'react-router-dom';
import BooksIndex from './components/BooksIndex';
import CreateBookForm from './components/CreateBookForm';
import EditBookForm from './components/EditBookForm';
import BookShow from './components/BookShow';

const App = () => (
  <>
    <h1>aA Lending Library</h1>
    <Switch>
      <Route exact path="/" component={BooksIndex} />
      <Route path="/books/new" component={CreateBookForm} />
      <Route exact path="/books/:bookId" component={BookShow} />
      <Route path="/books/:bookId/edit" component={EditBookForm} />
    </Switch>
  </>
);

export default App;
