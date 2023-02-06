# DELETE CASCADE, Spicy SELECT, and JOIN

## Relationships crashing and burning - DELETE CASCADE

Creating relationships between tables allows us to leverage powerful tools

Remember our trees and leaves from yesterday?

```sql
-- In leaves table
FOREIGN KEY (tree_id) REFERENCES trees(id)
```

Currently if we delete a tree, thousands of leaves would be left treeless!

Instead, when we kill a tree, we want all the leaves to burn up with it

```sql
FOREIGN KEY (tree_id) REFERENCES trees(id) ON DELETE CASCADE
```

Now if a tree is deleted from our database, ALL leaves that have that tree id also get deleted!

---

## Spice up your SELECT's

SELECT has amazing capabilities, allowing us to request for very specific information from databases

`WHERE column IN (values)`

- Find all matching values in the parentheses
- It's similar to searching for everything inside of an array!

```sql
SELECT name, breed FROM puppies
WHERE breed IN ('Corgi', 'Beagle', 'Yorkshire Terrier');
```

`WHERE column BETWEEN value AND value`

- Specify a range and find all values that fit inside it

```sql
SELECT name, breed, age_yrs FROM puppies
WHERE age_yrs BETWEEN 0 AND 0.5;
```

`ORDER BY value`

- Determines the order that the data is given to us from the table
- Can be combined with a where
- Default order is small to large (a => z, 1 => 100)
- `DESC` flips order (z => a, 100 => 1)

```sql
-- Gives us name and breed of all puppies in alphabetical order by name
SELECT name, breed
FROM puppies
ORDER BY name;

-- Gives us name and breed of all puppies in order of oldest to youngest
SELECT name, breed
FROM puppies
ORDER BY age_yrs DESC; -- notice how age_years isn't being SELECT-ed

-- Gives us all info of all leaves with id's greater than 55, in order of
-- largest to smallest id
SELECT * FROM leaves
WHERE id > 55
ORDER BY id DESC;
```

`LIMIT value` & `OFFSET value`

- Limits the number of outputs to the LIMIT amount
  - Optional OFFSET param to output data only after the OFFSET amount

```sql
SELECT name, breed
FROM puppies
ORDER BY age_yrs
LIMIT 100;

-- OFFSET must be used with a LIMIT
SELECT name, breed
FROM puppies
ORDER BY age_yrs
LIMIT 100 OFFSET 100;
```

## [SQL Operators](https://open.appacademy.io/learn/js-py---pt-mar-2022-online/week-20---sql/sql-operators) add an incredible amount of precision to our queries.

Reference the reading to see more

---

## JOIN related tables

JOIN allows us to get data from tables through foreign keys

Without JOIN, a FK is not enough to grab data from another table

```sql
--- syntax
SELECT either_table_name.column_name FROM first_table_name
JOIN second_table_name ON (first_table_name.fk_name = second_table_name.pk);
```

Technically, this can be done in any order, but it's best practice to join "logically"

- If a table has a FK, start the join there.
  - Since we have a reference to another table, it makes sense to use that as our "starting" point
- If using a joins table, you can start at any table, I personally like to start at the joins table

## One-to-many JOIN

```sql
CREATE TABLE trees (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  tree_type VARCHAR(50),
  location VARCHAR(255)
);

CREATE TABLE leaves (
  id INTEGER PRIMARY KEY AUTOINCREMNT,
  color VARCHAR(50),
  leaf_type VARCHAR(255),
  tree_id INTEGER,
  FOREIGN KEY (tree_id) REFERENCES trees(id)
);

SELECT trees.tree_type, leaves.leaf_type FROM leaves
JOIN trees ON (leaves.tree_id = trees.id);
```

## Many-to-many JOIN

```sql
CREATE TABLE elden_ring_players (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  level INTEGER,
  class VARCHAR(50)
);

CREATE TABLE weapons (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  type VARCHAR(50),
  damage INTEGER
);

CREATE TABLE player_weapon (
  player_id INTEGER,
  weapon_id INTEGER,
  FOREIGN KEY (player_id) REFERENCES elden_ring_players(id)
  FOREIGN KEY (weapon_id) REFERENCES weapons(id)
);

SELECT elden_ring_players.level, weapons.damage FROM player_weapon
JOIN elden_ring_players ON (
  player_weapon.player_id = players.id
)
JOIN weapons ON (
  player_weapon.weapon_id = weapons.id
);
```

## JOIN: Inner vs Left vs Right

The vast majority of the time, you want to Inner JOIN, this is the default join

The "left" table is the table that comes after `FROM`

The "right" table is the table that comes after `JOIN`

Think: left is first, right is second

`JOIN`

- Both tables must have a valid value to display an output

`LEFT JOIN`

- Only the left/first table must have a valid value to display an output

`RIGHT JOIN`

- Only the right/second table must have a valid value to display an output
  - Currently not supported by Sqlite3

`LEFT` and `RIGHT` are interchangeable, just flip the order of the tables in your query
