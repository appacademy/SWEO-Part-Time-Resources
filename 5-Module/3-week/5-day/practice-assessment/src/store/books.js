import initialBooks from '../data/initial-books.json';

const REMOVE_BOOK = 'books/removeBook';
// const REMOVE_BOOK = 'books/REMOVE_BOOK'
const ADD_BOOK = 'books/addBook';
const RESET_BOOKS = 'books/resetBooks';
const EXCHANGE_BOOK = 'books/exchangeBook'

export const removeBook = (id) => {
    return {
        type: REMOVE_BOOK,
        id
    };
};

export const addBook = (payload) => {
    return {
        type: ADD_BOOK,
        payload
    };
};

export const resetBooks = () => {
    return {
        type: RESET_BOOKS,
        message: 'deleted'
    }
}

export const exchangeBook = (id) => {
    return {
        type: EXCHANGE_BOOK,
        id
    };
};

const initialState = () => {
    const booksObj = {};
    initialBooks.forEach(book => {
        booksObj[book.id] = book;
    })
    return booksObj;
}

const booksReducer = (state = initialState(), action) => {
    const newState = {...state};
    switch (action.type) {
        case REMOVE_BOOK:
            delete newState[action.id]
            return newState;

        case ADD_BOOK:
            newState[action.payload.id] = action.payload
            return newState;

        case RESET_BOOKS:
            return initialState();

        case EXCHANGE_BOOK:
            newState[action.id].checkedOut = !newState[action.id].checkedOut;
            return newState;

        default:
            return state;
    };
};

export default booksReducer;