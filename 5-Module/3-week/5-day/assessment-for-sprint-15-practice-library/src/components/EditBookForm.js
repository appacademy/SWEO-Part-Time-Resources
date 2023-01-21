import { useSelector } from "react-redux";
import { useParams } from 'react-router-dom';

import BookForm from './BookForm';

const EditBookForm = () => {
  const { bookId } = useParams();
  const books = useSelector(state => Object.values(state.books));
  const book = books.find(book => book.id === bookId);

  return (
    <BookForm book={book} formType="Update Book" />
  );
}

export default EditBookForm;