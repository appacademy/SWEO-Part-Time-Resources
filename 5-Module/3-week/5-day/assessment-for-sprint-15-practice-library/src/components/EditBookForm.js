import { useParams } from 'react-router-dom';
import BookForm from './BookForm';
import { useSelector } from 'react-redux';
import { getBook } from '../store/books';

const EditBookForm = () => {
  const { bookId } = useParams();
  const book = useSelector(getBook(bookId));

  return (
    <BookForm book={book} formType="Update Book" />
  );
}

export default EditBookForm;