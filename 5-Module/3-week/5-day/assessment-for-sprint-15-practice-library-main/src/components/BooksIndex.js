import { Link } from 'react-router-dom';
import BookIndexItem from './BookIndexItem';
import {useSelector} from 'react-redux'
import { getAllBooks } from '../store/book';
import { resetBooks } from '../store/book';
import { useDispatch } from 'react-redux';
const BooksIndex = () => {
  const dispatch = useDispatch()
  // possible way to grab the books
  // const reduxBooks = useSelector(state => state.books)
  // better way to format to an array
  const books = useSelector(getAllBooks)
  //also a better way to format to n array
  // const books = Object.values(useSelector(state => state.books));
  // possible way to format to an array
  // Object.keys(reduxBooks).forEach(bookId => books.push(reduxBooks[bookId]))
  const resetBookData = (e) => {
    e.preventDefault();
    dispatch(resetBooks())
  };

  return (
    <section>
      <ul>
        {
          books.map(book => (
            <BookIndexItem 
              book={book}
              key={book.id}
            />
          ))
        }
      </ul>
      <Link to="/books/new">Add New Book</Link>
      <button onClick={resetBookData}>Reset Book Data</button>
    </section>
  );
}

export default BooksIndex;