import { Link, useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { getBookById, addOrUpdateBook } from '../store/books';

const BookShow = () => {
    const { bookId } = useParams();
    const dispatch = useDispatch();

    //! All you need for the assessment
    const bookStateObj = useSelector((store) => store.books);
    const book = bookStateObj[bookId];

    // //? Fancy fun cool version but complex
    // const book = useSelector(getBookById(bookId));

    const changeCheckOut = (e) => {
        e.preventDefault();

        const newBook = { ...book, checkedOut: !book.checkedOut };

        dispatch(addOrUpdateBook(newBook));
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
                {book.checkedOut === true && 'Return'}
                {book.checkedOut === false && 'Check Out'}
            </button>
            <br />
            <Link to="/">Back to Books List</Link>
        </section>
    );
};

export default BookShow;
