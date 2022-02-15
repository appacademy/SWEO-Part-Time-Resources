# M3W2D1

## Using With in Creation Commands

- Note that we can add multiple attributes to our postgres users after the WITH keyword.

```sql
CREATE USER notes_app WITH CREATEDB PASSWORD 'password';
```

## Running a SQL file in Postgres

```bash
psql -d boardgame_db < [path_to_file]
```

- IE (they can right click VSCode tab and click Copy Relative Path):

```bash
psql -d boardgame_db < week10/d2/alecs_sql_lecture_code.sql
```

# Jumping In

- Once the database is created, it's time to start adding tables to the database.
- What follows is the code and comments I'd be writing in a SQL file and using the above command to run as I made additions. As you go, comment out old queries so you don't clutter your terminal output too much.
- I leave in the create table and insert commands, and include DROP TABLE IF EXISTS commands at the top of the file
  - This will give you a good oportunity to discuss relational dependency (dropping a table that another table depends on before being able to drop that other table)
- I try to treat this like a brain storming session.
  - IE:
  - If we're building a boardgame app, we need a table to store boardgames.
    - What data should I store? (Don't pose this question to the students, or you'll end up having to edit your inserts on the fly. Just pose the question out loud and talk through the data you're adding columns for)
  - Maybe I want players to sign up on this website. Maybe in addition to their name, I want to track their favorite category of game.

## Phase 1 - Creating your first table (and subsequent tables)

```sql
CREATE TABLE boardgames (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) UNIQUE,
    avg_rating NUMERIC(3, 2),
    max_players INTEGER,
    category VARCHAR(50)
);
```

- Things to discuss:
  - Primary key attributes, used as unique identifiers and indexes for each row in a table
  - Postgres tracks and maintain primary key counts for you
  - Once a primary key is used on a table, that number will never be used again, unless the table is dropped and recreated
    - IE If you have 5 rows in your table with a PK 1, 2, 3, 4, 5 and delete row 4, when you add a new row to the table, the PK will be 6, not 4.
  - Numeric (or DECIMAL) datatypes take in 2 arguments, the scope and the precision (ie: NUMERIC(S, P))
    - Scope: the total number of digits allowed in the number
    - Precision: the number of digits allowed after the decimal point
      - IE NUMERIC(3, 2) allows numbers like 4.56
- Once the table is created, add the following code to the TOP of the file (and then add a similar line for each table you create)

```sql
DROP TABLE IF EXISTS boardgames;
```

- Next it's time to create a table for players:

```sql
CREATE TABLE players (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255),
    fave_category VARCHAR(255)
);
```

- Then remember:

```sql
DROP TABLE IF EXISTS players;
```

- Then their first table with a foreign key:

```sql
CREATE TABLE reviews (
    id SERIAL PRIMARY KEY,
    content TEXT,
    -- foreign key method 1
    boardgame_id INT REFERENCES boardgames(id)
    -- foreign key method 2
    -- boardgame_id INT,
    -- FOREIGN KEY (boardgame_id) REFERENCES boardgames
);
DROP TABLE IF EXISTS reviews;
```

- Notes:

  - Note that the syntax has column names (id, boardgame_id) in parens, and table names not in parens.
  - I like to use drawings with zoom's annotate feature to illustrate how that foreign keys are references to rows on other tables
  - Introduce the concept of a one-to-many relationship
  - Note that at this point the order of your drop statements matters. The reviews drop should be above the boardgames drop.

- Command for updating an existing table:

```sql
ALTER TABLE players ADD COLUMN prefers_video_games boolean default false;
```

- Notes
  - Take a moment to discuss adding default values to columns

# Phase 2 - Inserting Data

- Inserting data is not terribly interesting, but there is a key part of the syntax to hone in on.
- The parens after the INSERT INTO must contain exactly the column names for the data you're inserting.

  - IE, don't list the id column, or a column that you have a default value for that you don't plan to overwrite
  - The order of the columns must also be the order in which you place the data for each row

- Lets insert into boardgames!

```sql
INSERT INTO boardgames (name, avg_rating, max_players, category)
VALUES
    ('Gloomhaven', 8.8, 4, 'Adventure'),
    ('Pandemic Legacy: Season 1', 8.62, 4, 'Cooperative'),
    ('Brass: Birmingham', 8.66, 4, 'Economic'),
    ('Terraforming Mars', 8.43, 5, 'Economic'),
    ('Twilight Imperium: Fourth Edition', 8.7, 6, 'Strategy'),
    ('Spirit Island', 8.34, 4, 'Cooperative'),
    ('Mage Knight', 8.1, 4, 'Adventure'),
    ('Rising Sun', 7.88, 5, 'Strategy');
```

- Insert into players!
  - Change names to current instructors or past instructors the students have interacted with
  - We can list the default column and keep default values except where we want something different!

```sql
INSERT INTO players (name, fave_category, prefers_video_games)
VALUES
    ('Alec', 'Strategy', DEFAULT),
    ('Chris', 'Cooperative', DEFAULT),
    ('Rihana', 'Adventure', DEFAULT),
    ('Cub', 'Economic', true),
    ('Geoffrey', 'Strategy', DEFAULT),
    ('Christian', 'Economic', DEFAULT);
```

- Insert into reviews!
  - Use Postbird to illustrate that these foreign keys are pointing directly to other records in the database

```sql
INSERT INTO reviews (content, boardgame_id)
VALUES
    ('There is nothing I love more than escaping one pandemic for another, 10/10', 2),
    ('This game is far too long!', 5),
    ('My friends and I really like this game, lots of replayability', 6),
    ('I can be a space pirate, favorite game hands down.', 5);
```

# Phase 3 - Updating and Deleting

- I usually have the students watch both videos together, as they are short and pretty simple
- Do some practice updating and deleting, but there isn't a big need to go indepth with these commands

- Update the players table to say Alec prefers video games (even though this is untrue)

```sql
UPDATE players
SET prefers_video_games = TRUE
WHERE name = 'Alec';
```

- Show that we can update multiple records at once with a list for our where clause...

```sql
UPDATE players
SET prefers_video_games = TRUE
WHERE name IN ('Alec', 'Chris');
```

- Similarly for deleting...

```sql
DELETE FROM boardgames
WHERE id = 3;
-- or
DELETE FROM boardgames
WHERE category IN ('Adventure', 'Economic');
```

- Feel free to add a new game to the boardgames table to illustrate the point about the PK skipping "unused" (deleted) ids:

```sql
INSERT INTO boardgames (name, avg_rating, max_players, category)
VALUES
('Scythe', 8.5, 5, 'Strategy');
```

# Phase 4 - Basic querying

- Getting all of a particular resource:
  - I use super basic queries like this regularly in the psql shell to check on the state of my data
  - Alternatively of course, just use Postbird. I'm just old school or something. Maybe a masochist.

```sql
SELECT * FROM players;
```

- Getting only the name column of all boardgames in the Cooperative category
  - Demonstrates ability to specify what columns of information we want returned, and a simple where clause

```sql
SELECT name FROM boardgames
WHERE category = 'Cooperative';
```

- Getting the name and average rating as a percent of all games with an average rating higher than 8.5
  - Demonstrates doing mathematical operations on whole columns
  - Demonstrates aliasing (show without alias first just to see what it looks like)
  - Pull up a list of all the different possible operators for where clauses. Don't go through all of them, just show that you can use all the logical operators you'd want to be able to use

```sql
SELECT name, (avg_rating * 10) as percent_rating FROM boardgames
WHERE avg_rating > 8.5;
```

- Getting all boardgame names with average ratings between two values
  - Just a quick demo of the BETWEEN operator

```sql
SELECT name FROM boardgames
WHERE avg_rating BETWEEN 8.3 AND 8.65;
```

- Query using a foreign key (no joins yet)

```sql
SELECT content FROM reviews
WHERE boardgame_id = 5;
```

- A query using a WHERE NOT clause plus an additional WHERE clause

```sql
SELECT name, category FROM boardgames
WHERE NOT category = 'Adventure'
AND avg_rating > 8.5;
```

- A more complex query, adding in the LIMIT keyword

```sql
SELECT name, category FROM boardgames
WHERE category NOT IN ('Adventure', 'Economic')
AND avg_rating > 8.5
LIMIT 2;
```

- Discuss the LIKE operator
  - The % symbols indicate that the query will match if it finds a string with any text before or after the symbol
    - IE '%word%' will match any text with 'word' anywhere in it
    - 'word%' will only match if 'word' is at the beginning of the string
    - '%word' will only match if 'word' is at the end of the string

```sql
SELECT name FROM boardgames
WHERE name LIKE 'T%';
-- or
SELECT content FROM reviews
WHERE content LIKE '%love%'
OR content LIKE '%like%';
```

- Demonstrate the ORDER BY keyword

```sql
SELECT name FROM players
ORDER BY name DESC;
-- or
SELECT name FROM boardgames
WHERE category = 'Strategic'
ORDER BY avg_rating DESC;
```

# Phase 5 - Joins, join tables, and joining tables

- Joins allow us to query a single time for related data, flexing the "Relational" aspect of this RDBMS
- We're going to create a new table and add new data to it during this step, to act as a joins table between players and boardgames, immitating a feature that could allow players to indicate which games they want to play
- New table and data:

```sql
create table lfg (
    id SERIAL PRIMARY KEY,
    game_id INTEGER,
    player_id INTEGER,
    FOREIGN KEY (game_id) REFERENCES boardgames,
    FOREIGN KEY (player_id) REFERENCES players
);

INSERT INTO lfg (player_id, game_id)
VALUES
    (1, 5),
    (1, 2),
    (3, 1),
    (5, 5),
    (2, 2),
    (4, 4),
    (6, 4),
    (1, 4);

-- Don't forget to...
DROP TABLE IF EXISTS lfg;
```

- Briefly discuss (reassuring them that we'll talk more about these relationships as the week goes on) many-to-many relationships. I find that using a drawing tool to help demonstrate is helpful

- Our first joins query
  - Call out that we no longer just list column names, but table.columnNames, in case there are tables with the same column name
  - Show that the order inside the parens on the join statement does not matter, and we could change the table listed for FROM and JOIN if we want to

```sql
SELECT boardgames.name, boardgames.id, reviews.boardgame_id, reviews.content
FROM boardgames
JOIN reviews ON (boardgames.id = reviews.boardgame_id)
-- optional:
WHERE avg_rating > 8.5;
```

- Demonstrating a more complex join using that lfg table
  - Switch up the order of which tables you use for FROM and JOIN statements. Note that you need direct "access" from one table to the next (foreign key access)
  - For instance if you start from players, you must join lfg before you can join boardgames. If you start from lfg, you can then join either of the other tables in any order.

```sql
SELECT players.name, players.id, lfg.player_id, lfg.game_id, boardgames.id, boardgames.name
FROM players
JOIN lfg ON (players.id = lfg.player_id)
JOIN boardgames ON (lfg.game_id = boardgames.id)
WHERE boardgames.name = 'Terraforming Mars'
ORDER BY players.name ASC;
```

- Use Postbird to show what some outer joins queries look like, but assure students they will almost always be using INNER JOINs (default to just JOIN)

```sql
SELECT boardgames.name, boardgames.id, reviews.content
FROM boardgames
LEFT OUTER JOIN reviews ON (boardgames.id = reviews.boardgame_id);
```
