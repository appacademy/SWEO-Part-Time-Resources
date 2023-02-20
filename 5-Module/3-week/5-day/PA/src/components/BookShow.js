import { Link, useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { createBook } from '../store/books';

const BookShow = () => {
  const dispatch = useDispatch()
  const { bookId } = useParams();
  const book = useSelector(state => state.books[bookId]);

  const changeCheckOut = (e) => {
    e.preventDefault();
    const changed = {...book, checkedOut: !book.checkedOut}
    dispatch(createBook(changed))
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