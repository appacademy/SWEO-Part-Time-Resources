# Initial Setup
1. Make sure imports include:
    - applyMiddleware
    - compose
    - combineReducers
    - createStore

2. Create `rootReducer` using `combineReducers`
3. Add preloadedState to configureStore params
4. add rootReducer, preloadedState, enhancer to createStore
5. imported Provider and configureStore into index.js or src directory
6. created a store variable and assigned it the return value of configureStore()
7. Used Provider as context to wrap our application and passed in store as the prop `store`

# Setting up books store
1. imported data as `initialBooks`
2. created a booksReducer with `state` and `action` as parameters
3. created a switch statement in our reducer with `action.type` as a parameter
4. added a default case for the reducer that returns `state`
5. exported our `booksReducer`
6. Normalized data in our initialState
7. Added `booksReducer` to our `rootReducer`

# Display a list of books
1. Identify what component is rendered at `/`
2. use a `useSelector` to access the data from our state
3. Commented out the books array
4. Created a `books` array using `Object.values` of our useSelector return value

# Remove a book
1. Identify component that has delete button
2. Add variable `REMOVE_BOOK` to the books.js reducer file
3. Create an action that takes in an `id` and returns an object.
4. Add case to reducer for action.type === `REMOVE BOOK` 
5. In the case delete key from the object and return `newState`

# Display details from a book
1. Imported `useSelector`
2. used useSelector to get the book object using `bookId` from `useParams`

# Creating a book
1. Identify the component that we would be working in / component where the form is being submitted.
2. Added a variable into reducer file for creating a new book (`ADD_BOOK`)
3. Created an action that takes in a `payload` and returns an object
4. Added a case into our reducer switch statement for the action.type of our new action function return object
5. In the `addBook` case we created a new key in the state at the `payload.id` and assigned the `action.payload` to that
6. Import `useDispatch` into the component 
7. Call `dispatch` with the imported action

# Edit a book
1. Import `useSelector` into the `EditBookForm` component
2. used `useSelector` to get `state.books[bookId]` to select current book from our state

# Reset book data
1. Identify location of reset book button (`BooksIndex.js`)
2. Create variable in reducer file
3. Create an action in reducer file
4. Create a new case in our reducer
5. Return initialState in reducer case
6. Import useDispatch and call action inside of dispatch in click handler