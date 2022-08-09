'use strict';

const { Book, Library } = require('../models')

const books = [
	{
		title: 'The Alchemist',
		author: 'Paulo Coelho',
		isCheckedOut: true,
		location: 'Carson Library'
	},
	{
		title: 'Invisible Monsters',
		author: 'chuck palahnuik',
		isCheckedOut: true,
		location: 'Lomita Library'
	},
	{
		title: 'The Da Vinci Code',
		author: 'Dan Brown',
		isCheckedOut: false,
		location: 'Carson Library'
	},
	{
		title: 'The Kingdom',
		author: 'Robert Ferguson',
		isCheckedOut: false,
		location: 'Lomita Library'
	},
	{
		title: 'Hyperion Cantos',
		author: 'Dan Simmons',
		isCheckedOut: true,
		location: 'Lomita Library'
	},
	{
		title: 'The Lord Of The Rings',
		author: 'J. R. R. Tolkien',
		isCheckedOut: true,
		location: 'Carson Library'
	}
]

module.exports = {
  async up (queryInterface, Sequelize) {

	const libraries = await Library.findAll()

	const [carson, lomita] = libraries

	for(const book of books){
		if(book.location === 'Carson Library'){
			carson.createBook(book)
		} else {
			lomita.createBook(book)
		}
	}
  },

  async down (queryInterface, Sequelize) {

  }
};
