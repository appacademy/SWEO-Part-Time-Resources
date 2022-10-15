import startingData from '../data/initial-books.json';

//! Action Types

const DELETE_BOOK = 'books/DELETE_BOOK';
const ADD_OR_UPDATE_BOOK = 'books/ADD_OR_UPDATE_BOOK';
const RESET_BOOKS = 'books/RESET_BOOKS';
// const CREATE_BOOK = 'books/CREATE_BOOK';
// const EDIT_BOOK = 'books/EDIT_BOOK';

//! Action Creator Functions

export const deleteBookById = (id) => {
    return {
        type: DELETE_BOOK,
        id,
    };
};

export const addOrUpdateBook = (book) => {
    return {
        type: ADD_OR_UPDATE_BOOK,
        book,
    };
};

export const resetBooks = () => {
    return {
        type: RESET_BOOKS,
    };
};

// export const createBook = (book) => {
//     return {
//         type: CREATE_BOOK,
//         book,
//     };
// };

// export const editBook = (book) => {
//     return {
//         type: EDIT_BOOK,
//         book,
//     };
// };

//? Extra cool helper functions

export const getAllBooks = (store) => {
    return Object.values(store.books);
};

export const getBookById = (id) => (store) => {
    return store.books[id];
};

// export const getBookById = (id) => {
// 	return (store) => {
// 		return store.books[id];
// 	};
// }

// export const getBookById = (id) => {
//     return function (store) {
//         return store.books[id];
//     };
// };

//! Default state creation

const defaultState = {};

startingData.forEach((el) => (defaultState[el.id] = el));

//! Reducer

const booksReducer = (state = defaultState, action) => {
    // const newState = { ...state };

    switch (action.type) {
        case ADD_OR_UPDATE_BOOK:
            return { ...state, [action.book.id]: action.book };

        case DELETE_BOOK:
            const newState = { ...state };
            delete newState[action.id];
            return newState;

        case RESET_BOOKS:
            return defaultState;

        default:
            return state;

        // case CREATE_BOOK:
        //     newState[action.book.id] = action.book;
        //     return newState;

        // case EDIT_BOOK:
        //     newState[action.book.id] = action.book;
        //     return newState;
    }
};

export default booksReducer;
