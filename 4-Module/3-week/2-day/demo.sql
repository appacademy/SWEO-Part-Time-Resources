.mode box
.headers on

CREATE TABLE cats (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  color VARCHAR(30),
  name VARCHAR(30)
);
CREATE TABLE toys (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  name VARCHAR(30),
  cat_id INTEGER,
  FOREIGN KEY (cat_id) REFERENCES cats(id)
);

INSERT INTO cats
(color, name)
VALUES
('Bingo','orange'),
('Mittens','black'),
('Omally','orange'),
('Pepper','calico'),
('Fluffy','white');
INSERT INTO cats
(color, name)
VALUES
('Mouse Bell Thing',1),
('Feather',2),
('Bell Ball',1),
('Feather',3),
('Scratching Post',4);