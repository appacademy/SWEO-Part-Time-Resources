import { Link } from 'react-router-dom';
import BookIndexItem from './BookIndexItem';
import { useSelector, useDispatch } from 'react-redux';
import { getAllBooks, resetBooks } from '../store/books';

const BooksIndex = () => {
  const dispatch = useDispatch()
  const booksObject = useSelector(state => state.books)
//   const books = Object.values(booksObject).map((book) => {
//     return {
//         ...book,
//     };
// });
const books = useSelector(state => state.books ? Object.values(state.books) : []) 


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