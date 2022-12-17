import { Link, useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { exchangeBook } from '../store/books';

const BookShow = () => {
  const { bookId } = useParams();
  const dispatch = useDispatch();
  // const book = {};
  const bookObj = useSelector(state => state.books);
  const book = bookObj[bookId];

  const changeCheckOut = (e) => {
    e.preventDefault();
    dispatch(exchangeBook(book.id))
  };

  return (
    <section>
      ID: {book.id}
      <br/>
      Title: {book.title}
      <br/>
      Author: {book.author}
      <br/>
      <button onClick={changeCheckOut}>
        {book.checkedOut === true && "Return"}
        {book.checkedOut === false && "Check Out"}
      </button>
      <br/>
      <Link to="/">Back to Books List</Link>
    </section>
  );
}

export default BookShow;