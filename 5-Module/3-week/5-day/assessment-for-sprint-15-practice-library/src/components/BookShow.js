import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from 'react-router-dom';

import { receiveBook } from "../store/booksReducer";

const BookShow = () => {
  const dispatch = useDispatch();
  const { bookId } = useParams();
  const books = useSelector(state => Object.values(state.books));
  const book = books.find(book => book.id === bookId);

  const changeCheckOut = (e) => {
    e.preventDefault();

    const modifiedBook = { ...book, checkedOut: !book.checkedOut };
    dispatch(receiveBook(modifiedBook));
  };

  return (
    <section>
      ID: {book.id}
      <br />
      Title: {book.title}
      <br />
      Author: {book.author}
      <br />
      <button onClick={changeCheckOut}>
        {book.checkedOut === true && "Return"}
        {book.checkedOut === false && "Check Out"}
      </button>
      <br />
      <Link to="/">Back to Books List</Link>
    </section>
  );
}

export default BookShow;