# Practice Running .sql Files

Now, it's time to practice running SQL commands from a file using SQLite.

## Getting started

Download the starter. `cd` into the __sql-practice__ folder.

Start `sqlite3` using the database __example.db__.

## Step 1: Creating a `.sql` file

Open the file called __create-table.sql__. It's going to create a new table
called `pies`, and insert 50 pie rows into the table.

Use the code below to complete the file, and make sure to save the file on your
machine.

```sql
CREATE TABLE pies (
  flavor VARCHAR(255) PRIMARY KEY,
  price FLOAT
);

INSERT INTO pies VALUES('Apple', 19.95);
INSERT INTO pies VALUES('Caramel Apple Crumble', 20.53);
INSERT INTO pies VALUES('Blueberry', 19.31);
INSERT INTO pies VALUES('Blackberry', 22.86);
INSERT INTO pies VALUES('Cherry', 22.32);
INSERT INTO pies VALUES('Peach', 20.45);
INSERT INTO pies VALUES('Raspberry', 20.99);
INSERT INTO pies VALUES('Mixed Berry', 21.45);
INSERT INTO pies VALUES('Strawberry Rhubarb', 24.81);
INSERT INTO pies VALUES('Banana Cream', 18.66);
INSERT INTO pies VALUES('Boston Toffee', 25.00);
INSERT INTO pies VALUES('Banana Nutella', 22.12);
INSERT INTO pies VALUES('Bananas Foster', 24.99);
INSERT INTO pies VALUES('Boston Cream', 23.75);
INSERT INTO pies VALUES('Cookies and Cream', 18.27);
INSERT INTO pies VALUES('Coconut Cream', 22.89);
INSERT INTO pies VALUES('Chess', 25.00);
INSERT INTO pies VALUES('Lemon Chess', 25.00);
INSERT INTO pies VALUES('Key Lime', 19.34);
INSERT INTO pies VALUES('Lemon Meringue', 19.58);
INSERT INTO pies VALUES('Guava', 18.92);
INSERT INTO pies VALUES('Mango', 19.55);
INSERT INTO pies VALUES('Plum', 20.21);
INSERT INTO pies VALUES('Apricot', 20.55);
INSERT INTO pies VALUES('Gooseberry', 23.54);
INSERT INTO pies VALUES('Lingonberry', 24.35);
INSERT INTO pies VALUES('Pear Vanilla Butterscotch', 25.13);
INSERT INTO pies VALUES('Baked Alaska', 25.71);
INSERT INTO pies VALUES('Chocolate', 19.00);
INSERT INTO pies VALUES('Chocolate Mousse', 21.46);
INSERT INTO pies VALUES('Mexican Chocolate', 28.33);
INSERT INTO pies VALUES('Chocolate Caramel', 26.67);
INSERT INTO pies VALUES('Chocolate Chip Cookie Dough', 18.65);
INSERT INTO pies VALUES('Pecan', 26.33);
INSERT INTO pies VALUES('Bourbon Caramel Pecan', 27.88);
INSERT INTO pies VALUES('Chocolate Pecan', 27.63);
INSERT INTO pies VALUES('Pumpkin', 20.91);
INSERT INTO pies VALUES('Sweet Potato', 20.75);
INSERT INTO pies VALUES('Purple Sweet Potato', 26.34);
INSERT INTO pies VALUES('Cheesecake', 28.99);
INSERT INTO pies VALUES('Butterscotch Praline', 29.78);
INSERT INTO pies VALUES('Salted Caramel', 30.32);
INSERT INTO pies VALUES('Salted Honey', 59.00);
INSERT INTO pies VALUES('Sugar Cream', 33.89);
INSERT INTO pies VALUES('Mississippi Mud', 28.67);
INSERT INTO pies VALUES('Turtle Fudge', 30.58);
INSERT INTO pies VALUES('Fruit Loops', 20.45);
INSERT INTO pies VALUES('Black Forest', 34.99);
INSERT INTO pies VALUES('Maple Cream', 35.88);
INSERT INTO pies VALUES('Smores', 26.43);
INSERT INTO pies VALUES('Milk Bar', 46.00);
```

## Step 2: Populating your database

In SQLite3 CLI, run the command to read and run the file __create-table.sql__.

> Tip: If you can't remember which command to use, you can run `.help` to review
> the available commands in SQLite3.

## Step 3: Verify

To verify that the table has been properly created and populated, run the
following `SELECT` query:

```sql
SELECT * FROM pies ORDER BY flavor;
```

Also, verify the schema by running:

```sqlite3
.schema
```

## Step 4: Repeat

Repeat the command to read your file and see what happens.

<details>
  <summary>What just happened?</summary>
  The running the file returned two kinds of errors. The first error, "table
  pies already exists", is returned because the running the file again caused
  the <code>CREATE TABLE pies</code> statement to run again when there is
  already a pies table. The second error, "UNIQUE constraint failed:
  pies.flavor", is returned because the <code>flavors</code> column in the
  pies table is a primary key column and primary key values must be unique.
  Running the file again attempted to 1) create an already existing pies table,
  and 2) duplicate the entries in the pies table.
</details>

## Step 5: Prevent duplicate data

To prevent the errors from occurring in the previous step, you can reset the
pies table before you create the table and insert data into it.

If you want to reset the pies table using this file, you need to add this line
at the beginning of `create-table.sql`:

```sql
DROP TABLE IF EXISTS pies;
```

If the `pies` table exists, it will be dropped first before re-creating it.

Save your file, and re-run the command to read you file (which now drops the
table, creates the table, and inserts the data).

Verify you have neither errors nor duplicate data by re-running the `SELECT`
statement above.

## Congratulations!

You now have the skills to run SQL commands stored in files!

You will use this process of writing and running SQL files extensively in future
practices since it means you can save your work, and even commit it to GitHub
for use in the future!
