import initialBooks from '../data/initial-books.json';

export const RECEIVE_BOOK = 'books/RECEIVE_BOOK';
export const REMOVE_BOOK = 'books/REMOVE_BOOK';
export const RESET_BOOKS = 'books/RESET_BOOKS';

export const receiveBook = book => ({
  type: RECEIVE_BOOK,
  book
});

export const removeBook = bookId => ({
  type: REMOVE_BOOK,
  bookId
});

export const resetBooks = () => ({
  type: RESET_BOOKS,
});

export const getAllBooks = state => {
  return state?.books ? Object.values(state.books) : [];
};

export const getBook = bookId => state => {
  return state?.books ? state.books[bookId] : null;
};

const initialState = {};
initialBooks.forEach(book => {
  initialState[book.id] = book;
});

const booksReducer = (state = initialState, action) => {
  switch (action.type) {
    case RECEIVE_BOOK:
      return { ...state, [action.book.id]: action.book };
    case REMOVE_BOOK:
      const newState = { ...state };
      delete newState[action.bookId];
      return newState;
    case RESET_BOOKS:
      return initialState;
    default:
      return state;
  }
};

export default booksReducer;
