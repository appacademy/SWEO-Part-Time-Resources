import { Link, useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { getBook, receiveBook } from '../store/books';

const BookShow = () => {
  const { bookId } = useParams();
  const book = useSelector(getBook(bookId));
  const dispatch = useDispatch();

  const changeCheckOut = (e) => {
    e.preventDefault();
    const modifiedBook = { ...book, checkedOut: !book.checkedOut };
    dispatch(receiveBook(modifiedBook));
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