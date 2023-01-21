import initialBooks from "../data/initial-books.json";

const REMOVE_BOOK = "REMOVE_BOOKS";
const RECEIVE_BOOK = "RECEIVE_BOOK";
const RESET_BOOKS = "RESET_BOOKS";

export const removeBook = bookId => ({
  type: REMOVE_BOOK,
  bookId,
});

export const receiveBook = book => ({
  type: RECEIVE_BOOK,
  book,
});

export const resetBooks = () => ({
  type: RESET_BOOKS
});

const initialState = {};
initialBooks.forEach(book => {
  initialState[book.id] = book;
});

const booksReducer = (state = initialState, action) => {
  switch (action.type) {
    case REMOVE_BOOK:
      const newState = { ...state };
      delete newState[action.bookId];
      return newState;
    case RECEIVE_BOOK:
      return { ...state, [action.book.id]: action.book };
    case RESET_BOOKS:
      return initialState;
    default:
      return state;
  };
};

export default booksReducer;