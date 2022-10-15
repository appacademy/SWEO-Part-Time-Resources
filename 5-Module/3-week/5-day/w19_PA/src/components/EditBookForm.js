import { useParams } from 'react-router-dom';
import BookForm from './BookForm';
import { useSelector } from 'react-redux';
import { getBookById } from '../store/books';

const EditBookForm = () => {
    const { bookId } = useParams();
    // //! All you need for the assessment
    // const bookStateObj = useSelector((store) => store.books);
    // const book = bookStateObj[bookId];

    //? Fancy fun cool version but complex
    const book = useSelector(getBookById(bookId));

    return <BookForm book={book} formType="Update Book" />;
};

export default EditBookForm;
