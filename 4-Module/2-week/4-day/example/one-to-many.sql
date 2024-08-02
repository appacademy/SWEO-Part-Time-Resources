PRAGMA foreign_keys = 1;
DROP TABLE IF EXISTS leaves;
DROP TABLE IF EXISTS trees;

CREATE TABLE trees (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  tree_type VARCHAR(50),
  location VARCHAR(255)
);

CREATE TABLE leaves (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  color VARCHAR(50),
  leaf_type VARCHAR(255),
  tree_id INTEGER, -- foreign key represents the tree that the leaf belongs to.
    -- referencing the specific tree that it belongs to.
  FOREIGN KEY (tree_id) REFERENCES trees(id)
);

-- adding trees into table
INSERT INTO trees (tree_type, location)
VALUES
('PINE', 'Yosemite'), -- id 1
('BIRCH', 'Zion'), -- id 2
('MAPLE', 'Yellowstone'); -- id 3

-- view created trees
select * from trees;

-- adding rows to leaves table, but associating them to a specific tree in the trees table.
INSERT INTO leaves (color, leaf_type, tree_id)
VALUES
('green', 'small pine leaf', 1), -- pine leaf
('yellow', 'large pine leaf', 1),
('brown', 'medium pine leaf', 1),
('green', 'large birch leaf', 2), -- birch leaf
('yellow', 'medium birch leaf', 2),
('orange', 'giant maple leaf', 3); -- maple leaf

select * from leaves;

SELECT trees.tree_type, leaves.leaf_type FROM leaves
JOIN trees ON (leaves.tree_id = trees.id);
