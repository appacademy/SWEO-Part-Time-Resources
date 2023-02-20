import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import BookForm from './BookForm';

const EditBookForm = () => {
  const { bookId } = useParams();
  const book = useSelector(state => state.books[bookId]);

  return (
    <BookForm book={book} formType="Update Book" />
  );
}

export default EditBookForm;