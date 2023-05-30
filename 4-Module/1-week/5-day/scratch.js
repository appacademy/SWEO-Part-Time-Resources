//SQL -> structured query langauge

// databases - allow us to store information and data, we use SQL to interact with the database
// relational databases
// non-relational databases

// pros of relational databases
// it uses schema -> as a blueprint or a set pattern

// tables -> are your resources names
// entites -> are your rows for that particular table/resource
// its faster, more efficient and scales with a lot of data
// uses SQL

// queries are short for commands that allows to interact with the database

// example:             joins table example
// tablename:	users table					users_products table		products table
// columns:    id firstName null lastName		userid       productid		id  productname stock
// rows  		1 	alex 	betita			 1    			1			1 	toothbrush      10
// rows   		2 	kate 	cizewski		 1				2			2 	cellphone       100
// rows   		3 	bill 	adams			 3		        1			3 	waterbottle      5
// rows   		4	     	example

// fk -> foreign key
//      property table
//      id location  areacode  foreignKeyUsers  primaryKey
// 		 1 california 4142 		fk-users 1			1


// columns -> columns types we have to specify the type of data that goes into column
// id column int
//            string data types
// firstName varChar/string/text
// lastName  varChar/string/text

// column constraints
// specifying if the column is null or not null
// null meaning we can leave it blank
// not null meaning it has to contain a value

// column defaults
// defaults(5)

// SQL COMMANDS
// SELECT -> allows us to select a table
// CREATE -> allows us to create a table
// INSERT -> post data into a table, create an entity into a table, insert a row into a table
// DELETE -> delete data from table, delete entity from table, delete row from table
// UPDATE -> update data from table, update entity from table, update row from table

// CREATE syntax
// CREATE TABLE <table name> (
// <column name> <data type> <column constraints>,
// <column name> <data type> <column constraints>,
// <column name> <data type> <column constraints>,
//);

// non-relational databases
// does not use any sort of schema
// it can allow more information and data to be stored
// do not use SQL or are semi-SQL
// tables -> documents
//    document example:
//		users document
//   {id: 1, firstName: alex, lastName: betita}
//   {id: 2, firstName: nathan, lastName: harwit, profession: go teacher}
//	 {id: 3, name: Kate}
