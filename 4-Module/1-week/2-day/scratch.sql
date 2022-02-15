DROP TABLE IF EXISTS list_items;
DROP TABLE IF EXISTS items;
DROP TABLE IF EXISTS item_types;
DROP TABLE IF EXISTS lists;
DROP TABLE IF EXISTS users;


CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  username VARCHAR(255)
);

CREATE TABLE lists (
  id SERIAL PRIMARY KEY,
  title VARCHAR(255),
  user_id INTEGER,
  FOREIGN KEY (user_id) REFERENCES users
);

CREATE TABLE item_types (
  id SERIAL PRIMARY KEY,
  type VARCHAR(255)
);

CREATE TABLE items (
  id SERIAL PRIMARY KEY,
  name VARCHAR(255),
  price FLOAT,
  item_type_id INTEGER,
  FOREIGN KEY (item_type_id) REFERENCES item_types
);

CREATE TABLE list_items (
  id SERIAL PRIMARY KEY,
  list_id INTEGER,
  item_id INTEGER,
  quantity INTEGER,
  FOREIGN KEY (list_id) REFERENCES lists,
  FOREIGN KEY (item_id) REFERENCES items
);


-- insert

INSERT INTO users (username)
VALUES
  ('Austin'),
  ('Mitchell');


INSERT INTO lists (title, user_id)
VALUES
  ('Taco Night', 2),
  ('Pizza Night', 2);


INSERT INTO item_types (type)
VALUES
  ('')

-- UPDATE lists
-- SET user_id = 1
-- WHERE user_id = 2;

-- DELETE FROM lists
-- WHERE title in ('Taco Night', 'Pizza Night');
