import { Link, useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { checkoutBook, returnBook } from '../store/book';
const BookShow = () => {
  const dispatch = useDispatch()
  const { bookId } = useParams();
  const bookState = useSelector(state => state.books[bookId])
  const book = bookState[bookId]
  const changeCheckOut = (e) => {
    e.preventDefault();
    console.log('inside change', )
    book.checkedOut === true ? dispatch(returnBook(book.id)) : dispatch(checkoutBook(book.id))
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