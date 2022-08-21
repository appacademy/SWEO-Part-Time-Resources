import data from '../data/initial-books.json'
const ADD_BOOK = 'books/add'
const CHECKOUT_BOOK = 'books/checkout'
const RETURN_BOOK = 'books/return'
const DELETE_BOOK = 'books/delete'
const RESET_STATE = 'books/reset'



export const addBook = (book) => {
    return {
        type: ADD_BOOK,
        payload: book
    }
}

export const checkoutBook = (bookId) => {
    return {
        type: CHECKOUT_BOOK,
        payload: bookId
    }
}

export const returnBook = (bookId) => {
    return {
        type: RETURN_BOOK,
        payload: bookId
    }
}

export const deleteBookAction = (bookId) => {
    return {
        type: DELETE_BOOK,
        payload: bookId
    }
}


export const resetBooks = () => {
    return {
        type: RESET_STATE
    }
}

// possible data format function 
function initialStateFunc(array) {
    const obj = {}
    array.forEach(el => {
        obj[el.id] = el
    })
    return obj
}

const initialState = initialStateFunc(data)

export const getAllBooks = state => Object.values(state.books);


const bookReducer = (state = initialState, action) => {
    const newState = { ...state }
    switch (action.type) {
        case DELETE_BOOK:
            //possible but slower
            // const booksToKeep = Object.values(newState).filter(el=> el.id !== action.payload)
            // const newObj = {}
            // booksToKeep.forEach(el => {
            //     newObj[el.id] = el
            // })
            delete newState[action.payload]
            return newState
        case ADD_BOOK:
            newState[action.payload.id] = action.payload
            return newState
        case RESET_STATE:
            return initialState
        case CHECKOUT_BOOK:
            // const checkoutObj = {...newState[action.payload]}
            // checkoutObj.checkedOut = true
            // newState[action.payload] = checkoutObj
            newState[action.payload].checkedOut = true
            return newState
        case RETURN_BOOK:
            // const returnObj = {...newState[action.payload]}
            // returnObj.checkedOut = false
            // newState[action.payload] = returnObj
            newState[action.payload].checkedOut = false
            return newState
        default:
            return newState
    }
}

export default bookReducer