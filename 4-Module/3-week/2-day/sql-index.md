# SQL Indexes

### Explanation
- A SQL index makes searching for rows in a table by column values faster when your table has many rows / data records.
- A common example is a PRIMARY KEY
- Assigning a UNIQUE constraint on a column is another example of creating an SQL index.

### How does it work
SQL uses a B-tree, similar to a binary search tree, to store data. When creating an indexed column the values will be sorted and paired with a pointer that references the database row that matches the indexed column's value. Since the values become sorted the lookup is O(log n) time, becuase every record does not need to be searched.

### When to create indexes / drawbacks
- Indexing can increase efficiency for lookups, but decrease efficiency for insertion and deletion. 
- Creating an index increases insertion and deletion from O(1) to O(log n).
- It is best to use indexing on columns that will have more lookup operations than insertion / deletion

### Creating an index with raw SQL
```
CREATE INDEX index_name ON table_name(column_list);
```

### UNIQUE
- Adding a unique constraint automatically creates an index on a table
- You can add UNIQUE across several columns to restrict the data combinations across those columns. An example of this syntax:
```
CREATE UNIQUE INDEX index_name ON table_name(col1, col2, col3);
```

### Removing an index
You can remove an index with the following syntax:
```
DROP INDEX column_name;
```

### Altering tables
- Deleting a table or column does not remove the index / index name from other columns that have that index.