drop table friends;
CREATE TABLE friends (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    first_name VARCHAR(255) NOT NULL,
    last_name VARCHAR(255) NOT NULL
);

insert into friends (first_name, last_name) values ('amy', 'pond');

insert into friends (first_name, last_name)
values
('rose', 'tyler'),
('martha', 'jones');

INSERT INTO friends (id, first_name, last_name)
VALUES (5, 'Jenny', 'Who');