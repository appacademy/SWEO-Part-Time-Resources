# Create or Add relations


<br></br>

# Create a Row in a table by Model
```
    //import model
    const {Author} = require('../db/models')
    const reqBody = req.body
    const newAuthorInstance = await Author.create(reqBody);
    res.json(newAuthorInstance);
```

<br></br>

# Create a Row in a table through its associated parent
```
    //import model
    const {Author} = require('../db/models')

    //grab id to find author
    const authorId = req.params.id

    //grab req body to create new book
    const reqBodyNewBook = req.body

    /find author with id pk
    const author = await Author.findByPk(authorId)

    //create a new book and assosciate it with the found author at the same time
    author.createBook(reqBodyNewBook)

    res.json(newAuthorInstance);
```
<br></br>

# Create a Row in a table through its associated child
```
    //import model
    const {Book} = require('../db/models')

    //grab objects out of req body
    const {book, author} = req.body


    /create child new book
    const newBookInstance = await Book.create(book)

    //create a new author and assosciate it with the found our newly created book
    newBookInstance.createAuthor(author)

    res.json(newBookInstance);
```
<br></br>

# Add associations from parent to chil
```
    //import model
    const {Author} = require('../db/models')

    //grab id to find author
    const authorId = req.params.id

    //grab req body to create new book
    const {alreadyCreatedBooksArray} = req.body

    /find author with id pk
    const author = await Author.findByPk(authorId)
    //adding association between this author and many books
    author.addBooks(alreadyCreatedBooksArray)
    //if you were only adding one book, the method would be addBook()
```
<br></br>

# Create Row with build and save
```
   //import model
    const {Author} = require('../db/models')

    const reqBodyNewAuthor = req.body

    const newAuthor = await Author.build(reqBodyNewAuthor)
    await newAuthor.save()
    res.json(newAuthor)
```
