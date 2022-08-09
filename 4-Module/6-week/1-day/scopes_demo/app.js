const express = require('express');

const app = express();

const { Book, Library, sequelize } = require('./db/models');

app.use(express.json());

app.get('/', async (req, res)=> {
	// const books = await Book.findAll();

	// using scopes
	// const books = await Book.scope("isCheckedOut").findAll();

	// merging scopes
	// const books = await Book.scope("defaultScope","isCheckedOut").findAll();
	// const books = await Book.scope(["defaultScope","isCheckedOut"]).findAll();

	// const books = await Book.count()

	// const books = await Book.findAll({
	// 	attributes: [
	// 		[sequelize.fn('COUNT', 'author'), 'number_of_books']
	// 	]
	// })

	// function scopes
	// const books = await Book.scope("defaultScope",{
	// 	method: ["isAtLibrary", "Carson"]
	// }).findAll();

	const books = await Book.scope('defaultScope','includeLibrary',	{
		method: ["isAtLibrary", "Lomita"]
	}).findAll();

	res.json(books)
})

// const port = process.env.PORT;

const port = 8000

app.listen(port, () => {
	console.log(`Server listening on ${port}`)
})
