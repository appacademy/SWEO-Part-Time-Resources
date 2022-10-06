# Relationships

## Foreign Key
A foreign key is a key on a table that is used to reference the primary key on another table.

Below is an example of a table with a foreign key. The bottom table references the top table in the first_name_id column. 

Each number in the first_name_id column represents an id in the top table.

| id | first_name |
|:---:|:---:|
| 1 | Yake |
| 2 | Jacob | 
| 3 | Jake |

 | id | last_name | first_name_id |
 |:---:|:---:|:---:|
 | 1 | North | 1 |
 | 2 | South | 3 |
 | 3 | East | 2 |

 ## One-to-one
 A relationship where one row is used to reference one, and only one row in another table. An example of this would be a country / capital city. A country has one capital and the capital belongs to that one country.

 ## One-to-many
 One of the more common relationships. Can be used when many rows in a table are able to reference one row in another table. An example is a city and it's residents. A city has many residents but the residents only reside in one city. 

 ## Many-to-many
 Used when many rows in one table reference many rows in another table. Uses a join table to connect the two tables. An example of this would be books. A person can read multiple books, and a book can be read by multiple people.
