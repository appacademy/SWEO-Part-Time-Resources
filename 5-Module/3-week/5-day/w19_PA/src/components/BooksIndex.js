import { Link } from 'react-router-dom';
import BookIndexItem from './BookIndexItem';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { getAllBooks, resetBooks } from '../store/books';

const BooksIndex = () => {
    const dispatch = useDispatch();

    //? Super cool version using complex stuff
    // const books = useSelector(getAllBooks);

    //! Slightly cleaner version
    // const bookStateObj = useSelector((store) => store.books);
    // const books = Object.values(bookStateObj);

    //! All we need for the assessment
    const books = [];
    const bookStateObj = useSelector((store) => store.books);

    for (const key in bookStateObj) {
        books.push(bookStateObj[key]);
    }

    const resetBookData = (e) => {
        e.preventDefault();

        dispatch(resetBooks());
    };

    return (
        <section>
            <ul>
                {books.map((book) => (
                    <BookIndexItem book={book} key={book.id} />
                ))}
            </ul>
            <Link to="/books/new">Add New Book</Link>
            <button onClick={resetBookData}>Reset Book Data</button>
        </section>
    );
};

export default BooksIndex;
