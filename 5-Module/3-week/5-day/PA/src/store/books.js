import initialBooks from "../data/initial-books.json";

const REMOVE_BOOK = "books/REMOVE_BOOK";
const CREATE_BOOK = 'books/CREATE_BOOK'
const RESET_BOOKS = 'books/RESET_BOOKS'

export const createBook = book => ({
    type: CREATE_BOOK,
    book
})

export const removeBook = (bookId) => ({
  type: REMOVE_BOOK,
  bookId,
});

export const resetBooks = () => ({
    type: RESET_BOOKS
})

export const getAllBooks = (state) =>
  state.books ? Object.entries(state.books) : null;

const initialState = {};
initialBooks.forEach((book) => {
  initialState[book.id] = book;
});

const booksReducer = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_BOOK:
        return {...state, [action.book.id]: action.book}
    case REMOVE_BOOK:
        const newState = {...state}
        delete newState[action.bookId]
        return newState
    case RESET_BOOKS:
        return initialState
    default:
      return state;
  }
};

export default booksReducer;
