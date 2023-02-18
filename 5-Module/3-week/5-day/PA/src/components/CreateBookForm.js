import { nanoid } from 'nanoid';
import BookForm from './BookForm';

const CreateBookForm = () => {
  const book = {
    id: nanoid(5),
    title: '',
    author: '',
    checkedOut: false,
  };

  return (
    <BookForm book={book} formType="Create Book" />
  );
}

export default CreateBookForm;
