import { useDispatch, useSelector } from "react-redux";
import { Link } from 'react-router-dom';

import BookIndexItem from './BookIndexItem';
import { resetBooks } from "../store/booksReducer";

const BooksIndex = () => {
  const dispatch = useDispatch();
  const books = useSelector(state => Object.values(state.books));

  const resetBookData = (e) => {
    e.preventDefault();

    dispatch(resetBooks());
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