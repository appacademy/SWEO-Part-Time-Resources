## Useful Sqlite Commands
- `sqlite3 name-of-database.db`
- `.mode column`
- `.read`
- `.shell clear`

## Things to Keep In Mind
- If you got through the practice exam (regardless of time), you will be good on the exam.

- If you don't understand what they are trying to ask, `take a look at the example`.
- Always run the `SELECT` query in an example db to test your code as well
  - `copy paste in sqlite3 command line`

- Focus on `saturday's content for Querying, Joining tables together / relationships`.

- `tip for **join tables**`: use the foreign key to find match and to import ('extend') the data onto the row.
  
- when `working with many tables`, can do syntax: `table.columnName` to be really precise (when joining, there might be 2 columns both called `id`)
  
- Notice single quotes, `do not use double quotes`, it could fail test specs. 
  
- `Watch out for typos` especially when you're writing in data
  - **Don't forget `;`**
  
## Querying Syntax and Clause You'll Need To Know
- `SELECT ... FROM ...`
	- `SELECT * FROM <table1> JOIN <table2> ON (foreign key = primary key);` -- then you can either WHERE, JOIN, ORDER, etc. again.
- `WHERE`
- `IN` (...)
- `ORDER BY item1, item2, ...`
	-we can ORDER BY more than just 1 rule use comma separated to apply another rule if all else equals
- `BETWEEN`
- `AND`
- `OR`
- `LIMIT`
- `JOIN` (join tables based on foreign keys)