-- ------Phase 1: SQLite Commands CLI (not SQL)-------
-- step 1: cd into this folder & run the command that will either connect or create friends.db (it does both depending on if friends.db is created). If we forgot, take a look at the bottom of this page.
    -- CONGRATZ, you're now connected to `friends.db` database!

-- step 2: run the command to show the layout / schema of your tables. You should see nothing, since the database is empty.

-- step 3: now run the SQLite command to read from this file `make-friends.sql` in order to create a table and insert some friends in the database we're connected to (friends.db). Run the `.schema` again.

-- the code below will be ran by SQLite and applied to the friends.db after reading the file.
DROP TABLE IF EXISTS friends;

CREATE TABLE friends(
    id INTEGER PRIMARY KEY,
    first_name VARCHAR(255) NOT NULL,
    last_name VARCHAR(255) NOT NULL,
    middle_name VARCHAR(255) NOT NULL
);

INSERT INTO friends(first_name, last_name, middle_name) VALUES 
    ("wes", "trinh", "t"), 
    ("jesse", "brooks", "t");

-- ------Phase 2: SQL (not SQLite)-------
-- Step 1: in the command line, run the SQL query to get all the records from the friends table (SELECT ...)
-- Step 2: in the command line, run the SQL query to add a friend of your choice. Then run step 1 again. (INSERT ...)



-- ------Phase 1: SQLite Commands CLI (not SQL)-------
-- Step 1 solution: sqlite3 name-of-database.db
-- Step 2 solution: .schema
-- Step 3 soltution: .read make-friends.sql

-- ------Phase 2: SQL (not SQLite)-------
-- Step 1 solution: SELECT * FROM friends;
-- Step 2 solution: INSERT INTO friends(first_name, last_name, middle_name) VALUES ("bobby", "joe", "j");