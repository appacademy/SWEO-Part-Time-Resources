PRAGMA foreign_keys = 1;
DROP TABLE IF EXISTS player_weapon;
DROP TABLE IF EXISTS weapons;
DROP TABLE IF EXISTS elden_ring_players;

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

INSERT INTO elden_ring_players (level, class)
VALUES
(30, 'Knight'), -- id 1
(35, 'Thief'), -- id 2
(5, 'Squire'); -- id 3

INSERT INTO weapons (type, damage)
VALUES
('Long Sword', 15), -- id 1
('Short Bow', 5), -- id 2
('Claymore', 25), -- id 3
('Short Sword', 10); -- id 4

-- insert rows into join table to create  associations between players and weapons.

INSERT INTO player_weapon (player_id, weapon_id)
VALUES
-- Knight has a long sword and a claymore
(1, 1),
(1, 3),
-- Thief has a short bow and a claymore
(2, 2),
(2, 3),
-- Squire has a short sword
(3, 4);

select * from elden_ring_players;
select * from weapons;

select * from player_weapon;

SELECT elden_ring_players.class, weapons.type FROM player_weapon
JOIN elden_ring_players ON (
  player_weapon.player_id = elden_ring_players.id
)
JOIN weapons ON (
  player_weapon.weapon_id = weapons.id
);
