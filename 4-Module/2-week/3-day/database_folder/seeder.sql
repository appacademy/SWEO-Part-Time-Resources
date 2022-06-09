delete from Users;
insert into Users (id, first_name, last_name)
values
(1, 'Baylen', 'Doss');

select * from Users;

delete from Posts;
insert into Posts (id, user_id, content)
values
(1, 1, 'Post 1'),
(2, 1, 'Post 2'),
(3, 1, 'Post 3');

select * from Posts;